import { Star } from "lucide-react";
import type { Review } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";

/**
 * Continuously scrolling row of review cards — five visible at xl, three at
 * md, a card and a peek on phones. The list is rendered twice and the track
 * slides by exactly half its width, so the loop has no visible seam.
 *
 * Pauses on hover and keyboard focus. Under reduced motion the animation is
 * dropped and the row becomes a plain horizontal scroller.
 */
export function ReviewMarquee({ reviews }: { reviews: readonly Review[] }) {
  if (reviews.length === 0) return null;

  // Slower for longer lists so each card stays on screen for a similar time.
  const duration = `${Math.max(30, reviews.length * 6)}s`;

  return (
    <div className="review-marquee group relative overflow-hidden motion-reduce:overflow-x-auto">
      {/* Edge fades — decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-16"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-16"
      />

      <ul className="review-track flex w-max gap-5 py-2" style={{ animationDuration: duration }}>
        {[...reviews, ...reviews].map((r, i) => (
          <li
            key={`${r.name}-${i}`}
            aria-hidden={i >= reviews.length}
            className="review-card flex shrink-0 flex-col rounded-lg border border-brand-line bg-white p-6 shadow-card"
          >
            <div className="flex items-center gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, s) => (
                <Star
                  key={s}
                  aria-hidden
                  className={cn(
                    "h-4 w-4",
                    s < r.rating ? "fill-amber-400 text-amber-400" : "text-brand-line",
                  )}
                />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-meta leading-relaxed text-ink/85">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <footer className="mt-5 flex items-center gap-3 border-t border-brand-line pt-4">
              <span
                aria-hidden
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-meta font-bold text-white"
              >
                {r.name.charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-semibold text-ink">{r.name}</span>
                {r.treatment && (
                  <span className="block truncate text-label font-semibold uppercase text-lime-ink">
                    {r.treatment}
                  </span>
                )}
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}
