import { Link } from "react-router-dom";
import { useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Award, CheckCircle2, User } from "lucide-react";
import { btn } from "@/components/site/buttons";
import type { Doctor } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";
import drAk from "@/assets/doctor-ak-agarwal.webp";
import drManisha from "@/assets/doctor-manisha-agarwal.jpg";
import drGaurav from "@/assets/doctor-gaurav.webp";
import drHimani from "@/assets/doctor-himani-vaswani.webp";

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
 */
export function DoctorProfile({
  doctor,
  bookLabel,
  headingLevel = "h3",
}: {
  doctor: Doctor;
  bookLabel?: string;
  headingLevel?: "h2" | "h3";
}) {
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

  return (
    <article className="@container flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-card">
      <header className="flex items-center gap-5 border-b border-brand-line p-6 @sm:gap-6 @sm:p-7">
        {image ? (
          <img
            src={image}
            alt={`Portrait of ${doctor.name}`}
            loading="lazy"
            decoding="async"
            width={224}
            height={224}
            className="h-20 w-20 shrink-0 rounded-full bg-brand-tint object-cover object-[50%_15%] ring-1 ring-brand-line @sm:h-26 @sm:w-26"
          />
        ) : (
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-brand-tint ring-1 ring-brand-line @sm:h-26 @sm:w-26">
            <User aria-hidden className="h-8 w-8 text-ink-faint" />
          </div>
        )}

        <div className="min-w-0">
          <Heading className="font-display text-h3 text-ink">{doctor.name}</Heading>
          <p className="mt-1 text-meta text-ink-muted">{doctor.specialty}</p>
          <span aria-hidden className="mt-3.5 block h-[3px] w-14 rounded-full bg-lime" />
          {doctor.experience && (
            <p className="mt-3.5 flex items-center gap-2 text-meta font-medium text-ink">
              <Award aria-hidden className="h-4 w-4 shrink-0 text-brand" />
              <span>
                <span className="tabular">{doctor.experience}</span> experience
              </span>
            </p>
          )}
        </div>
      </header>

      {tabs.length > 0 && (
        <div className="flex-1 p-6 @sm:p-7">
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
              className="mt-5 grid gap-x-6 gap-y-3 @md:grid-cols-2"
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

      <div className="px-6 pb-6 @sm:px-7 @sm:pb-7">
        <Link to="/appointment" className={cn(btn.primaryMd, "w-full")}>
          {bookLabel ?? "Book Appointment"} <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
