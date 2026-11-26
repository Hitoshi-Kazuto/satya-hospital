import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { IndexList } from "@/components/site/sections/IndexList";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
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

      <section className="band">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Department Index"
              title="Where to seek care"
              intro="Select a department to read its scope of practice."
            />
          </Reveal>
          <Reveal delay={60} className="mt-10">
            <IndexList
              actionLabel="Explore"
              items={departments.map(({ name, desc, slug }) => ({
                name,
                desc,
                to: `/${slug}`,
              }))}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-brand-line bg-white band-tight">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-h2 font-bold text-ink">
              Orthopaedic treatments we specialise in
            </h2>
          </Reveal>
          <Reveal delay={60} className="mt-7">
            <ul className="flex flex-wrap gap-2">
              {orthoTreatments.map((t) => (
                <li key={t}>
                  <Link
                    to="/orthopedics"
                    className="inline-block rounded-full border border-brand-line bg-white px-4 py-2 text-meta font-medium text-ink/80 transition duration-150 hover:border-brand/40 hover:bg-brand-tint hover:text-brand"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FeatureBand
        eyebrow="Not sure which department?"
        title="Our front office can guide you."
        intro="Call us any time, or book a consultation online and we will point you to the right specialist."
        actions={
          <>
            <Link to="/appointment" className={btn.onDark}>
              Book Appointment <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={contactInfo.phoneHref} className={btn.onDarkGhost}>
              {contactInfo.phone}
            </a>
          </>
        }
      />
    </SiteLayout>
  );
}

export default Departments;
