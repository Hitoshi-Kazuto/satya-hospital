import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Stethoscope, ShieldCheck, HeartPulse } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { services, facilities } from "@/lib/hospital-data";

const packages = [
  {
    icon: HeartPulse,
    name: "Executive Health Check",
    price: "₹4,999",
    points: [
      "Physician consult",
      "Full blood panel & urine",
      "ECG & cardiac screening",
      "X-Ray chest",
    ],
  },
  {
    icon: Stethoscope,
    name: "Women's Wellness",
    price: "₹3,499",
    points: [
      "Gynaec consult",
      "Pap smear & pelvic exam",
      "Thyroid & hormonal profile",
      "Bone density check",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Pre-Surgical Panel",
    price: "₹6,499",
    points: [
      "Full blood workup",
      "ECG & imaging review",
      "Anaesthesia clearance",
      "Nutritional counselling",
    ],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Services"
        title="Services at Satya Hospital"
        intro="Emergency, surgery, diagnostics, pharmacy and rehabilitation, all under one roof."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Our Services"
            title="Services and facilities"
            intro="Ambulance, 24×7 emergency, operation theatres, diagnostics, pharmacy and rehabilitation."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ name, icon: Icon, desc, points }, i) => (
            <Reveal key={name} delay={Math.min(i, 7) * 60} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Health Packages"
              title="Health check packages"
              intro="Fixed-price packages with transparent inclusions. Call us to customise any panel."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {packages.map(({ icon: Icon, name, price, points }, i) => (
              <Reveal key={name} delay={i * 90} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-border bg-[color:var(--background)] p-8 shadow-elevated/50">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--accent-mint)]/40 text-[color:var(--brand)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-2xl font-semibold text-[color:var(--brand)]">
                      {price}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {name}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/80">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className={`${btn.primary} mt-6 self-start`}>
                    Book this package
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-soft)]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">
                  Specialities
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  Speciality departments led by senior consultants
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Beyond our core orthopaedic and maternity services, Satya Hospital runs focused
                  speciality departments for general surgery, ENT and neurosurgery.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    { label: "Orthopedics & Joint Replacement", to: "/orthopedics" },
                    { label: "Gynecology & Obstetrics", to: "/gynecology-obstetrics" },
                    { label: "General Surgery", to: "/general-surgery" },
                    { label: "ENT", to: "/ent" },
                    { label: "Neuro Surgery", to: "/neuro-surgery" },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      to={s.to}
                      className="group flex items-center justify-between rounded-2xl border border-border bg-white px-6 py-4 shadow-elevated/50 transition duration-200 hover:border-[color:var(--brand)]/30 hover:shadow-elevated"
                    >
                      <span className="font-display text-base font-semibold text-foreground">
                        {s.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[color:var(--brand)] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-elevated/50">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Hospital facilities
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {facilities.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/facilities" className={`${btn.primary} mt-6 inline-flex`}>
                  Explore facilities <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Services;
