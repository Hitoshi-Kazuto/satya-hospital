import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  HeartHandshake,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/PageHeader";
import { btn } from "@/components/site/buttons";
import { Reveal } from "@/components/site/Reveal";
import {
  departments,
  doctors,
  equipment,
  faqs,
  insuranceLogos,
  orthoTreatments,
  testimonials,
  services,
  stats,
  contactInfo,
} from "@/lib/hospital-data";
import heroImg from "@/assets/hero-hospital.jpg";
import drAk from "@/assets/doctor-ak-agarwal.jpeg";
import drManisha from "@/assets/doctor-manisha-agarwal.jpg";
import drGaurav from "@/assets/doctor-gaurav.jpeg";
import facOt from "@/assets/ot-0.jpeg";
import facReception from "@/assets/both-doc.jpeg";

const doctorImages: Record<string, string> = {
  "dr-ak-agarwal": drAk,
  "dr-manisha-agarwal": drManisha,
  "dr-gaurav": drGaurav,
};

const MAPS_EMBED =
  "https://www.google.com/maps?q=Satya+Trauma+%26+Maternity+Centre+Barra+6+Kanpur&output=embed";

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <StatsBar />
      <About />
      <Specialities />
      <Doctors />
      <Services />
      <Technology />
      <Treatments />
      <Journey />
      <Stories />
      <Awards />
      <Insurance />
      <FAQ />
      <Resources />
      <Visit />
      <CTA />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b3a6b]">
      <img
        src={heroImg}
        alt="Satya Trauma & Maternity Centre, Kanpur"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3a6b]/65 via-[#0f559f]/40 to-[#0f559f]/15" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:min-h-[620px] lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-mint)]">
            Satya Trauma &amp; Maternity Centre · Barra 6, Kanpur
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Orthopaedic, maternity and emergency care in Kanpur
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Senior consultants, modular operation theatres and a 24×7 emergency department — serving
            Barra and Kanpur since 1995.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full gradient-signal px-6 py-3.5 text-sm font-semibold text-[#16220a] shadow-signal transition duration-200 hover:brightness-105"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contactInfo.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> +91 512 228 2111
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function StatsBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-3xl font-semibold text-[color:var(--brand)] sm:text-4xl">
              {n}
            </div>
            <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const facts = [
    "Three modular operation theatres",
    "24×7 emergency and ICU",
    "In-house diagnostics and pharmacy",
    "Cashless insurance and TPA",
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeader
            eyebrow="About Satya Hospital"
            title="Orthopaedics, obstetrics & gynaecology, in Barra since 1995."
          />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Satya Hospital was set up in Barra 6, Kanpur in 1995 with a focus on orthopaedics,
            trauma and maternity care. The hospital now has three modular operation theatres, a 24×7
            emergency department, in-house diagnostics and a dedicated physiotherapy floor.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Departments are led by senior consultants. Surgeries are performed in laminar-flow
            modular theatres, treatment plans are explained before they begin, and billing is
            itemised.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--brand)]" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className={btn.primary}>
              About the hospital <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/infrastructure" className={btn.secondary}>
              Our infrastructure
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          <img
            src={heroImg}
            alt="Satya Hospital exterior"
            loading="lazy"
            className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-elevated sm:h-64"
          />
          <img
            src={facReception}
            alt="Our senior consultants"
            loading="lazy"
            className="h-44 w-full rounded-2xl object-cover shadow-elevated"
          />
          <img
            src={facOt}
            alt="Modular operation theatre"
            loading="lazy"
            className="h-44 w-full rounded-2xl object-cover shadow-elevated"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SPECIALITIES ---------- */
function Specialities() {
  return (
    <section id="specialities" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Specialities"
            title="Speciality departments"
            intro="Orthopaedics, physiotherapy, obstetrics & gynaecology, general surgery and ENT — each led by senior consultants."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ name, icon: Icon, desc, slug }, i) => (
            <Reveal key={name} delay={Math.min(i, 8) * 60} className="h-full">
              <Link
                to={`/${slug}`}
                className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--brand)]/30 hover:shadow-elevated"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/departments"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)] transition hover:underline"
          >
            View all departments <ChevronRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- DOCTORS ---------- */
