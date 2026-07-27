import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Award, CalendarCheck, CheckCircle2, ChevronRight,
  HeartHandshake, Phone, ShieldCheck, Sparkles, Stethoscope,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  departments, doctors, equipment, facilities, faqs, insuranceLogos,
  orthoTreatments, testimonials,
} from "@/lib/hospital-data";
import heroImg from "@/assets/hero-hospital.jpg";
import drAk from "@/assets/doctor-ak-agarwal.jpg";
import drManisha from "@/assets/doctor-manisha-agarwal.jpg";
import facOt from "@/assets/facility-ot.jpg";
import facReception from "@/assets/facility-reception.jpg";
import facRoom from "@/assets/facility-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satya Hospital — Trauma & Maternity Center | Kanpur" },
      { name: "description", content: "Since 1995. Premium Orthopaedic, Joint Replacement, Trauma, Maternity & Infertility care in Kanpur, UP. 24×7 emergency, modular OTs, cashless insurance." },
      { property: "og:title", content: "Satya Hospital — Trusted Healthcare Since 1995" },
      { property: "og:description", content: "Advanced Orthopaedic, Trauma, Maternity & Infertility Care under one roof in Kanpur." },
    ],
  }),
  component: Home,
});

const doctorImages: Record<string, string> = {
  "dr-ak-agarwal": drAk,
  "dr-manisha-agarwal": drManisha,
};

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Doctors />
      <Departments />
      <WhyUs />
      <FacilitiesSection />
      <Equipment />
      <Treatments />
      <PatientJourney />
      <Insurance />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[color:var(--brand)]/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[color:var(--accent-mint)]/25 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-20 lg:px-8">
        <div className="lg:col-span-6 lg:pt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-deep)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Serving Kanpur since 1995
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] text-[color:var(--brand-deep)] sm:text-5xl lg:text-6xl xl:text-[68px]">
            Trusted Healthcare.<br />
            <span className="bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--brand-deep)] bg-clip-text text-transparent">
              Extraordinary Outcomes.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Advanced Orthopaedic, Trauma, Maternity &amp; Infertility care — under one roof.
            A team of specialists, modular operation theatres and 24×7 emergency, right here in Uttar Pradesh.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:+915122282111"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-elevated transition hover:border-[color:var(--brand)]/40"
            >
              <Phone className="h-4 w-4" /> Emergency 24×7
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["30+", "Years Legacy"],
              ["50K+", "Patients Treated"],
              ["6", "Modular OTs"],
              ["100%", "Cashless"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-semibold text-[color:var(--brand-deep)]">{n}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-brand">
              <img
                src={heroImg}
                alt="Satya Hospital exterior in Kanpur"
                width={1920}
                height={1200}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[color:var(--brand-deep)]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-2xl bg-white/90 p-4 shadow-elevated backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Accredited</p>
                  <p className="text-sm font-semibold text-[color:var(--brand-deep)]">NABH-grade protocols</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-6 hidden w-64 rounded-2xl bg-white/90 p-4 shadow-elevated backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--accent-mint)]/20 text-[color:var(--brand-deep)]">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Same-day</p>
                  <p className="text-sm font-semibold text-[color:var(--brand-deep)]">Specialist consult</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "NABH-grade Protocols" },
    { icon: HeartHandshake, label: "Cashless with all major TPAs" },
    { icon: Stethoscope, label: "Senior specialists in-house" },
    { icon: Award, label: "30+ years of legacy" },
  ];
  return (
    <section className="border-y border-border/60 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm text-foreground/80">
            <Icon className="h-5 w-5 shrink-0 text-[color:var(--brand)]" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SECTION HELPERS ---------- */
function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-[color:var(--brand-deep)] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground">{desc}</p>}
    </div>
  );
}

