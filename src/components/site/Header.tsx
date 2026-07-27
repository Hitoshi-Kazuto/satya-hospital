import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/departments", label: "Departments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/facilities", label: "Facilities" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand-deep)]"
              activeProps={{ className: "bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+915122282111"
            className="hidden items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-[color:var(--brand-deep)] transition hover:border-[color:var(--brand)]/40 hover:shadow-elevated md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Emergency 24×7
          </a>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110 sm:px-5"
          >
            Book Appointment
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-[color:var(--brand-soft)]"
                activeProps={{ className: "bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+915122282111"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-[color:var(--brand-deep)]"
            >
              <Phone className="h-4 w-4" /> Call Emergency 24×7
            </a>
          </div>
        </div>
      )}
    </header>
  );
}