import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/satya-logo.png.asset.json";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Satya Hospital home">
      <img
        src={logoAsset.url}
        alt="Satya Hospital — Trauma & Maternity Center"
        className="h-10 w-auto shrink-0 sm:h-12"
      />
      {!compact && (
        <span className="sr-only">Satya Hospital — Trauma &amp; Maternity Center</span>
      )}
    </Link>
  );
}