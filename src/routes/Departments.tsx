import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { departments, orthoTreatments, contactInfo } from "@/lib/hospital-data";

function Departments() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Hospital Departments"
        title="Departments"
        intro="Departments at Satya Hospital, each led by senior consultants and supported by modern diagnostics, modular operation theatres and a 24×7 emergency unit."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Department Index"
            title="Where to seek care"
            intro="Select a department to read its scope of practice."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ name, icon: Icon, desc, slug }, i) => (
            <Reveal key={name} delay={Math.min(i, 8) * 60} className="h-full">
              <Link
                to={`/${slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--brand)]/30 hover:shadow-elevated"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)] transition duration-200 group-hover:gradient-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand)] opacity-0 transition duration-200 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--brand-soft)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Orthopaedic treatments we specialise in
            </h2>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-2">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="rounded-[2.5rem] gradient-brand p-10 text-white shadow-brand sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-mint)]">
                  Not sure which department?
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                  Our front office can guide you.
                </h2>
                <p className="mt-3 max-w-lg leading-relaxed text-white/80">
                  Call us any time, or book a consultation online and we will point you to the right
                  specialist.
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
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default Departments;
