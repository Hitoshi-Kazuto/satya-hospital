import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Reveal, stagger } from "@/components/site/Reveal";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
import { btn } from "@/components/site/buttons";
import { equipment, facilities } from "@/lib/hospital-data";
import facOt from "@/assets/ot-0.webp";
import facReception from "@/assets/both-doc.webp";
import facRoom from "@/assets/doc-1.webp";
import hero from "@/assets/hero-hospital.webp";

const gallery = [
  { src: hero, alt: "Satya Hospital exterior" },
  { src: facReception, alt: "Our senior consultants" },
  { src: facOt, alt: "Modular operation theatre" },
  { src: facRoom, alt: "Consultation room" },
];

function Facilities() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Facilities & Equipment"
        title="Facilities"
        intro="Systems and services available on site at Satya Hospital."
      />

      <section className="band-tight">
        <div className="shell grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-card"
            />
          ))}
        </div>
      </section>

      <section className="border-y border-brand-line bg-white band">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Facilities"
              title="Facility register"
              intro="Systems and services available on site."
            />
          </Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f} delay={stagger(i, 30)} as="li">
                <span className="flex items-start gap-2.5 border-b border-brand-line py-3 text-meta font-medium text-ink/85">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {f}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FeatureBand
        eyebrow="Equipment"
        title="Equipment we use"
        intro="Imaging, surgical and monitoring systems used across the hospital."
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
        actions={
          <Link to="/services" className={btn.onDarkGhost}>
            Explore our services <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        }
      />
    </SiteLayout>
  );
}

export default Facilities;
