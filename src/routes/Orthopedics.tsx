import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { orthoTopicGroups, doctors, type OrthoTopic } from "@/lib/hospital-data";

const allTopics = orthoTopicGroups.flatMap((g) => g.topics) as OrthoTopic[];

function Orthopedics() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Orthopedics"
        title="Orthopaedic care"
        intro="Knee, hip and shoulder care — from pain management and injections to replacement surgery and rehabilitation, led by senior consultants with in-house physiotherapy."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {allTopics.map((t) => (
            <a
              key={t.slug}
              href={`#${t.slug}`}
              className="rounded-full border border-white/25 bg-white/95 px-4 py-2 text-sm font-medium text-foreground/80 transition duration-200 hover:bg-white hover:text-[color:var(--brand)]"
            >
              {t.name}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {orthoTopicGroups.map((group) => (
          <div key={group.label}>
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-[color:var(--brand)]/20" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">
                {group.label}
              </h2>
              <span className="h-px flex-1 bg-[color:var(--brand)]/20" />
            </div>

            <div className="mt-8 space-y-6">
              {group.topics.map((topic) => (
                <Reveal key={topic.slug}>
                  <article
                    id={topic.slug}
                    className="scroll-mt-28 rounded-3xl border border-border bg-white p-8 shadow-elevated/50 transition duration-200 hover:shadow-elevated lg:p-10"
                  >
                    <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
                      <div className="lg:col-span-1">
                        <h3 className="font-display text-2xl font-semibold text-[color:var(--brand)]">
                          {topic.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-foreground/80">
                          {topic.tagline}
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground">{topic.summary}</p>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {topic.points.map((p) => (
                            <li
                              key={p}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[color:var(--brand-soft)]/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">
                  Consult a Specialist
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  Get a clear assessment before any treatment begins.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  {doctors[0].name} brings {doctors[0].experience} of orthopaedic experience — book
                  a consultation for an honest assessment of your knee, hip, shoulder or sports
                  injury.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/appointment" className={btn.primary}>
                    Book Appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/doctors" className={btn.secondary}>
                    Meet our doctors <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-elevated/50">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Common conditions we treat
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {allTopics.map((t) => (
                    <a
                      key={t.slug}
                      href={`#${t.slug}`}
                      className="rounded-full border border-border bg-[color:var(--background)] px-4 py-2 text-sm font-medium text-foreground/80 transition duration-200 hover:border-[color:var(--brand)]/40 hover:text-[color:var(--brand)]"
                    >
                      {t.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Orthopedics;
