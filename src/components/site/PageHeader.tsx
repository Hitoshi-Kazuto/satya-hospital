import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Inner-page masthead. Flat deep blue with a lime baseline rule — the
 * gradient slab it replaces read as generic.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-brand-deep text-white">
      <div className="shell pb-14 pt-12 lg:pb-16 lg:pt-16">
        <nav aria-label="Breadcrumb" className="text-meta">
          <ol className="flex items-center gap-2 text-white/60">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-white/30">
              /
            </li>
            <li>
              <span aria-current="page" className="text-lime">
                {eyebrow}
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="mt-5 max-w-4xl font-display text-h1 font-bold text-white">{title}</h1>
        {intro && <p className="measure mt-5 text-lead text-white/80">{intro}</p>}
        {children}
      </div>
      <div aria-hidden className="h-[3px] w-full bg-lime" />
    </section>
  );
}

/**
 * Section heading. The uppercase eyebrow is now a marked label rather than
 * the site's universal device — use `eyebrow` on at most three sections
 * per page and let the rest open on the heading alone.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  tone = "light",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-label font-bold uppercase",
            dark ? "bg-lime/15 text-lime" : "bg-lime-tint text-lime-ink ring-1 ring-lime/40",
          )}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-h2 font-bold",
          eyebrow ? "mt-4" : "",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Tag>
      <span
        aria-hidden
        className={cn("mt-4 block h-1 w-14 rounded-full bg-lime", center && "mx-auto")}
      />
      {intro && (
        <p
          className={cn(
            "measure mt-5 text-lead",
            center && "mx-auto",
            dark ? "text-white/80" : "text-ink-muted",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Transitional alias — existing pages import `SectionHeader`. */
export const SectionHeader = SectionHeading;
