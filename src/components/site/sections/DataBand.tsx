import { CountUp } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/**
 * Archetype D — the data band.
 *
 * Figures separated by rules, set in tabular numerals so the columns align,
 * each marked with a lime tick. Counts up once on first view (tier-2 motion;
 * skipped entirely under reduced-motion, where the final value renders
 * immediately).
 */
export function DataBand({
  items,
  tone = "light",
  className,
}: {
  items: readonly (readonly [string, string])[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  // 2-up on mobile, 4-up from md. Rules sit between cells only, never on the
  // outer edges, so the band reads as one object rather than four boxes.
  const cell = cn(
    "px-4 py-7 text-center sm:px-6",
    dark ? "border-white/15" : "border-brand-line",
    "border-b [&:nth-child(odd)]:border-r [&:nth-last-child(-n+2)]:border-b-0",
    "md:border-b-0 md:border-r md:last:border-r-0",
  );

  return (
    <dl className={cn("grid grid-cols-2 md:grid-cols-4", className)}>
      {items.map(([figure, label]) => (
        <div key={label} className={cell}>
          <span aria-hidden className="mx-auto mb-3 block h-[3px] w-7 rounded-full bg-lime" />
          <dt className="sr-only">{label}</dt>
          <dd>
            <span
              className={cn(
                "tabular block font-display text-figure font-semibold",
                dark ? "text-white" : "text-brand",
              )}
            >
              <CountUp value={figure} />
            </span>
            <span
              className={cn(
                "mt-2.5 block text-label font-semibold uppercase",
                dark ? "text-white/65" : "text-ink-muted",
              )}
            >
              {label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
