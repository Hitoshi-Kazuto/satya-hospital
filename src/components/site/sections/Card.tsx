import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The one card anatomy left in the system.
 *
 * Cards now earn their place — they survive only where an item is genuinely
 * a discrete, clickable object (doctors, patient resources, selections).
 * Everything that used to be "card with an icon chip and one grey line" is
 * now an IndexList row.
 *
 * Hover elevation is applied only when the card is actually interactive.
 */
export function Card({
  to,
  children,
  className,
  surface = "white",
}: {
  to?: string;
  children: ReactNode;
  className?: string;
  surface?: "white" | "tint";
}) {
  const base = cn(
    "block rounded-lg border border-brand-line shadow-card",
    surface === "white" ? "bg-white" : "bg-brand-tint",
    className,
  );

  if (!to) return <div className={base}>{children}</div>;

  return (
    <Link
      to={to}
      className={cn(
        base,
        "group transition-[border-color,box-shadow,transform] duration-200",
        "hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-hover",
      )}
    >
      {children}
    </Link>
  );
}

/**
 * Icon treatment: thin stroke on a hairline square, no gradient chip.
 * Pass `aria-hidden` icons only — the adjacent heading carries the meaning.
 */
export function CardIcon({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-brand-line bg-brand-tint text-brand">
      {children}
    </span>
  );
}
