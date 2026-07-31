import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { btn } from "@/components/site/buttons";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

type Section = {
  title: string;
  points: readonly string[];
};

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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map(({ title: sectionTitle, points }, i) => (
            <Reveal key={sectionTitle} delay={i * 90} className="h-full">
              <article className="h-full rounded-3xl border border-border bg-white p-8 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-[color:var(--brand)]/20" />
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                    {sectionTitle}
                  </h2>
                  <span className="h-px flex-1 bg-[color:var(--brand)]/20" />
                </div>
                <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
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

      <section className="bg-[color:var(--brand-soft)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">
                  Consult
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  Start with a consultation with a senior consultant
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Book a physical or video consultation, or call our 24×7 helpline for urgent
                  concerns.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/appointment" className={btn.primary}>
                    {bookLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/doctors" className={btn.secondary}>
                    Meet our doctors
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-elevated/50">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Need help deciding?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Our reception team can guide you to the right department and confirm the first
                  available appointment time.
                </p>
                <a
                  href="tel:+915122282111"
                  className="mt-5 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-brand transition duration-200 hover:brightness-110"
                >
                  Call +91 512 228 2111
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
