import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { btn } from "@/components/site/buttons";
import { Reveal } from "@/components/site/Reveal";
import { contactInfo, departments } from "@/lib/hospital-data";

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition duration-200 focus:border-[color:var(--brand)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]/20";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-white p-10 text-center shadow-elevated/50">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">
          Thank you — your enquiry is with us
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Our front office will get back to you during OPD hours (9 AM – 8 PM). For urgent
          emergencies, please call the 24×7 helpline instead.
        </p>
        <button onClick={() => setSubmitted(false)} className={`${btn.secondary} mt-6`}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-white p-8 shadow-elevated/50"
    >
      <h2 className="font-display text-2xl font-semibold text-foreground">Send an enquiry</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        We typically respond within a few hours during OPD time.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className={labelClass}>
            Full name
          </label>
          <input
            id="enq-name"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="enq-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="enq-email" className={labelClass}>
          Email <span className="font-normal normal-case text-muted-foreground/60">(optional)</span>
        </label>
        <input
          id="enq-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="enq-dept" className={labelClass}>
          Department
        </label>
        <select id="enq-dept" name="department" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a department
          </option>
          {departments.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name}
            </option>
          ))}
          <option value="Other">Other / General enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="enq-msg" className={labelClass}>
          Message
        </label>
        <textarea
          id="enq-msg"
          name="message"
          rows={4}
          required
          placeholder="Briefly describe your enquiry or concern…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" className={`${btn.primary} mt-6 w-full justify-center sm:w-auto`}>
        Send enquiry
      </button>
    </form>
  );
}

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="We're here, 24 hours a day."
        intro="For appointments, emergency care and enquiries — reach our team any time."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Helpline & Reception",
                value: `${contactInfo.phone} · ${contactInfo.altPhone}`,
                href: contactInfo.phoneHref,
              },
              { icon: Mail, title: "Email", value: contactInfo.email, href: contactInfo.emailHref },
              { icon: MapPin, title: "Visit", value: contactInfo.address, href: contactInfo.maps },
            ].map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-3xl border border-border bg-white p-8 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{value}</p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-[color:var(--brand-soft)]/50 px-6 py-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-white">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Hospital Hours
              </p>
              <p className="text-sm font-semibold text-foreground">
                OPD: 9:00 AM – 8:00 PM · Emergency &amp; Pharmacy: 24×7
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <EnquiryForm />
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-elevated lg:col-span-3">
              <iframe
                title="Satya Hospital location map"
                src="https://www.google.com/maps?q=Satya+Trauma+%26+Maternity+Centre+Barra+6+Kanpur&output=embed"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default Contact;
