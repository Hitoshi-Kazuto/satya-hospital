import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export type Topic = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  points: readonly string[];
};

export type TopicGroup = { label: string; topics: Topic[] };

/**
 * The deepest content on the site — conditions, treatments, fertility
 * services. Presented as a reference document rather than a stack of cards:
 * hairline-separated entries, a persistent index on the left at lg, and
 * reading-width body copy.
 *
 * The index tracks the entry currently in view so a long page always tells
 * you where you are.
 */
export function TopicSections({ groups }: { groups: TopicGroup[] }) {
  const allTopics = groups.flatMap((g) => g.topics);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const elements = allTopics
      .map((t) => document.getElementById(t.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const pos = window.scrollY + 260;
      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top + window.scrollY <= pos) current = el.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  return (
    <div className="shell grid gap-10 band lg:grid-cols-[15rem_1fr] lg:gap-16">
      {/* Persistent index — desktop only; the page header carries the
          same links on small screens. */}
      <nav aria-label="On this page" className="hidden lg:block">
        <div className="sticky top-32">
          <p className="text-label font-semibold uppercase text-ink-muted">On this page</p>
          <ul className="mt-4 space-y-0.5 border-l border-brand-line">
            {allTopics.map((t) => (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  aria-current={active === t.slug ? "true" : undefined}
                  className={cn(
                    "-ml-px block border-l-2 py-1.5 pl-4 text-meta transition-colors duration-150",
                    active === t.slug
                      ? "border-lime font-semibold text-brand"
                      : "border-transparent text-ink-muted hover:border-brand-line hover:text-brand",
                  )}
                >
                  {t.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="min-w-0 space-y-14">
        {groups.map((group) => (
          <section key={group.label || "topics"}>
            {group.label && (
              <h2 className="flex items-center gap-3 text-label font-semibold uppercase text-lime-ink">
                <span aria-hidden className="h-[2px] w-6 rounded-full bg-lime" />
                {group.label}
              </h2>
            )}
            <div className={cn("space-y-10", group.label && "mt-8")}>
              {group.topics.map((topic) => (
                <Reveal key={topic.slug}>
                  <article
                    id={topic.slug}
                    className="border-t border-brand-line pt-8 first:border-t-0 first:pt-0"
                  >
                    <div className="grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
                      <div>
                        <h3 className="font-display text-h3 text-brand">{topic.name}</h3>
                        <p className="mt-2 text-meta font-medium text-ink/80">{topic.tagline}</p>
                      </div>
                      <div className="min-w-0">
                        <p className="measure text-ink-muted">{topic.summary}</p>
                        <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                          {topic.points.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-meta text-ink/85">
                              <CheckCircle2
                                aria-hidden
                                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                              />
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
          </section>
        ))}
      </div>
    </div>
  );
}
