import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileText,
  HeartHandshake,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/PageHeader";
import { btn } from "@/components/site/buttons";
import { Reveal, stagger } from "@/components/site/Reveal";
import { IndexList } from "@/components/site/sections/IndexList";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
import { Testimony } from "@/components/site/sections/Testimony";
import { Card, CardIcon } from "@/components/site/sections/Card";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { HeroBackdrop, HeroDots, useHeroSlideshow } from "@/components/site/HeroSlideshow";
import { cn } from "@/lib/utils";
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
import heroImg from "@/assets/hero-hospital.webp";
import facOt from "@/assets/ot-0.webp";
import facReception from "@/assets/both-doc.webp";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Satya+Trauma+%26+Maternity+Centre+Barra+6+Kanpur&output=embed";

/*
 * Section order is deliberate: no two adjacent sections share an archetype
 * or a background, and the page has a climax (doctors + booking) rather than
 * fifteen equal-weight card grids.
 */
function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ActionRail />
      <About />
      <Doctors />
      <Specialities />
      <Technology />
      <Services />
      <Treatments />
      <Journey />
      <Stories />
      <Awards />
      <Resources />
      <Insurance />
      <FAQ />
      <Visit />
      <CTA />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
/* The copy itself never animates — the headline is the LCP element and
   fading it in costs real perceived load time. Only the backdrop moves. */
