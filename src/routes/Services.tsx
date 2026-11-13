import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Stethoscope, ShieldCheck, HeartPulse } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Reveal, stagger } from "@/components/site/Reveal";
import { Card, CardIcon } from "@/components/site/sections/Card";
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

      {/* Services carry sub-points, so they read as a ruled register rather
          than a grid of equal cards. */}
      <section className="band">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Services and facilities"
              intro="Ambulance, 24×7 emergency, operation theatres, diagnostics, pharmacy and rehabilitation."
            />
          </Reveal>
          <div className="mt-10 border-t border-brand-line">
            {services.map(({ name, desc, points }, i) => (
              <Reveal key={name} delay={stagger(i, 50)}>
                <article className="grid gap-5 border-b border-brand-line py-8 lg:grid-cols-[18rem_1fr] lg:gap-12">
                  <div>
                    <h2 className="font-display text-h3 text-ink">{name}</h2>
                    <p className="mt-2 text-meta text-ink-muted">{desc}</p>
                  </div>
                  <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-meta text-ink/85">
                        <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-white band">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Health Packages"
              title="Health check packages"
              intro="Fixed-price packages with transparent inclusions. Call us to customise any panel."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {packages.map(({ icon: Icon, name, price, points }, i) => (
              <Reveal key={name} delay={stagger(i, 70)} className="h-full">
                <Card className="flex h-full flex-col p-7" surface="tint">
                  <div className="flex items-start justify-between gap-4">
                    <CardIcon>
                      <Icon aria-hidden className="h-[18px] w-[18px]" />
                    </CardIcon>
                    <span className="tabular font-display text-h2 text-brand">{price}</span>
                  </div>
                  <h3 className="mt-5 font-display text-h3 text-ink">{name}</h3>
                  <ul className="mt-4 flex-1 space-y-2.5 text-meta text-ink/85">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className={`${btn.primaryMd} mt-7 self-start`}>
                    Book this package
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Specialities"
              title="Speciality departments led by senior consultants"
              intro="Beyond our core orthopaedic and maternity services, Satya Hospital runs focused speciality departments for general surgery and ENT."
            />
            <ul className="mt-9 border-t border-brand-line">
              {[
                { label: "Orthopedics & Joint Replacement", to: "/orthopedics" },
                { label: "Physiotherapy", to: "/orthopedics#physiotherapy" },
                { label: "Gynecology & Obstetrics", to: "/gynecology-obstetrics" },
                { label: "General Surgery", to: "/general-surgery" },
                { label: "ENT", to: "/ent" },
              ].map((s) => (
                <li key={s.label} className="border-b border-brand-line">
                  <Link
                    to={s.to}
                    className="group flex min-h-14 items-center justify-between gap-4 py-4"
                  >
                    <span className="font-display text-h4 text-ink transition-colors duration-150 group-hover:text-brand">
                      {s.label}
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-brand opacity-0 transition-all duration-150 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-lg border border-brand-line bg-white p-8 shadow-card">
              <h2 className="font-display text-h3 text-ink">Hospital facilities</h2>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {facilities.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-meta text-ink/85">
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/facilities" className={`${btn.primaryMd} mt-7`}>
                Explore facilities <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Services;