/* ---------- DOCTORS ---------- */
function Doctors() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHead
        eyebrow="Meet Our Specialists"
        title="Doctors who lead with experience"
        desc="Two generations of trust in orthopaedic, maternity and infertility care."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {doctors.map((d) => (
          <article
            key={d.slug}
            className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-elevated transition hover:-translate-y-1 hover:shadow-brand"
          >
            <div className="grid gap-0 sm:grid-cols-5">
              <div className="relative sm:col-span-2">
                <img
                  src={doctorImages[d.slug]}
                  alt={`Portrait of ${d.name}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-64 w-full object-cover object-top sm:h-full"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:hidden">
                  <p className="text-sm font-semibold text-white">{d.name}</p>
                </div>
              </div>
              <div className="p-6 sm:col-span-3 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                  {d.specialty}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[color:var(--brand-deep)]">
                  {d.name}
                </h3>
                <p className="text-sm text-muted-foreground">{d.qualifications}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-deep)]">
                  {d.experience} experience
                </div>

                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {d.focus.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/appointment"
                  className="mt-6 inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- DEPARTMENTS ---------- */
function Departments() {
  return (
    <section className="bg-[color:var(--brand-soft)]/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Centers of Excellence"
          title="Multi-speciality care, in one hospital"
          desc="From routine consults to complex surgeries — every department led by senior consultants."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ name, icon: Icon, desc }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-[color:var(--brand)]/30 hover:shadow-elevated"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)] transition group-hover:bg-[color:var(--brand)] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-[color:var(--brand-deep)]">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { title: "Senior consultants", desc: "Every case is reviewed by experienced specialists — no juniors alone.", icon: Stethoscope },
    { title: "Rapid recovery protocol", desc: "Standardised pathways that get patients on their feet faster.", icon: Sparkles },
    { title: "Modular operation theatres", desc: "HEPA-filtered, laminar-flow OTs designed for zero-infection surgery.", icon: ShieldCheck },
    { title: "Compassion-first culture", desc: "Trained bedside teams, private rooms and family-inclusive care.", icon: HeartHandshake },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">Why Satya Hospital</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[color:var(--brand-deep)] sm:text-4xl lg:text-[42px]">
            A quieter kind of world-class care.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Since 1995, Satya Hospital has become one of Kanpur's most trusted names in orthopaedic, trauma and women's health. We combine deep clinical experience with modern technology — while keeping care personal.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-white p-5 shadow-elevated/50">
                <Icon className="h-5 w-5 text-[color:var(--brand)]" />
                <h3 className="mt-3 font-display text-lg font-semibold text-[color:var(--brand-deep)]">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={facOt} alt="Modular operation theatre" loading="lazy" width={1600} height={1000} className="col-span-2 h-64 w-full rounded-3xl object-cover shadow-elevated sm:h-72" />
            <img src={facRoom} alt="Premium patient room" loading="lazy" width={1600} height={1000} className="h-48 w-full rounded-3xl object-cover shadow-elevated sm:h-56" />
            <img src={facReception} alt="Hospital reception" loading="lazy" width={1600} height={1000} className="h-48 w-full rounded-3xl object-cover shadow-elevated sm:h-56" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FACILITIES ---------- */
function FacilitiesSection() {
  return (
    <section className="bg-[color:var(--brand-deep)] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-mint)]">Facilities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-[42px]">Everything a modern hospital should have.</h2>
          <p className="mt-4 text-white/70">Purpose-built infrastructure to support complex surgeries and comfortable recovery.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--accent-mint)]" />
              <span className="text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EQUIPMENT ---------- */
function Equipment() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHead eyebrow="Advanced Equipment" title="Technology that supports precision" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {equipment.map(({ name, icon: Icon }) => (
          <div key={name} className="rounded-2xl border border-border bg-white p-6 text-center shadow-elevated/50 transition hover:-translate-y-0.5 hover:shadow-elevated">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-4 font-display text-base font-semibold text-[color:var(--brand-deep)]">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- TREATMENTS ---------- */
function Treatments() {
  return (
    <section className="border-y border-border bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Orthopaedic Treatments"
          title="From sports injuries to total joint replacement"
          desc="A focused programme for every stage — pain relief, surgery, and rehabilitation."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {orthoTreatments.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 transition hover:border-[color:var(--brand)]/40 hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand-deep)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- JOURNEY ---------- */
function PatientJourney() {
  const steps = [
    { t: "Book", d: "Choose department, doctor and time — online or via call." },
    { t: "Consult", d: "Physical or video consult with a senior specialist." },
    { t: "Diagnose", d: "In-house pathology, imaging and clear next-step planning." },
    { t: "Treat", d: "Surgical or non-surgical care with dedicated case managers." },
    { t: "Recover", d: "Guided physiotherapy and follow-up beyond discharge." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHead eyebrow="Patient Journey" title="A clear, calm path — start to finish" />
      <ol className="mt-14 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.t} className="relative rounded-2xl border border-border bg-white p-6 shadow-elevated/50">
            <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">Step {i + 1}</div>
            <h3 className="mt-2 font-display text-xl font-semibold text-[color:var(--brand-deep)]">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            {i < steps.length - 1 && (
              <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-[color:var(--brand)]/40 md:block" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- INSURANCE ---------- */
function Insurance() {
  return (
    <section className="bg-[color:var(--brand-soft)]/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">Cashless Insurance</p>
          <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-deep)] sm:text-3xl">Empanelled with all major TPAs &amp; insurers</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {insuranceLogos.map((n) => (
            <div key={n} className="grid h-16 place-items-center rounded-xl border border-border bg-white text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep)]/80">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHead eyebrow="Patient Stories" title="Trusted by thousands of families" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-elevated/50">
            <div className="text-[color:var(--accent-mint)]" aria-hidden>
              {"★★★★★"}
            </div>
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-display font-semibold text-[color:var(--brand-deep)]">{t.name}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const shots = [
    { src: heroImg, alt: "Hospital exterior", cls: "row-span-2" },
    { src: facReception, alt: "Reception lobby", cls: "" },
    { src: facOt, alt: "Operation theatre", cls: "" },
    { src: facRoom, alt: "Patient room", cls: "col-span-2" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <SectionHead eyebrow="Inside Satya" title="A hospital designed for healing" />
      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3">
        {shots.map((s, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl ${s.cls}`}>
            <img src={s.src} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-10 rounded-3xl border border-border bg-white p-2 shadow-elevated/50">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="px-4">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-[color:var(--brand-deep)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] gradient-brand p-10 text-white shadow-brand sm:p-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready when you are — 24 hours a day.</h2>
            <p className="mt-3 max-w-lg text-white/80">Book a consult with our specialists, or call our emergency line for immediate trauma and maternity care.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-deep)] shadow-elevated">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+915122282111" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur">
              <Phone className="h-4 w-4" /> +91 512 228 2111
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
