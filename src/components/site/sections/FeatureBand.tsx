import type { ReactNode } from "react";
import { SectionHeading } from "@/components/site/PageHeader";
import { cn } from "@/lib/utils";

/**
 * Archetype C — the feature band.
 *
 * Full-bleed deep blue, inverted type, one idea and one action. Flat fill,
 * never a gradient: this is the section that used to be a rounded gradient
 * slab floating inside a white page, which is the single most template-like
 * element the site had.
 */
export function FeatureBand({
  eyebrow,
  title,
  intro,
  actions,
  aside,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("bg-brand-deep text-white", className)}>
      <div className="shell band">
        <div className={cn("grid gap-10", aside && "lg:grid-cols-[1.1fr_0.9fr] lg:items-center")}>
          <div>
            <SectionHeading tone="dark" eyebrow={eyebrow} title={title} intro={intro} />
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
