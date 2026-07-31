import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <section className="gradient-brand text-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
        >
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="text-white/40" aria-hidden>
            /
          </span>
          <span className="text-[color:var(--accent-mint)]">{eyebrow}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-muted-foreground">{intro}</p>}
    </div>
  );
}
