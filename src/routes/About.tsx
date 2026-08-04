import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Users, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { doctors, hospitalValues, stats } from "@/lib/hospital-data";
import facOt from "@/assets/ot-0.jpeg";
import facReception from "@/assets/both-doc.jpeg";
import facRoom from "@/assets/doc-1.jpeg";
import heroImg from "@/assets/hero-hospital.jpg";

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title="About Satya Hospital"
        intro="Since 1995, the hospital has focused on orthopaedics, obstetrics & gynaecology in Barra 6, Kanpur."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Our Story"
              title="Orthopaedic, trauma and maternity care since 1995."
            />
            <p className="mt-6 text-muted-foreground">
              Satya Hospital was founded in 1995 in Kanpur with a focus on orthopaedics, trauma and
              maternity care. The hospital now runs three modular operation theatres, a 24×7
              emergency and trauma unit, a complete maternity and infertility service, and a
              rehabilitation floor — all under one roof.
            </p>
            <p className="mt-4 text-muted-foreground">
              Departments are led by senior consultants. Surgeries are performed in laminar-flow
              modular theatres, treatment plans are explained before they begin, and billing is
              itemised.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map(([n, l]) => (
                <div key={l} className="border-l-2 border-[color:var(--brand)]/20 pl-4">
                  <dt className="font-display text-3xl font-semibold text-[color:var(--brand)]">
                    {n}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img
              src={heroImg}
              alt="Satya Hospital exterior"
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-3xl object-cover shadow-elevated"
            />
            <img
              src={facReception}
              alt="Our senior consultants"
              loading="lazy"
              className="h-48 w-full rounded-3xl object-cover shadow-elevated"
            />
            <img
              src={facOt}
              alt="Modular operation theatre"
              loading="lazy"
              className="h-48 w-full rounded-3xl object-cover shadow-elevated"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Standards & Accreditation"
              title="How we maintain standards"
              intro="Processes built around infection control, safety checks and clear communication."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-[color:var(--background)] p-6 shadow-elevated/50">
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

      <section className="bg-[color:var(--brand-soft)]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="Our Values" title="What we stand for" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hospitalValues.map(({ title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-elevated/50">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--brand)]" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader eyebrow="Our Doctors" title="Specialists who lead every department" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={i * 100} className="h-full">
              <article className="h-full rounded-3xl border border-border bg-white p-8 shadow-elevated/50">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                  {d.specialty}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.qualifications}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--brand)]">
                  {d.experience} experience
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {d.focus.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/doctors" className={btn.primary}>
            Meet our doctors <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/infrastructure" className={btn.secondary}>
            See our infrastructure
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <img
              src={facRoom}
              alt="Our consultants"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-elevated"
            />
            <img
              src={facOt}
              alt="Operation theatre"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-elevated"
            />
            <img
              src={heroImg}
              alt="Hospital exterior"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-elevated"
            />
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default About;
