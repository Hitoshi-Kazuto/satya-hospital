/**
 * Button vocabulary.
 *
 * Blue carries action; lime is never a button fill (it cannot hold white
 * text, and spending the accent on every CTA would stop it meaning anything).
 * Lime appears on buttons only as the focus/active marker.
 *
 * Every variant lands on a 44px minimum target.
 */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-150 " +
  "ease-[cubic-bezier(.2,.6,.2,1)] active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-45";

const size = {
  sm: "min-h-9 px-4 py-2 text-[0.8125rem]",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-sm",
};

export const btn = {
  /** Solid blue — the primary action anywhere on a light surface. */
  primary: `${base} ${size.lg} bg-brand text-white hover:bg-brand-deep hover:shadow-hover`,
  primaryMd: `${base} ${size.md} bg-brand text-white hover:bg-brand-deep hover:shadow-hover`,
  primarySm: `${base} ${size.sm} bg-brand text-white hover:bg-brand-deep`,

  /** Outlined — secondary action on a light surface. */
  secondary: `${base} ${size.lg} border border-brand-line bg-white text-brand hover:border-brand/45 hover:bg-brand-tint`,
  secondaryMd: `${base} ${size.md} border border-brand-line bg-white text-brand hover:border-brand/45 hover:bg-brand-tint`,

  /** Quiet — tertiary, sits inside dense UI. */
  ghost: `${base} ${size.md} text-brand hover:bg-brand-tint`,

  /** On a deep-blue band: white solid reads as primary. */
  onDark: `${base} ${size.lg} bg-white text-brand hover:bg-brand-tint`,
  /** On a deep-blue band: hairline outline reads as secondary. */
  onDarkGhost: `${base} ${size.lg} border border-white/35 bg-white/5 text-white hover:border-white/60 hover:bg-white/12`,

  /** Inline text action with the lime underline marker. */
  link:
    "inline-flex items-center gap-1.5 text-sm font-semibold text-brand " +
    "underline-offset-4 decoration-2 decoration-lime hover:underline",
};