function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Our Doctors"
          title="Senior consultants"
          intro="Dr. A.K. Agrawal leads orthopaedics and joint replacement. Dr. Manisha Agrawal leads obstetrics, gynaecology and infertility."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {doctors.map((d, i) => (
          <Reveal key={d.slug} delay={i * 120} className="h-full">
            <article className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-elevated/50 transition duration-200 hover:-translate-y-1 hover:shadow-elevated">
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
                </div>
                <div className="p-6 sm:col-span-3 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                    {d.specialty}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {d.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{d.qualifications}</p>
                  {d.experience && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand)]">
                      {d.experience} experience
                    </div>
                  )}

                  <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                    {(d.focus ?? []).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/appointment"
                    className="mt-6 inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition duration-200 hover:brightness-110"
                  >
                    Book Appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Services and facilities"
            intro="Ambulance, 24×7 emergency, surgery, diagnostics, pharmacy and rehabilitation under one roof."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ name, icon: Icon, desc }, i) => (
            <Reveal key={name} delay={Math.min(i, 7) * 60} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition hover:underline"
          >
            Explore all services <ChevronRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGY ---------- */
function Technology() {
  return (
    <section id="technology" className="border-y border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Technology"
            title="Equipment we use"
            intro="Imaging, surgical and monitoring systems used by our surgeons and teams — including rare Robotic Knee Resurfacing for Best 360° Knee Care."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map(({ name, icon: Icon }, i) => (
            <Reveal key={name} delay={Math.min(i, 7) * 60} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6 text-center shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-foreground">{name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TREATMENTS ---------- */
function Treatments() {
  return (
    <section className="bg-[color:var(--brand-soft)]/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            center
            eyebrow="Orthopaedics"
            title="Conditions and treatments"
            intro="Knee, hip and shoulder care — from pain management and injections to replacement surgery and rehabilitation."
          />
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {orthoTreatments.map((t) => (
            <Link
              key={t}
              to="/orthopedics"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 transition duration-200 hover:border-[color:var(--brand)]/40 hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand)]"
            >
              {t}
            </Link>
          ))}
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Link to="/orthopedics" className={btn.primary}>
            Explore Orthopedics <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- JOURNEY ---------- */
function Journey() {
  const steps = [
    { t: "Book", d: "Choose a department, doctor and time — online or by phone." },
    { t: "Consult", d: "Physical or video consult with a senior specialist." },
    { t: "Diagnose", d: "In-house pathology and imaging, with a clear plan." },
    { t: "Treat", d: "Surgical or non-surgical care, explained in advance." },
    { t: "Recover", d: "Guided physiotherapy and follow-up after discharge." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Patient Journey"
          title="What to expect"
          intro="From booking an appointment to recovery — this is how care works at Satya Hospital."
        />
      </Reveal>
      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={s.t} delay={i * 80} className="h-full">
            <li className="relative h-full rounded-2xl border border-border bg-white p-6 shadow-elevated/50">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
                Step {i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------- STORIES ---------- */
function Stories() {
  return (
    <section id="stories" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Patient Stories"
            title="What patients say"
            intro="Feedback shared by patients and their families after treatment."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-elevated/50">
                <div className="text-[color:var(--accent-mint)]" aria-hidden>
                  {"★★★★★"}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AWARDS & ACCREDITATION ---------- */
function Awards() {
  const items = [
    {
      icon: Award,
      title: "NABH-grade Protocols",
      desc: "Modular theatres with laminar airflow and strict infection control.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Consultants",
      desc: "All departments led by senior, board-certified specialists.",
    },
    {
      icon: Activity,
      title: "Audited Processes",
      desc: "Documented care plans and itemised, transparent billing.",
    },
    {
      icon: HeartHandshake,
      title: "Patient First",
      desc: "Bedside teams trained in patient care and clear communication.",
    },
  ];
  return (
    <section id="awards" className="border-y border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Standards & Accreditation"
            title="How we maintain standards"
            intro="Processes built around infection control, safety checks and clear communication."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-elevated/50">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--accent-mint)]/40 text-[color:var(--brand)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSURANCE ---------- */
function Insurance() {
  return (
    <section className="border-b border-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            center
            eyebrow="Cashless Insurance"
            title="Empanelled with all major insurers & TPAs"
            intro="An in-house desk handles cashless approvals and paperwork."
          />
        </Reveal>
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {insuranceLogos.map((n) => (
            <div
              key={n}
              className="grid h-16 place-items-center rounded-xl border border-border bg-[color:var(--background)] text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              {n}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeader center eyebrow="FAQ" title="Frequently asked questions" />
        </Reveal>
        <Reveal className="mt-10 rounded-3xl border border-border bg-white p-2 shadow-elevated/50">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="px-4">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- RESOURCES ---------- */
function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "Preparing for Surgery",
      desc: "What to expect before a joint replacement, arthroscopy or other planned procedure.",
      to: "/orthopedics",
    },
    {
      icon: ShieldCheck,
      title: "Insurance & Cashless Care",
      desc: "How to use your TPA policy with in-house insurance desk support.",
      to: "/contact",
    },
    {
      icon: HeartPulse,
      title: "Physiotherapy & Recovery",
      desc: "Recovery protocols and home exercises to continue after discharge.",
      to: "/orthopedics#physiotherapy",
    },
    {
      icon: PhoneCall,
      title: "Emergency & Visitors",
      desc: "24×7 helpline numbers and visitor guidelines for families.",
      to: "/contact",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Patient Resources"
            title="Patient resources"
            intro="Guides to help you plan your visit, procedure and recovery."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} className="h-full">
              <Link
                to={r.to}
                className="group flex h-full flex-col rounded-3xl border border-border bg-background p-6 transition duration-200 hover:border-[color:var(--brand)]/30 hover:bg-white hover:shadow-elevated/50"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)]">
                  Read guide{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VISIT US ---------- */
function Visit() {
  return (
    <section id="contact" className="border-t border-border bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Visit Us"
            title="Find the hospital"
            intro="We are at Barra 6, Kanpur, with easy road access and parking at the hospital."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-background p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Satya Trauma &amp; Maternity Centre
              </h3>
              <p className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                {contactInfo.address}
              </p>
              <dl className="mt-7 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      24×7 Helpline
                    </dt>
                    <dd className="font-semibold text-foreground">
                      {contactInfo.phone} · {contactInfo.altPhone}
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </dt>
                    <dd className="font-semibold text-foreground">{contactInfo.email}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-white">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Hospital Hours
                    </dt>
                    <dd className="font-semibold text-foreground">
                      OPD: 10:00 AM – 3:00 PM · Emergency &amp; Pharmacy: 24×7
                    </dd>
                  </div>
                </div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={contactInfo.maps} target="_blank" rel="noreferrer" className={btn.primary}>
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
                <a href={contactInfo.phoneHref} className={btn.secondary}>
                  <Phone className="h-4 w-4" /> Call 24×7
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-elevated">
              <iframe
                title="Satya Hospital location map"
                src={MAPS_EMBED}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <div className="rounded-[2.5rem] gradient-brand p-10 text-white shadow-brand sm:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-mint)]">
                24×7 Emergency
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                24×7 emergency and trauma care
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-white/80">
                For trauma and maternity emergencies, call the helpline any time. For consultations,
                book online or call during OPD hours (10 AM – 3 PM).
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full gradient-signal px-6 py-3.5 text-sm font-semibold text-[#16220a] shadow-signal transition duration-200 hover:brightness-105"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> +91 512 228 2111
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Home;
