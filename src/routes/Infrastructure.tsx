import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Reveal, stagger } from "@/components/site/Reveal";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
import { btn } from "@/components/site/buttons";
import { cn } from "@/lib/utils";
import { infrastructure } from "@/lib/hospital-data";
import facOt from "@/assets/ot-0.webp";
import ot1 from "@/assets/ot-1.webp";
import ot2 from "@/assets/ot-2.webp";
import ot3 from "@/assets/ot-3.webp";
import ot4 from "@/assets/ot-4.webp";
import ot5 from "@/assets/ot-5.webp";
import ot6 from "@/assets/ot-6.webp";
import ot7 from "@/assets/ot-7.webp";
import infra1 from "@/assets/infra-1.webp";
import infra2 from "@/assets/infra-2.webp";
import infra3 from "@/assets/infra-3.webp";
import infra4 from "@/assets/infra-4.webp";
import infra5 from "@/assets/infra-5.webp";

const theatres = [facOt, ot1, ot2, ot3, ot4, ot5, ot6, ot7];
const infraImages = [infra1, infra2, infra3, infra4, infra5];

function Infrastructure() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Infrastructure & Technology"
        title="Infrastructure"
        intro="Operation theatres, diagnostics, emergency and patient rooms built to modern standards of sterility, monitoring and comfort."
      />

      <section className="band-tight">
        {/* Five across from md. On narrow screens the odd one out runs the
            full width as a banner rather than sitting alone in a half-row. */}
        <div className="shell grid grid-cols-2 gap-4 md:grid-cols-5">
          {infraImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Satya Hospital infrastructure"
              loading="lazy"
              decoding="async"
              className={cn(
                "w-full rounded-lg object-cover shadow-card",
                i === infraImages.length - 1
                  ? "col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[4/5]"
                  : "aspect-[4/5]",
              )}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-brand-line bg-white band">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="What's Inside" title="Hospital infrastructure" />
          </Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map(({ title, icon: Icon, desc }, i) => (
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
            <SectionHeading
              eyebrow="Operation Theatres"
              title="Our modular operation theatres"
              intro="HEPA-filtered, laminar-flow theatres designed for zero-infection surgery."
            />
          </Reveal>
          {/* Editorial mosaic: the lead image carries the section, the rest
              support it — rather than eight identical tiles. */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {theatres.map((src, i) => (
              <Reveal
                key={i}
                delay={stagger(i, 50)}
                className={i === 0 ? "col-span-2 row-span-2" : ""}
              >
                <img
                  src={src}
                  alt="Modular operation theatre"
                  loading="lazy"
                  decoding="async"
                  className={`w-full rounded-lg object-cover shadow-card ${
                    i === 0 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureBand
        eyebrow="Facilities"
        title="Infrastructure for surgery and recovery"
        intro="Operation theatres, diagnostics, emergency and patient rooms built to modern standards."
        actions={
          <>
            <Link to="/facilities" className={btn.onDark}>
              Explore facilities <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link to="/services" className={btn.onDarkGhost}>
              Our services
            </Link>
          </>
        }
      />
    </SiteLayout>
  );
}

export default Infrastructure;
