import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Users, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Reveal, stagger } from "@/components/site/Reveal";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { btn } from "@/components/site/buttons";
import { doctors, hospitalValues, stats } from "@/lib/hospital-data";
import facOt from "@/assets/ot-0.webp";
import facReception from "@/assets/both-doc.webp";
import facRoom from "@/assets/doc-1.webp";
import heroImg from "@/assets/hero-hospital.webp";

const standards = [
  {
    icon: Award,
    title: "NABH-grade Protocols",
    desc: "Zero-infection theatres, hand-hygiene discipline and sterile instrument tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Consultants",
    desc: "Every department is led by senior, board-certified specialists.",
  },
  {
    icon: Users,
    title: "Trained Clinical Teams",
    desc: "Nursing and support staff certified in patient care and emergency response.",
  },
  {
    icon: Clock,
    title: "24×7 Readiness",
    desc: "Emergency, ICU, blood support and generator backup, always on standby.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title="About Satya Hospital"
        intro="Since 1995, the hospital has focused on orthopaedics, obstetrics & gynaecology in Barra 6, Kanpur."
      />

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Orthopaedic, trauma and maternity care since 1995."
            />
            <p className="measure mt-6 text-ink-muted">
              Satya Hospital was founded in 1995 in Kanpur with a focus on orthopaedics, trauma and
              maternity care. The hospital now runs three modular operation theatres, a 24×7
              emergency and trauma unit, a complete maternity and infertility service, and a
              rehabilitation floor — all under one roof.
            </p>
            <p className="measure mt-4 text-ink-muted">
              Departments are led by senior consultants. Surgeries are performed in laminar-flow
              modular theatres, treatment plans are explained before they begin, and billing is
              itemised.
            </p>
            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7">
              {stats.map(([n, l]) => (
                <div key={l} className="border-l-2 border-lime pl-4">
                  <dt className="tabular font-display text-h1 text-brand">{n}</dt>
                  <dd className="mt-1.5 text-label font-semibold uppercase text-ink-muted">{l}</dd>
                </div>
              ))}
            </dl>
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

      <section className="border-y border-brand-line bg-white band-tight">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Standards & Accreditation"
              title="How we maintain standards"
              intro="Processes built around infection control, safety checks and clear communication."
            />
          </Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map(({ icon: Icon, title, desc }, i) => (
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

      <section className="band">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Our Values" title="What we stand for" />
          </Reveal>
          <ul className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {hospitalValues.map(({ title, desc }, i) => (
              <Reveal key={title} delay={stagger(i)} as="li">
                <div className="rule-accent pl-5">
                  <h3 className="font-display text-h3 text-ink">{title}</h3>
                  <p className="mt-2 text-meta text-ink-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-brand-line bg-white band">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="Our Doctors" title="Specialists who lead every department" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={stagger(i, 70)} className="h-full">
                <DoctorProfile doctor={d} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Link to="/doctors" className={btn.primary}>
              Meet our doctors <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link to="/infrastructure" className={btn.secondary}>
              See our infrastructure
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { src: facRoom, alt: "Our consultants" },
                { src: facOt, alt: "Operation theatre" },
                { src: heroImg, alt: "Hospital exterior" },
              ].map((img) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-lg object-cover shadow-card"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default About;
