import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { btn } from "@/components/site/buttons";
import { Reveal } from "@/components/site/Reveal";
import { contactInfo, departments } from "@/lib/hospital-data";

const inputClass =
  "w-full rounded-md border border-brand-line bg-white px-4 py-3 text-meta text-ink " +
  "placeholder:text-ink-faint transition duration-150 " +
  "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const labelClass = "mb-2 block text-label font-semibold uppercase text-ink-muted";

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-lg border border-brand-line bg-white p-10 text-center shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-tint text-brand">
          <CheckCircle2 aria-hidden className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-h2 text-ink">Thank you — your enquiry is with us</h2>
        <p className="measure-tight mt-3 text-meta text-ink-muted">
          Our front office will get back to you during OPD hours (10 AM – 3 PM). For urgent
          emergencies, please call the 24×7 helpline instead.
        </p>
        <button onClick={() => setSubmitted(false)} className={`${btn.secondaryMd} mt-7`}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-brand-line bg-white p-8 shadow-card"
    >
      <h2 className="font-display text-h2 text-ink">Send an enquiry</h2>
      <p className="mt-2 text-meta text-ink-muted">
        We typically respond within a few hours during OPD time.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
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
          Email <span className="font-normal normal-case text-ink-faint">(optional)</span>
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

      <button type="submit" className={`${btn.primary} mt-7 w-full sm:w-auto`}>
        Send enquiry
      </button>
    </form>
  );
}

function Contact() {
  const channels = [
    {
      icon: Phone,
      title: "Helpline & Reception",
      value: `${contactInfo.phone} · ${contactInfo.altPhone}`,
      href: contactInfo.phoneHref,
    },
    { icon: Mail, title: "Email", value: contactInfo.email, href: contactInfo.emailHref },
    { icon: MapPin, title: "Visit", value: contactInfo.address, href: contactInfo.maps },
  ];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="We're here, 24 hours a day."
        intro="For appointments, emergency care and enquiries — reach our team any time."
      />

      <section className="border-b border-brand-line bg-white band-tight">
        <div className="shell">
          <dl className="grid gap-x-10 gap-y-8 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="border-t border-brand-line pt-5">
                <Icon aria-hidden className="h-5 w-5 text-brand" />
                <dt className="mt-3 font-display text-h4 text-ink">{title}</dt>
                <dd className="mt-1.5">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-meta text-ink-muted underline-offset-4 transition-colors duration-150 hover:text-brand hover:underline"
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex items-center gap-4 rounded-lg border border-brand-line bg-brand-tint px-6 py-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand text-white">
              <Clock aria-hidden className="h-5 w-5" />
            </span>
            <div>
              <p className="text-label font-semibold uppercase text-ink-muted">Hospital Hours</p>
              <p className="mt-1 font-semibold text-ink">
                OPD: 10:00 AM – 3:00 PM · Emergency &amp; Pharmacy: 24×7
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <EnquiryForm />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-lg border border-brand-line shadow-card">
              <iframe
                title="Satya Hospital location map"
                src="https://www.google.com/maps?q=Satya+Trauma+%26+Maternity+Centre+Barra+6+Kanpur&output=embed"
                className="h-full min-h-[26rem] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Contact;
