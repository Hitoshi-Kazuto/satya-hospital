import { useId, useMemo, useRef, useState } from "react";
import { Award, CheckCircle2, User } from "lucide-react";
import type { Doctor } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";
import drAk from "@/assets/doctor-ak-agarwal.webp";
import drManisha from "@/assets/doctor-manisha-agarwal.jpg";
import drGaurav from "@/assets/doctor-gaurav.webp";
import drHimani from "@/assets/doctor-himani-vaswani.webp";

/**
 * Class for each grid cell that wraps a vertical DoctorProfile (usually the
 * Reveal wrapper).
 *
 * A vertical card is five stacked rows — portrait, name, specialty, accent +
 * experience badge, tabs — and every card in a grid row shares those five
 * tracks through CSS subgrid. Each row is as tall as the tallest card's
 * version of it, so names, specialties, lime rules, badges, the header
 * divider and the tab strips all sit on the same lines across the row,
 * however the text wraps.
 */
export const doctorGridCell = "row-span-5 grid grid-rows-subgrid gap-0";

/*
 * Never put `@container` (container-type) on the article or header of a
 * vertical card: container-type applies layout containment, and a grid with
 * layout containment silently stops being a subgrid — each card then sizes
 * its own rows and the alignment above is lost. Only the tab body, which is
 * not part of the subgrid chain, is a container.
 */

export const doctorImages: Record<string, string> = {
  "dr-ak-agarwal": drAk,
  "dr-manisha-agarwal": drManisha,
  "dr-gaurav": drGaurav,
  "dr-himani-vaswani": drHimani,
};

/**
 * Consultant card.
 *
 * Header carries identity — circular portrait, name, speciality, accent rule,
 * years in practice. Focus areas and qualifications are tabbed, so a card with
 * six focus areas stays the same height as one with two, and a row of them
 * lines up. (`achievements` is intentionally not surfaced here.)
 *
 * The circular crop also solves a problem the old rectangular frame had: the
 * source portraits run from 0.56 to 1.11 aspect, and a circle centred on the
 * face reads consistently across all of them.
 *
 * Alignment across a row is handled by subgrid — see `doctorGridCell`.
 *
 * `layout="horizontal"` puts identity in a left column and the tabs on the
 * right — used where a single consultant fills a full-width section.
 */
export function DoctorProfile({
  doctor,
  headingLevel = "h3",
  layout = "vertical",
}: {
  doctor: Doctor;
  headingLevel?: "h2" | "h3";
  layout?: "vertical" | "horizontal";
}) {
  const horizontal = layout === "horizontal";
  const Heading = headingLevel;
  const uid = useId();
  const image = doctorImages[doctor.slug];
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = useMemo(() => {
    const list: { key: string; label: string; items: string[] }[] = [];
    if (doctor.focus?.length) {
      list.push({ key: "focus", label: "Focus Areas", items: [...doctor.focus] });
    }
    if (doctor.qualifications) {
      list.push({
        key: "quals",
        label: "Qualifications",
        // Same text, re-delimited into rows so the panel scans like the rest.
        items: doctor.qualifications
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      });
    }
    return list;
  }, [doctor]);

  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % tabs.length
        : (active - 1 + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const portraitSize = horizontal ? "h-28 w-28 @3xl:h-36 @3xl:w-36" : "h-24 w-24";

  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-brand-line bg-white shadow-card",
        horizontal ? "@container flex h-full flex-col" : doctorGridCell,
      )}
    >
      <div
        className={cn(
          horizontal ? "flex h-full flex-col @3xl:grid @3xl:grid-cols-[22rem_1fr]" : "contents",
        )}
      >
        <header
          className={cn(
            "border-b border-brand-line p-6",
            !horizontal && "sm:p-7",
            horizontal && "@sm:p-7",
            // Vertical: the header owns rows 1–4 of the card's subgrid.
            !horizontal && "row-span-4 grid grid-rows-subgrid gap-0",
            horizontal &&
              "flex items-start gap-5 @sm:gap-6 bg-brand-wash @3xl:flex-col @3xl:items-center @3xl:justify-center @3xl:border-b-0 @3xl:border-r @3xl:p-10 @3xl:text-center",
          )}
        >
          {image ? (
            <img
              src={image}
              alt={`Portrait of ${doctor.name}`}
              loading="lazy"
              decoding="async"
              width={224}
              height={224}
              className={cn(
                "shrink-0 self-start rounded-full bg-brand-tint object-cover object-[50%_15%] ring-1 ring-brand-line",
                horizontal && "ring-4 ring-white shadow-card",
                portraitSize,
              )}
            />
          ) : (
            <div
              className={cn(
                "grid shrink-0 self-start place-items-center rounded-full bg-brand-tint ring-1 ring-brand-line",
                portraitSize,
              )}
            >
              <User aria-hidden className="h-8 w-8 text-ink-faint" />
            </div>
          )}

          {/* Vertical: `contents` lets name, specialty and badge each land in
              their own subgrid row. Horizontal: an ordinary column. */}
          <div className={cn(horizontal ? "flex min-w-0 flex-col @3xl:items-center" : "contents")}>
            <Heading
              className={cn(
                "self-start font-display text-[clamp(1.5rem,1.25rem+0.9vw,2rem)] leading-tight font-bold tracking-[-0.015em] text-brand-deep",
                !horizontal && "mt-5",
              )}
            >
              {doctor.name}
            </Heading>
            <p className="mt-1 self-start text-meta font-medium text-ink-muted">
              {doctor.specialty}
            </p>
            <div
              className={cn(
                "self-start",
                horizontal && "@3xl:flex @3xl:flex-col @3xl:items-center",
              )}
            >
              <span aria-hidden className="mt-4 block h-[3px] w-14 rounded-full bg-lime" />
              {doctor.experience && (
                <p className="mt-4">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-lime-tint px-3 py-1 text-meta font-semibold text-ink">
                    <Award aria-hidden className="h-4 w-4 shrink-0 text-brand" />
                    <span>
                      <span className="tabular">{doctor.experience}</span> experience
                    </span>
                  </span>
                </p>
              )}
            </div>
          </div>
        </header>

        {tabs.length > 0 && (
          <div className={cn("@container p-6", horizontal ? "flex-1 @sm:p-7 @3xl:p-10" : "sm:p-7")}>
            <div
              role="tablist"
              aria-label={`About ${doctor.name}`}
              onKeyDown={onTabKey}
              className="flex flex-wrap gap-x-6 border-b border-brand-line"
            >
              {tabs.map((t, i) => (
                <button
                  key={t.key}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${uid}-tab-${t.key}`}
                  aria-controls={`${uid}-panel-${t.key}`}
                  aria-selected={i === active}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative -mb-px py-3 text-label font-semibold uppercase transition-colors duration-150",
                    "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-lime",
                    "after:transition-transform after:duration-200",
                    i === active
                      ? "text-brand after:scale-x-100"
                      : "text-ink-faint hover:text-brand after:scale-x-0",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tabs.map((t, i) => (
              <ul
                key={t.key}
                id={`${uid}-panel-${t.key}`}
                role="tabpanel"
                aria-labelledby={`${uid}-tab-${t.key}`}
                hidden={i !== active}
                className={cn(
                  "mt-5 grid gap-x-6 gap-y-3 @md:grid-cols-2",
                  horizontal && "@3xl:gap-y-4",
                )}
              >
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-meta text-ink/85">
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
