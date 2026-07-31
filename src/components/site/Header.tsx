import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { contactInfo } from "@/lib/hospital-data";
import { cn } from "@/lib/utils";

const NAV = [
  {
    label: "Home",
    to: "/",
    children: null,
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Our Doctors", to: "/doctors" },
      { label: "Infrastructure", to: "/infrastructure" },
    ],
  },
  {
    label: "Orthopedics",
    to: "/orthopedics",
    children: [
      { label: "Knee Pain", to: "/orthopedics#knee-pain" },
      { label: "Knee Replacement", to: "/orthopedics#knee-replacement" },
      { label: "Hip Replacement", to: "/orthopedics#hip-replacement" },
      { label: "Shoulder Surgery", to: "/orthopedics#shoulder-surgery" },
      { label: "Arthritis Types", to: "/orthopedics#arthritis-types" },
      { label: "Club Foot", to: "/orthopedics#club-foot" },
      { label: "Knee Treatments", to: "/orthopedics#knee-treatments" },
      { label: "Shoulder Treatments", to: "/orthopedics#shoulder-treatments" },
      { label: "Physiotherapy", to: "/orthopedics#physiotherapy" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Our Services", to: "/services" },
      { label: "Gynecology & Obstetrics", to: "/gynecology-obstetrics" },
      { label: "General Surgery", to: "/general-surgery" },
      { label: "ENT", to: "/ent" },
      { label: "Neuro Surgery", to: "/neuro-surgery" },
      { label: "Facilities", to: "/facilities" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: null,
  },
] as const;

const HOME_ANCHORS = [
  { id: "about", label: "About" },
  { id: "specialities", label: "Specialities" },
  { id: "doctors", label: "Doctors" },
  { id: "services", label: "Services" },
  { id: "technology", label: "Technology" },
  { id: "stories", label: "Patient Stories" },
  { id: "awards", label: "Standards" },
  { id: "contact", label: "Visit Us" },
] as const;

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("");
  const mobileRef = useRef<HTMLDivElement>(null);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const sections = HOME_ANCHORS.map((a) => document.getElementById(a.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const onScroll = () => {
      const pos = window.scrollY + 240;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top + window.scrollY <= pos) current = s.id;
      }
      setActiveAnchor(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="bg-[color:var(--brand)] text-white">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-6 px-4 text-[11px] font-medium sm:px-6 lg:px-8">
          <p className="hidden sm:block">Satya Trauma &amp; Maternity Centre · Barra 6, Kanpur</p>
          <p className="sm:hidden">Barra 6, Kanpur</p>
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-2 transition hover:text-white/80"
          >
            <Phone className="h-3.5 w-3.5" />
            24×7 Emergency · {contactInfo.phone}
          </a>
        </div>
      </div>

      <div
        className={`border-b border-border transition-shadow duration-200 ${
          scrolled
            ? "bg-white/95 shadow-[0_4px_24px_-12px_rgba(46,96,147,0.25)] backdrop-blur"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-24 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition duration-200 hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand)]"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[230px] pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-border bg-white p-2 shadow-elevated">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/85 transition hover:bg-[color:var(--brand-soft)] hover:text-[color:var(--brand)]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                      isActive
                        ? "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"
                        : "text-foreground/80 hover:bg-[color:var(--brand-soft)]/60 hover:text-[color:var(--brand)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contactInfo.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-[color:var(--brand)] transition duration-200 hover:border-[color:var(--brand)]/40 hover:shadow-elevated md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Emergency 24×7
            </a>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-brand transition duration-200 hover:brightness-110 sm:px-5"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {onHome && (
        <nav className="border-t border-border bg-white" aria-label="In this page">
          <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
            {HOME_ANCHORS.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition duration-200",
                  activeAnchor === a.id
                    ? "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"
                    : "text-foreground/70 hover:bg-[color:var(--brand-soft)]/60 hover:text-[color:var(--brand)]",
                )}
              >
                {a.label}
              </a>
            ))}
          </div>
        </nav>
      )}

      {mobileOpen && (
        <div className="border-b border-border bg-white lg:hidden" ref={mobileRef}>
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <div key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive
                        ? "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"
                        : "text-foreground/90"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-4 py-2 text-sm text-foreground/70 hover:text-[color:var(--brand)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={contactInfo.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-[color:var(--brand)]"
            >
              <Phone className="h-4 w-4" /> Call Emergency 24×7
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
