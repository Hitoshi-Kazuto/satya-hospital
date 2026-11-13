import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Archetype B — the index.
 *
 * Replaces the sparse card grid for anything a patient scans rather than
 * reads: specialities, services, facilities, conditions. Hairline-ruled rows
 * put twenty entries on screen where six cards used to sit, and density is
 * what makes a hospital look like it has depth.
 *
 * Entries without a destination render without the hover affordance — a
 * static card that lifts is a lie about what is clickable.
 */
export type IndexEntry = {
  name: string;
  desc?: string;
  to?: string;
  href?: string;
};

export function IndexList({
  items,
  columns = 2,
  actionLabel,
  className,
}: {
  items: IndexEntry[];
  columns?: 1 | 2;
  /** Optional text affordance revealed on hover, beside the arrow. */
  actionLabel?: string;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "border-t border-brand-line",
        columns === 2 && "lg:grid lg:grid-cols-2 lg:gap-x-14",
        className,
      )}
    >
      {items.map((item) => {
        const interactive = Boolean(item.to || item.href);

        const body = (
          <>
            <span className="flex items-baseline gap-3">
              <span
                className={cn(
                  "font-display text-h4 text-ink transition-colors duration-150",
                  interactive && "group-hover:text-brand",
                )}
              >
                {item.name}
              </span>
            </span>
            {item.desc && (
              <span className="mt-1 block text-meta text-ink-muted sm:mt-0">{item.desc}</span>
            )}
            {interactive && (
              <span className="hidden shrink-0 items-center gap-1.5 self-center text-meta font-semibold text-brand opacity-0 transition-opacity duration-150 group-hover:opacity-100 sm:flex">
                {actionLabel}
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </span>
            )}
          </>
        );

        const rowClass =
          "grid min-h-[3.75rem] items-baseline gap-x-6 py-4 sm:grid-cols-[minmax(0,15rem)_1fr_auto] sm:py-5";

        return (
          <li key={item.name} className="border-b border-brand-line">
            {item.to ? (
              <Link
                to={item.to}
                className={cn(rowClass, "group transition-colors duration-150 hover:text-brand")}
              >
                {body}
              </Link>
            ) : item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={cn(rowClass, "group transition-colors duration-150 hover:text-brand")}
              >
                {body}
              </a>
            ) : (
              <div className={rowClass}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
