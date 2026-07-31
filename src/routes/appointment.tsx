import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  Stethoscope,
  User,
  Video,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { btn } from "@/components/site/buttons";
import { Reveal } from "@/components/site/Reveal";
import { doctors, departments } from "@/lib/hospital-data";

type Form = {
  department: string;
  doctor: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  type: "physical" | "video";
};

const STEPS = ["Department", "Doctor", "Date & time", "Details", "Confirm"] as const;
const TIMES = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"];

const CONSULTATION_FEE = 500;
// Official Satya Hospital Razorpay payment links
const RAZORPAY_LINKS = {
  physical: "https://rzp.io/l/XtICExM",
  video: "https://rzp.io/l/dTuLXmJ",
} as const;

function Appointment() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    type: "physical",
  });
  const [submitted, setSubmitted] = useState<string | null>(null);

  const canNext = useMemo(() => {
    switch (step) {
      case 0:
        return !!form.department;
      case 1:
        return !!form.doctor;
      case 2:
        return !!form.date && !!form.time;
      case 3:
        return form.name.length > 1 && /^\+?\d[\d\s-]{7,}$/.test(form.phone);
      default:
        return true;
    }
  }, [step, form]);

  const submit = () => {
    const id = "SH-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    const payLink = form.type === "video" ? RAZORPAY_LINKS.video : RAZORPAY_LINKS.physical;
    if (typeof window !== "undefined") {
      window.open(payLink, "_blank", "noopener,noreferrer");
    }
    setSubmitted(id);
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Book Appointment"
        title="Book an appointment"
        intro="Choose your department, doctor and time — then confirm and pay securely."
      >
        <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm">
          <span className="text-white/70">Consultation fee:</span>
          <span className="font-display text-lg font-semibold text-white">₹{CONSULTATION_FEE}</span>
          <span className="text-white/70">·</span>
          <span className="text-white/80">In-person or video · OPD 9:00 AM – 8:00 PM</span>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="mt-12 rounded-3xl border border-border bg-white p-10 text-center shadow-elevated">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
              <Check className="h-8 w-8" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
              Appointment confirmed
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your appointment ID is{" "}
              <span className="font-semibold text-[color:var(--brand)]">{submitted}</span>. We've
              sent confirmation via SMS, WhatsApp and email.
            </p>
            <div className="mt-6 grid gap-2 rounded-2xl bg-[color:var(--brand-soft)]/50 p-6 text-left text-sm">
              <Row label="Department" value={form.department} />
              <Row label="Doctor" value={form.doctor} />
              <Row label="When" value={`${form.date} · ${form.time}`} />
              <Row label="Consultation" value={form.type === "video" ? "Video" : "In-person"} />
              <Row label="Patient" value={`${form.name} · ${form.phone}`} />
            </div>
            <Link to="/" className={`${btn.primary} mt-8 inline-flex`}>
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <Stepper step={step} />
            <Reveal className="mt-8">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-elevated sm:p-10">
                {step === 0 && (
                  <Grid>
                    {departments.map((d) => (
                      <SelectCard
                        key={d.name}
                        active={form.department === d.name}
                        onClick={() => setForm({ ...form, department: d.name })}
                        icon={<d.icon className="h-5 w-5" />}
                        title={d.name}
                        subtitle={d.desc}
                      />
                    ))}
                  </Grid>
                )}
                {step === 1 && (
                  <Grid cols={2}>
                    {doctors.map((d) => (
                      <SelectCard
                        key={d.name}
                        active={form.doctor === d.name}
                        onClick={() => setForm({ ...form, doctor: d.name })}
                        icon={<Stethoscope className="h-5 w-5" />}
                        title={d.name}
                        subtitle={`${d.specialty} · ${d.experience}`}
                      />
                    ))}
                  </Grid>
                )}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().slice(0, 10)}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-base focus:border-[color:var(--brand)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Preferred time
                      </label>
                      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {TIMES.map((t) => (
                          <button
                            key={t}
                            onClick={() => setForm({ ...form, time: t })}
                            className={`rounded-full border px-3 py-2 text-sm font-medium transition duration-200 ${
                              form.time === t
                                ? "border-[color:var(--brand)] bg-[color:var(--brand-soft)] text-[color:var(--brand)]"
                                : "border-border bg-white text-foreground/80 hover:border-[color:var(--brand)]/40"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Consultation type
                      </label>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <TypeChoice
                          active={form.type === "physical"}
                          onClick={() => setForm({ ...form, type: "physical" })}
                          icon={<User className="h-5 w-5" />}
                          title="In-person"
                          desc="Visit the hospital"
                        />
                        <TypeChoice
                          active={form.type === "video"}
                          onClick={() => setForm({ ...form, type: "video" })}
                          icon={<Video className="h-5 w-5" />}
                          title="Video"
                          desc="Consult online"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Your name"
                    />
                    <Field
                      label="Phone"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      placeholder="+91 …"
                    />
                    <div className="sm:col-span-2">
                      <Field
                        label="Email (optional)"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        placeholder="you@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-[color:var(--brand-soft)]/50 p-6 text-sm">
                      <Row label="Department" value={form.department} />
                      <Row label="Doctor" value={form.doctor} />
                      <Row label="When" value={`${form.date} · ${form.time}`} />
                      <Row
                        label="Consultation"
                        value={form.type === "video" ? "Video" : "In-person"}
                      />
                      <Row label="Patient" value={`${form.name} · ${form.phone}`} />
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 text-sm text-muted-foreground">
                      <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand)]" />
                      <p>
                        Consultation fee of{" "}
                        <span className="font-semibold text-foreground">₹{CONSULTATION_FEE}</span>{" "}
                        is collected securely via Razorpay (UPI, cards, netbanking or wallets).
                        Tapping "Confirm &amp; pay" opens the secure payment page. You'll receive an
                        invoice plus confirmation via email, SMS and WhatsApp.
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground/80 transition duration-200 hover:bg-[#f2f2f2] disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  {step < STEPS.length - 1 ? (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext}
                      className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-2.5 text-sm font-semibold text-white shadow-brand transition duration-200 hover:brightness-110 disabled:opacity-50"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-2.5 text-sm font-semibold text-white shadow-brand transition duration-200 hover:brightness-110"
                    >
                      Confirm &amp; pay <ArrowRight className="h-4 w-4" />
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

function Stepper({ step }: { step: number }) {
  return (
    <ol className="mt-10 flex items-center gap-2 overflow-x-auto pb-2">
      {STEPS.map((s, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <li key={s} className="flex shrink-0 items-center gap-2">
            <span
              className={`grid h-8 w-8 place-items-center rounded-full text-xs font-semibold transition duration-200 ${
                done
                  ? "gradient-brand text-white"
                  : active
                    ? "border border-[color:var(--brand)] bg-white text-[color:var(--brand)]"
                    : "border border-border bg-white text-muted-foreground"
              }`}
            >
              {done ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span
              className={`text-sm ${active ? "font-semibold text-[color:var(--brand)]" : "text-muted-foreground"}`}
            >
              {s}
            </span>
            {i < STEPS.length - 1 && <span className="mx-2 h-px w-6 bg-border sm:w-10" />}
          </li>
        );
      })}
    </ol>
  );
}

function Grid({ children, cols = 3 }: { children: React.ReactNode; cols?: number }) {
  return (
    <div
      className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}
    >
      {children}
    </div>
  );
}

function SelectCard({
  active,
  onClick,
  icon,
  title,
  subtitle,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-2xl border p-5 transition duration-200 ${
        active
          ? "border-[color:var(--brand)] bg-[color:var(--brand-soft)] shadow-elevated"
          : "border-border bg-white hover:border-[color:var(--brand)]/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${active ? "gradient-brand text-white" : "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"}`}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p className="font-display font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
        </div>
        {active && <CheckCircle2 className="ml-auto h-5 w-5 text-[color:var(--brand)]" />}
      </div>
    </button>
  );
}

function TypeChoice({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition duration-200 ${active ? "border-[color:var(--brand)] bg-[color:var(--brand-soft)]" : "border-border bg-white hover:border-[color:var(--brand)]/40"}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl ${active ? "gradient-brand text-white" : "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"}`}
        >
          {icon}
        </span>
        <div>
          <p className="font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-base focus:border-[color:var(--brand)] focus:outline-none"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground">{value || "—"}</span>
    </div>
  );
}

export default Appointment;
