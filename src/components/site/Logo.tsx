import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.jpeg";

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Satya Hospital home">
      <img
        src={logoImg}
        alt="Satya Hospital"
        width={176}
        height={80}
        className={cn(
          "w-auto shrink-0 rounded-sm object-contain transition-[height] duration-300 ease-[cubic-bezier(.2,.6,.2,1)]",
          compact ? "h-9" : "h-11",
        )}
      />
      <span className="hidden leading-tight sm:block">
        <span
          className={cn(
            "block font-display text-[0.9375rem] font-semibold tracking-tight",
            inverted ? "text-white" : "text-ink",
          )}
        >
          Satya Hospital
        </span>
        <span
          className={cn(
            "block text-[0.625rem] font-medium uppercase tracking-[0.16em]",
            inverted ? "text-white/60" : "text-ink-faint",
          )}
        >
          Trauma &amp; Maternity Center
        </span>
      </span>
    </Link>
  );
}
