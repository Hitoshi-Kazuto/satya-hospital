import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { btn } from "@/components/site/buttons";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
import { Reveal, stagger } from "@/components/site/Reveal";
import { contactInfo } from "@/lib/hospital-data";

type Section = {
  title: string;
  points: readonly string[];
};

/**
 * Shared layout for ENT, General Surgery and Gynaecology & Obstetrics.
 *
 * The rule-flanked label the section titles used to sit inside was a heading
 * used as decoration; they are now plain h2s with a lime marker, so the
 * document outline reads h1 → h2 as it should.
 */
export function SpecialtyPage({
  eyebrow,
  title,
  intro,
  sections,
  bookLabel = "Book a consultation",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  bookLabel?: string;
}) {
  return (
    <SiteLayout>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />

      <section className="band">
        <div className="shell grid gap-6 md:grid-cols-3">
          {sections.map(({ title: sectionTitle, points }, i) => (
            <Reveal key={sectionTitle} delay={stagger(i, 70)} className="h-full">
              <article className="flex h-full flex-col rounded-lg border border-brand-line bg-white p-7 shadow-card lg:p-8">
                <h2 className="flex items-center gap-2.5 text-label font-semibold uppercase text-lime-ink">
                  <span aria-hidden className="h-[2px] w-6 rounded-full bg-lime" />
                  {sectionTitle}
                </h2>
                <ul className="mt-6 space-y-3 text-meta text-ink/85">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FeatureBand
        eyebrow="Consult"
        title="Start with a consultation with a senior consultant"
        intro="Book a physical or video consultation, or call our 24×7 helpline for urgent concerns."
        actions={
          <>
            <Link to="/appointment" className={btn.onDark}>
              {bookLabel} <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link to="/doctors" className={btn.onDarkGhost}>
              Meet our doctors
            </Link>
          </>
        }
        aside={
          <div className="rounded-lg border border-white/15 bg-white/5 p-8">
            <h2 className="font-display text-h3 text-white">Need help deciding?</h2>
            <p className="mt-3 text-meta text-white/75">
              Our reception team can guide you to the right department and confirm the first
              available appointment time.
            </p>
            <a href={contactInfo.phoneHref} className={`${btn.onDark} mt-6`}>
              <Phone aria-hidden className="h-4 w-4" /> Call +91 9450332121
            </a>
          </div>
        }
      />
    </SiteLayout>
  );
}
