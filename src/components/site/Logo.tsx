import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.jpeg";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Satya Hospital home">
      <img
        src={logoImg}
        alt="Satya Hospital"
        className="h-12 w-auto shrink-0 rounded-lg object-contain"
      />
      <span className="leading-tight">
        <span
          className={`block font-display text-base font-semibold tracking-tight ${
            inverted ? "text-white" : "text-foreground"
          }`}
        >
          Satya Hospital
        </span>
        <span
          className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${
            inverted ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          Trauma &amp; Maternity Center
        </span>
      </span>
    </Link>
  );
}
