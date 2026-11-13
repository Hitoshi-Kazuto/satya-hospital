import { Link } from "react-router-dom";
import { useId, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CreditCard, Stethoscope, User, Video } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { btn } from "@/components/site/buttons";
import { Reveal } from "@/components/site/Reveal";
import { doctors, departments } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";

type Form = {
  type: "physical" | "video";
  department: string;
  doctor: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
};

const STEPS = ["Payment", "Department", "Doctor", "Date & time", "Details"] as const;
const TIMES = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

const CONSULTATION_FEE = 500;
// Official Satya Hospital Razorpay payment links
const RAZORPAY_LINKS = {
  physical: "https://rzp.io/l/XtICExM",
  video: "https://rzp.io/l/dTuLXmJ",
} as const;

const legendClass = "text-label font-semibold uppercase text-ink-muted";

function Appointment() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>({
    type: "physical",
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const canNext = useMemo(() => {
    switch (step) {
      case 0:
        return paymentCompleted;
      case 1:
        return !!form.department;
      case 2:
        return !!form.doctor;
      case 3:
        return !!form.date && !!form.time;
      case 4:
        return form.name.length > 1 && /^\+?\d[\d\s-]{7,}$/.test(form.phone);
      default:
        return true;
    }
  }, [step, form, paymentCompleted]);

  const handlePayment = () => {
    const payLink = form.type === "video" ? RAZORPAY_LINKS.video : RAZORPAY_LINKS.physical;
    if (typeof window !== "undefined") {
      window.open(payLink, "_blank", "noopener,noreferrer");
    }
    setPaymentCompleted(true);
  };

  const submit = () => {
    const id = "SH-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setSubmitted(id);
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Book Appointment"
        title="Book an appointment"
        intro="Pay first, then choose your department, doctor and time."
      >
        <div className="mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-white/20 bg-white/5 px-5 py-3.5 text-meta">
          <span className="text-white/70">Consultation fee:</span>
          <span className="tabular font-display text-h3 text-white">₹{CONSULTATION_FEE}</span>
          <span aria-hidden className="text-white/40">
            ·
          </span>
          <span className="text-white/80">In-person or video · OPD 10:00 AM – 3:00 PM</span>
        </div>
      </PageHeader>

      <section className="shell-narrow band">
        {submitted ? (
          <div className="rounded-lg border border-brand-line bg-white p-10 text-center shadow-card">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-tint text-brand">
              <Check aria-hidden className="h-8 w-8" />
            </span>
            <h2 className="mt-5 font-display text-h2 text-ink">Appointment confirmed</h2>
            <p className="measure-tight mx-auto mt-3 text-meta text-ink-muted">
              Your appointment ID is{" "}
              <span className="tabular font-semibold text-brand">{submitted}</span>. We've sent
              confirmation via SMS, WhatsApp and email.
            </p>
            <dl className="mt-8 divide-y divide-brand-line rounded-lg bg-brand-tint px-6 text-left text-meta">
              <Row label="Department" value={form.department} />
              <Row label="Doctor" value={form.doctor} />
              <Row label="When" value={`${form.date} · ${form.time}`} />
              <Row label="Consultation" value={form.type === "video" ? "Video" : "In-person"} />
              <Row label="Patient" value={`${form.name} · ${form.phone}`} />
            </dl>
            <Link to="/" className={`${btn.primary} mt-9`}>
              Back to home <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <Stepper step={step} />

            <Reveal className="mt-8">
              <div className="rounded-lg border border-brand-line bg-white p-6 shadow-card sm:p-9">
                {step === 0 && (
                  <div className="space-y-7">
                    <RadioGroup
                      legend="Consultation type"
                      name="consultation-type"
                      value={form.type}
                      onChange={(v) => setForm({ ...form, type: v as Form["type"] })}
                      columns={2}
                      options={[
                        {
                          value: "physical",
                          title: "In-person",
                          subtitle: "Visit the hospital",
                          icon: <User aria-hidden className="h-[18px] w-[18px]" />,
                        },
                        {
                          value: "video",
                          title: "Video",
                          subtitle: "Consult online",
                          icon: <Video aria-hidden className="h-[18px] w-[18px]" />,
                        },
                      ]}
                    />

                    <div className="flex items-start gap-3 rounded-md border border-brand-line bg-brand-wash p-5 text-meta text-ink-muted">
                      <CreditCard aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <p>
                        Consultation fee of{" "}
                        <span className="font-semibold text-ink">₹{CONSULTATION_FEE}</span> is
                        collected securely via Razorpay (UPI, cards, netbanking or wallets). Click
                        "Pay now" to complete payment securely.
                      </p>
                    </div>

                    <button onClick={handlePayment} className={`${btn.primary} w-full`}>
                      Pay now <ArrowRight aria-hidden className="h-4 w-4" />
                    </button>

                    <p
                      aria-live="polite"
                      className="text-center text-meta font-medium text-lime-ink"
                    >
                      {paymentCompleted ? "Payment completed! Continue to select department." : ""}
                    </p>
                  </div>
                )}

                {step === 1 && (
                  <RadioGroup
                    legend={STEPS[1]}
                    name="department"
                    value={form.department}
                    onChange={(v) => setForm({ ...form, department: v })}
                    options={departments.map((d) => ({
                      value: d.name,
                      title: d.name,
                      subtitle: d.desc,
                      icon: <d.icon aria-hidden className="h-[18px] w-[18px]" />,
                    }))}
                  />
                )}

                {step === 2 && (
                  <RadioGroup
                    legend={STEPS[2]}
                    name="doctor"
                    value={form.doctor}
                    onChange={(v) => setForm({ ...form, doctor: v })}
                    columns={2}
                    options={doctors.map((d) => ({
                      value: d.name,
                      title: d.name,
                      subtitle: `${d.specialty} · ${d.experience}`,
                      icon: <Stethoscope aria-hidden className="h-[18px] w-[18px]" />,
                    }))}
                  />
                )}

                {step === 3 && (
                  <div className="space-y-7">
                    <div>
                      <label htmlFor="appt-date" className={legendClass}>
                        Date
                      </label>
                      <input
                        id="appt-date"
                        type="date"
                        min={new Date().toISOString().slice(0, 10)}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="mt-3 w-full rounded-md border border-brand-line bg-white px-4 py-3 text-body text-ink transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>

                    <RadioGroup
                      legend="Preferred time"
                      name="time"
                      value={form.time}
                      onChange={(v) => setForm({ ...form, time: v })}
                      variant="chip"
                      options={TIMES.map((t) => ({ value: t, title: t }))}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    <Field
                      label="Phone"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      placeholder="+91 …"
                      type="tel"
                      autoComplete="tel"
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label="Email (optional)"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        placeholder="you@example.com"
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-9 flex items-center justify-between gap-3 border-t border-brand-line pt-7">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className={btn.secondaryMd}
                  >
                    <ArrowLeft aria-hidden className="h-4 w-4" /> Back
                  </button>
                  {step < STEPS.length - 1 ? (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext}
                      className={btn.primaryMd}
                    >
                      Continue <ArrowRight aria-hidden className="h-4 w-4" />
                    </button>
                  ) : (
                    <button onClick={submit} className={btn.primaryMd}>
                      Confirm <ArrowRight aria-hidden className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          </>
        )}
      </section>
    </SiteLayout>
  );
}

/** Progress is marked in lime — the accent's job is to show state. */
function Stepper({ step }: { step: number }) {
  return (
    <div>
      <ol className="flex gap-1.5" aria-hidden>
        {STEPS.map((s, i) => (
          <li
            key={s}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-300",
              i <= step ? "bg-lime" : "bg-brand-line",
            )}
          />
        ))}
      </ol>
      <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
        {STEPS.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              aria-current={i === step ? "step" : undefined}
              className={cn(
                "text-meta transition-colors duration-200",
                i === step ? "font-semibold text-brand" : "text-ink-faint",
              )}
            >
              <span className="tabular">{i + 1}.</span> {s}
            </span>
            {i < STEPS.length - 1 && (
              <span aria-hidden className="text-ink-faint/50">
                ·
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </p>
    </div>
  );
}

type Option = { value: string; title: string; subtitle?: string; icon?: React.ReactNode };

/**
 * Real radio inputs inside a fieldset.
 *
 * These used to be plain <button>s under a bare <label> with no control,
 * which meant a screen reader announced neither the group nor which option
 * was selected.
 */
function RadioGroup({
  legend,
  name,
  value,
  onChange,
  options,
  columns = 3,
  variant = "card",
}: {
  legend: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  columns?: 2 | 3;
  variant?: "card" | "chip";
}) {
  const id = useId();

  return (
    <fieldset>
      <legend className={legendClass}>{legend}</legend>
      <div
        className={cn(
          "mt-3.5",
          variant === "chip"
            ? "flex flex-wrap gap-2"
            : cn("grid gap-3", columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"),
        )}
      >
        {options.map((o) => (
          <label key={o.value} className="cursor-pointer">
            <input
              type="radio"
              name={`${name}-${id}`}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
            />
            {variant === "chip" ? (
              <span
                className={cn(
                  "tabular inline-flex min-h-11 items-center rounded-full border border-brand-line bg-white px-4 text-meta font-medium text-ink/80",
                  "transition duration-150 hover:border-brand/40",
                  "peer-checked:border-brand peer-checked:bg-brand-tint peer-checked:text-brand peer-checked:font-semibold",
                  "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand",
                )}
              >
                {o.title}
              </span>
            ) : (
              <span
                className={cn(
                  "flex h-full items-start gap-3 rounded-md border border-brand-line bg-white p-4",
                  "transition duration-150 hover:border-brand/40",
                  "peer-checked:border-brand peer-checked:bg-brand-tint",
                  "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand",
                )}
              >
                {o.icon && (
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-brand-line bg-brand-tint text-brand">
                    {o.icon}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{o.title}</span>
                  {o.subtitle && (
                    <span className="mt-1 block text-meta text-ink-muted">{o.subtitle}</span>
                  )}
                </span>
              </span>
            )}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={legendClass}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full rounded-md border border-brand-line bg-white px-4 py-3 text-body text-ink placeholder:text-ink-faint transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="text-ink-muted">{label}</dt>
      <dd className="text-right font-semibold text-ink">{value || "—"}</dd>
    </div>
  );
}

export default Appointment;