function Hero() {
  const slideshow = useHeroSlideshow();

  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <HeroBackdrop state={slideshow} />
      {/* The scrim only exists where copy sits on the photograph. */}
      <div aria-hidden className="hero-scrim absolute inset-0 hidden md:block" />
      <div className="shell relative py-10 md:flex md:min-h-[34rem] md:flex-col md:justify-center md:py-24 lg:min-h-[36rem] lg:py-28">
        {/* Source order stays headline → lead → actions for assistive tech;
            below md the lead is visually moved after the actions so the
            primary button clears the fold on a small phone. */}
        <div className="flex max-w-3xl flex-col">
          <p className="flex items-center gap-3 text-label font-semibold uppercase text-lime">
            <span aria-hidden className="h-[2px] w-7 shrink-0 rounded-full bg-lime" />
            Satya Trauma &amp; Maternity Centre · Barra 6, Kanpur
          </p>
          <h1 className="mt-5 font-display text-display text-white md:mt-6">
            Orthopaedic, maternity and emergency care in Kanpur
          </h1>
          <p className="measure order-2 mt-6 text-lead text-white/90 md:order-none">
            Senior consultants, modular operation theatres and a 24×7 emergency department — serving
            Barra and Kanpur since 1995.
          </p>
          <div className="order-1 mt-7 flex flex-wrap items-center gap-3 md:order-none md:mt-9">
            <Link to="/appointment" className={cn(btn.onDark, "max-sm:w-full")}>
              Book Appointment <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={contactInfo.phoneHref} className={cn(btn.onDarkGhost, "max-sm:w-full")}>
              <Phone aria-hidden className="h-4 w-4" /> +91 9450332121
            </a>
          </div>
          {/* Figures render at their final value immediately — this is the
              first thing above the fold, and a number counting up from zero
              while someone reads the headline is motion in the one place
              that should be instantly legible. The count-up moment lives on
              the doctors page instead. */}
          <dl className="order-3 mt-8 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-4 md:order-none md:mt-10 md:gap-y-6 md:pt-8">
            {stats.map(([figure, label]) => (
              <div key={label}>
                <span
                  aria-hidden
                  className="mb-2 block h-[3px] w-6 rounded-full bg-lime md:mb-2.5"
                />
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="tabular block font-display text-h2 font-semibold text-white md:text-h1">
                    {figure}
                  </span>
                  <span className="mt-1.5 block text-label font-semibold uppercase text-white/70">
                    {label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Desktop controls only — the mobile set is overlaid on the banner. */}
          <HeroDots state={slideshow} className="order-4 mt-8 max-md:hidden md:order-none" />
        </div>
      </div>
    </section>
  );
}

/* ---------- ACTION RAIL ---------- */
/* The doorway. Patients arrive with a job, not to read a tagline — these are
   the four jobs, and every destination already existed in the header, hero
   and footer. Overlaps the hero so it reads as part of it. */
function ActionRail() {
  const items = [
    { icon: CalendarCheck, label: "Book Appointment", to: "/appointment" },
    { icon: Stethoscope, label: "Our Doctors", to: "/doctors" },
    { icon: Phone, label: "Emergency 24×7", href: contactInfo.phoneHref },
    { icon: MapPin, label: "Get Directions", href: contactInfo.maps },
  ];

  return (
    <section aria-label="Quick actions" className="relative z-10 bg-transparent">
      <div className="shell -mt-px lg:-mt-10">
        <ul className="grid grid-cols-2 overflow-hidden rounded-lg border border-brand-line bg-white shadow-card md:grid-cols-4">
          {items.map(({ icon: Icon, label, to, href }, i) => {
            const inner = (
              <>
                <Icon aria-hidden className="h-5 w-5 text-brand" />
                <span className="font-semibold text-ink group-hover:text-brand">{label}</span>
                <ArrowRight
                  aria-hidden
                  className="ml-auto hidden h-4 w-4 shrink-0 text-brand opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100 lg:block"
                />
              </>
            );
            const cls = cnRail(i);
            return (
              <li key={label} className={cls}>
                {to ? (
                  <Link to={to} className={railInner}>
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={railInner}
                  >
                    {inner}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const railInner =
  "group flex min-h-16 items-center gap-3 px-4 py-4 text-meta transition-colors duration-150 hover:bg-brand-tint sm:px-5";

function cnRail(i: number) {
  return [
    "border-brand-line",
    i % 2 === 0 ? "border-r" : "",
    i < 2 ? "border-b md:border-b-0" : "",
    "md:border-r md:last:border-r-0",
  ]
    .filter(Boolean)
    .join(" ");
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
    <section id="about" className="band">
      <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="About Satya Hospital"
            title="Orthopaedics, obstetrics & gynaecology, in Kanpur since 1995."
          />
          <p className="measure mt-6 text-ink-muted">
            Satya Hospital was set up in Barra 6, Kanpur in 1995 with a focus on orthopaedics,
            trauma and maternity care. The hospital now has three modular operation theatres, a 24×7
            emergency department, in-house diagnostics and a dedicated physiotherapy floor.
          </p>
          <p className="measure mt-4 text-ink-muted">
            Departments are led by senior consultants. Surgeries are performed in laminar-flow
            modular theatres, treatment plans are explained before they begin, and billing is
            itemised.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-meta font-medium">
                <CheckCircle2
                  aria-hidden
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand"
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/about" className={btn.primary}>
              About the hospital <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link to="/infrastructure" className={btn.secondary}>
              Our infrastructure
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80} className="grid grid-cols-2 gap-4">
          <img
            src={heroImg}
            alt="Satya Hospital exterior"
            loading="lazy"
            decoding="async"
            className="col-span-2 aspect-[16/9] w-full rounded-lg object-cover shadow-card"
          />
          <img
            src={facReception}
            alt="Our senior consultants"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
          />
          <img
            src={facOt}
            alt="Modular operation theatre"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- DOCTORS ---------- */
/* Promoted above the speciality index: the consultants are the hospital's
   strongest trust asset and were previously the fourth section down, styled
   identically to the equipment list. */
function Doctors() {
  return (
    <section id="doctors" className="border-y border-brand-line bg-white band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Our Doctors"
            title="Senior consultants"
            intro="Dr. A.K. Agrawal leads orthopaedics and joint replacement. Dr. Manisha Agrawal leads obstetrics, gynaecology and infertility."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={stagger(i, 70)} className="h-full">
              <DoctorProfile doctor={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SPECIALITIES ---------- */
/* Archetype B. Six sparse cards became a scannable index — a patient looking
   for "knee" now sees every department at once. */
function Specialities() {
  return (
    <section id="specialities" className="band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Specialities"
            title="Speciality departments"
            intro="Orthopaedics, physiotherapy, obstetrics & gynaecology, general surgery and ENT — each led by senior consultants."
          />
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <IndexList
            items={departments.map(({ name, desc, slug }) => ({
              name,
              desc,
              // Dentistry has no landing page — it renders without the
              // hover affordance rather than pretending to be clickable.
              to: name === "Dentistry" ? undefined : `/${slug}`,
            }))}
          />
        </Reveal>
        <Reveal className="mt-9">
          <Link to="/departments" className={btn.link}>
            View all departments <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGY ---------- */
function Technology() {
  return (
    <section id="technology">
      <FeatureBand
        eyebrow="Technology"
        title="Equipment we use"
        intro="Imaging, surgical and monitoring systems used by our surgeons and teams — including rare Robotic Knee Resurfacing for Best 360° Knee Care."
        aside={
          <ul className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {equipment.map(({ name }) => (
              <li key={name} className="flex items-start gap-3 text-white/85">
                <span aria-hidden className="mt-2 h-[3px] w-4 shrink-0 rounded-full bg-lime" />
                <span className="font-display text-h4">{name}</span>
              </li>
            ))}
          </ul>
        }
      />
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section id="services" className="border-b border-brand-line bg-white band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Services and facilities"
            intro="Ambulance, 24×7 emergency, surgery, diagnostics, pharmacy and rehabilitation under one roof."
          />
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <IndexList items={services.map(({ name, desc }) => ({ name, desc }))} />
        </Reveal>
        <Reveal className="mt-9">
          <Link to="/services" className={btn.link}>
            Explore all services <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TREATMENTS ---------- */
function Treatments() {
  return (
    <section className="band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Orthopaedics"
            title="Conditions and treatments"
            intro="Knee, hip and shoulder care — from pain management and injections to replacement surgery and rehabilitation."
          />
        </Reveal>
        <Reveal delay={60} className="mt-10 flex flex-wrap justify-center gap-2">
          {orthoTreatments.map((t) => (
            <Link
              key={t}
              to="/orthopedics"
              className="rounded-full border border-brand-line bg-white px-4 py-2 text-meta font-medium text-ink/80 transition duration-150 hover:border-brand/40 hover:bg-brand-tint hover:text-brand"
            >
              {t}
            </Link>
          ))}
        </Reveal>
        <Reveal className="mt-9 text-center">
          <Link to="/orthopedics" className={btn.primary}>
            Explore Orthopedics <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- JOURNEY ---------- */
/* One of the page's three tier-2 moments: the heading pins on desktop while
   the steps advance past it, and the active step is marked in lime. */
function Journey() {
  const steps = [
    { t: "Book", d: "Choose a department, doctor and time — online or by phone." },
    { t: "Consult", d: "Physical or video consult with a senior specialist." },
    { t: "Diagnose", d: "In-house pathology and imaging, with a clear plan." },
    { t: "Treat", d: "Surgical or non-surgical care, explained in advance." },
    { t: "Recover", d: "Guided physiotherapy and follow-up after discharge." },
  ];
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = refs.current.findIndex((el) => el === entry.target);
          if (index >= 0) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-brand-line bg-white band">
      <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Patient Journey"
            title="What to expect"
            intro="From booking an appointment to recovery — this is how care works at Satya Hospital."
          />
          <ol className="mt-8 hidden gap-2 lg:flex" aria-hidden>
            {steps.map((s, i) => (
              <li
                key={s.t}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i <= active ? "bg-lime" : "bg-brand-line"
                }`}
              />
            ))}
          </ol>
        </div>

        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li
              key={s.t}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`rounded-lg border p-6 transition-colors duration-300 sm:p-7 ${
                i === active ? "border-brand/30 bg-brand-tint" : "border-brand-line bg-white"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className={`tabular font-display text-h3 transition-colors duration-300 ${
                    i === active ? "text-brand" : "text-ink-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-h3 text-ink">{s.t}</h3>
                  <p className="mt-1.5 text-meta text-ink-muted">{s.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- STORIES ---------- */
function Stories() {
  return (
    <section id="stories" className="band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Stories"
            title="What patients say"
            intro="Feedback shared by patients and their families after treatment."
          />
        </Reveal>
        <div className="mt-12">
          <Testimony quotes={testimonials} />
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
    <section id="awards" className="border-y border-brand-line bg-white band-tight">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Standards & Accreditation"
            title="How we maintain standards"
            intro="Processes built around infection control, safety checks and clear communication."
          />
        </Reveal>
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={stagger(i)}>
              <div className="border-t border-brand-line pt-5">
                <Icon aria-hidden className="h-5 w-5 text-brand" />
                <dt className="mt-3 font-display text-h4 text-ink">{title}</dt>
                <dd className="mt-1.5 text-meta text-ink-muted">{desc}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
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
    <section className="band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Resources"
            title="Patient resources"
            intro="Guides to help you plan your visit, procedure and recovery."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={stagger(i)} className="h-full">
              <Card to={r.to} className="flex h-full flex-col p-6">
                <CardIcon>
                  <r.icon aria-hidden className="h-[18px] w-[18px]" />
                </CardIcon>
                <h3 className="mt-5 font-display text-h4 text-ink">{r.title}</h3>
                <p className="mt-2 flex-1 text-meta text-ink-muted">{r.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-meta font-semibold text-brand">
                  Read guide
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSURANCE ---------- */
/* Archetype F. These are plain text names, so they are no longer styled to
   look like a grid of logos that never loaded. */
function Insurance() {
  return (
    <section className="border-y border-brand-line bg-white band-tight">
      <div className="shell">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div>
            <p className="flex items-center gap-2.5 text-label font-semibold uppercase text-lime-ink">
              <span aria-hidden className="h-[2px] w-6 rounded-full bg-lime" />
              Cashless Insurance
            </p>
            <h2 className="mt-3 font-display text-h3 text-ink">
              Empanelled with all major insurers &amp; TPAs
            </h2>
            <p className="mt-2 text-meta text-ink-muted">
              An in-house desk handles cashless approvals and paperwork.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
            {insuranceLogos.map((n) => (
              <li
                key={n}
                className="rounded-full border border-brand-line bg-brand-wash px-3.5 py-1.5 text-meta font-medium text-ink-muted"
              >
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  return (
    <section className="band">
      <div className="shell-narrow">
        <Reveal>
          <SectionHeading center eyebrow="FAQ" title="Frequently asked questions" />
        </Reveal>
        <Reveal delay={60} className="mt-10">
          <Accordion type="single" collapsible className="w-full border-t border-brand-line">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-brand-line">
                <AccordionTrigger className="py-5 text-left font-display text-h4 text-ink hover:no-underline data-[state=open]:text-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-meta text-ink-muted">
                  <span className="block border-l-2 border-lime pl-4">{f.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- VISIT US ---------- */
function Visit() {
  const rows = [
    {
      icon: Phone,
      label: "24×7 Helpline",
      value: `${contactInfo.phone} · ${contactInfo.altPhone}`,
    },
    { icon: Mail, label: "Email", value: contactInfo.email },
    {
      icon: Clock,
      label: "Hospital Hours",
      value: "OPD: 10:00 AM – 3:00 PM · Emergency & Pharmacy: 24×7",
    },
  ];

  return (
    <section id="contact" className="border-t border-brand-line bg-white band">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Visit Us"
            title="Find the hospital"
            intro="We are at Barra 6, Kanpur, with easy road access and parking at the hospital."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-lg border border-brand-line bg-brand-wash p-8 sm:p-10">
              <h3 className="font-display text-h2 text-ink">Satya Trauma &amp; Maternity Centre</h3>
              <p className="mt-4 flex items-start gap-2.5 text-meta text-ink-muted">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {contactInfo.address}
              </p>
              <dl className="mt-8 space-y-5">
                {rows.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-brand-line bg-white text-brand">
                      <Icon aria-hidden className="h-4 w-4" />
                    </span>
                    <div>
                      <dt className="text-label font-semibold uppercase text-ink-muted">{label}</dt>
                      <dd className="mt-1 font-semibold text-ink">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={contactInfo.maps} target="_blank" rel="noreferrer" className={btn.primary}>
                  <MapPin aria-hidden className="h-4 w-4" /> Get Directions
                </a>
                <a href={contactInfo.phoneHref} className={btn.secondary}>
                  <Phone aria-hidden className="h-4 w-4" /> Call 24×7
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full overflow-hidden rounded-lg border border-brand-line shadow-card">
              <iframe
                title="Satya Hospital location map"
                src={MAPS_EMBED}
                className="h-full min-h-[26rem] w-full"
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
    <FeatureBand
      eyebrow="24×7 Emergency"
      title="24×7 emergency and trauma care"
      intro="For trauma and maternity emergencies, call the helpline any time. For consultations, book online or call during OPD hours (10 AM – 3 PM)."
      actions={
        <>
          <Link to="/appointment" className={btn.onDark}>
            Book Appointment <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <a href={contactInfo.phoneHref} className={btn.onDarkGhost}>
            <Phone aria-hidden className="h-4 w-4" /> +91 9450332121
          </a>
        </>
      }
    />
  );
}

export default Home;
