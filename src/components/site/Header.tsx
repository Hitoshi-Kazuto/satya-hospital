import { NavLink, Link, useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
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
      { label: "Physiotherapy", to: "/orthopedics#physiotherapy" },
      { label: "Shoulder Surgery", to: "/orthopedics#shoulder-surgery" },
      { label: "Arthritis Types", to: "/orthopedics#arthritis-types" },
      { label: "Club Foot", to: "/orthopedics#club-foot" },
      { label: "360 Degree Knee Care", to: "/orthopedics#knee-treatments" },
    ],
  },
  {
    label: "Infertility",
    to: "/infertility",
    children: [
      { label: "Intrauterine Insemination (IUI)", to: "/infertility#iui" },
      { label: "IUI Lab – World Class", to: "/infertility#iui-lab" },
      { label: "Andrology Lab – In-house", to: "/infertility#andrology-lab" },
      { label: "Semen Wash – In-house", to: "/infertility#semen-wash" },
      { label: "Comprehensive Women's Care", to: "/infertility#comprehensive-womens-care" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Our Services", to: "/services" },
      { label: "Gynecology & Obstetrics", to: "/gynecology-obstetrics" },
      { label: "General Surgery", to: "/general-surgery" },
      { label: "Facilities", to: "/facilities" },
      { label: "ENT", to: "/ent" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: null,
  },
] as const;

/* Order follows the homepage, which now leads with the consultants. */
const HOME_ANCHORS = [
  { id: "about", label: "About" },
  { id: "doctors", label: "Doctors" },
  { id: "specialities", label: "Specialities" },
  { id: "technology", label: "Technology" },
  { id: "services", label: "Services" },
  { id: "stories", label: "Patient Stories" },
  { id: "awards", label: "Standards" },
  { id: "contact", label: "Visit Us" },
] as const;

export function Header() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeAnchor, setActiveAnchor] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const onHome = pathname === "/";

  /* Condense the chrome once the page moves; reveal the in-page rail only
     after the hero has left, so the fold isn't spent on navigation. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setPastHero(y > 460);
    };
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

  /* Close everything on navigation. */
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname, hash]);

  /* Dismiss on outside click and on Escape — a hover-only menu was
     unreachable by keyboard entirely. */
  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) setOpenMenu(null);

      /* The toggle owns its own open/close — never let this handler act on
         the same click, so the two can't fight over the state. */
      if (mobileToggleRef.current?.contains(target)) return;
      if (mobileRef.current && !mobileRef.current.contains(target)) setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener("click", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleMenu = useCallback((label: string) => {
    setOpenMenu((current) => (current === label ? null : label));
  }, []);

  const showRail = onHome && pastHero;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "border-b border-brand-line bg-white transition-shadow duration-200",
          scrolled && "shadow-card",
        )}
      >
        <div
          className={cn(
            "shell flex items-center justify-between gap-6 transition-[height] duration-300 ease-[cubic-bezier(.2,.6,.2,1)]",
            scrolled ? "h-16 lg:h-18" : "h-20 lg:h-22",
          )}
        >
          <Logo compact={scrolled} />

          <div ref={navRef} className="hidden lg:block">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-1">
                {NAV.map((item) =>
                  item.children ? (
                    <li key={item.label} className="relative">
                      <span className="flex items-center">
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            cn(
                              "relative py-2 pl-3 pr-1 text-sm font-medium transition-colors duration-150",
                              "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-lime after:transition-transform after:duration-200",
                              isActive
                                ? "text-brand after:scale-x-100"
                                : "text-ink/80 hover:text-brand after:scale-x-0 hover:after:scale-x-100",
                            )
                          }
                        >
                          {item.label}
                        </NavLink>
                        <button
                          type="button"
                          onClick={() => toggleMenu(item.label)}
                          aria-expanded={openMenu === item.label}
                          aria-controls={`menu-${item.label}`}
                          aria-label={`${item.label} submenu`}
                          className="grid h-9 w-7 place-items-center rounded-md text-ink/60 transition hover:text-brand"
                        >
                          <ChevronDown
                            aria-hidden
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-200",
                              openMenu === item.label && "rotate-180",
                            )}
                          />
                        </button>
                      </span>

                      <div
                        id={`menu-${item.label}`}
                        hidden={openMenu !== item.label}
                        className="absolute left-0 top-full z-50 min-w-[16rem] pt-2"
                      >
                        <ul className="rounded-lg border border-brand-line bg-white p-1.5 shadow-pop">
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <Link
                                to={c.to}
                                onClick={() => setOpenMenu(null)}
                                className="block rounded-md px-3.5 py-2.5 text-sm text-ink/85 transition duration-150 hover:bg-brand-tint hover:text-brand"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          cn(
                            "relative block px-3 py-2 text-sm font-medium transition-colors duration-150",
                            "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-lime after:transition-transform after:duration-200",
                            isActive
                              ? "text-brand after:scale-x-100"
                              : "text-ink/80 hover:text-brand after:scale-x-0 hover:after:scale-x-100",
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contactInfo.phoneHref}
              className="hidden min-h-11 items-center gap-2 rounded-full border border-brand-line px-4 text-sm font-semibold text-brand transition duration-150 hover:border-brand/45 hover:bg-brand-tint md:inline-flex"
            >
              <Phone aria-hidden className="h-4 w-4" />
              Emergency 24×7
            </a>
            <Link
              to="/appointment"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white transition duration-150 hover:bg-brand-deep hover:shadow-hover sm:inline-flex"
            >
              Book <span className="hidden sm:inline">Appointment</span>
            </Link>
            <button
              type="button"
              ref={mobileToggleRef}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-line text-ink transition hover:border-brand/40 hover:text-brand lg:hidden"
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              {mobileOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* In-page rail: appears only once the hero is behind you. */}
      {onHome && (
        <nav
          aria-label="On this page"
          className={cn(
            "overflow-hidden border-b border-brand-line bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-[cubic-bezier(.2,.6,.2,1)]",
            showRail ? "max-h-14 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="shell flex items-center gap-1 overflow-x-auto py-2">
            {HOME_ANCHORS.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  aria-current={activeAnchor === a.id ? "true" : undefined}
                  className={cn(
                    "relative block whitespace-nowrap px-3 py-1.5 text-meta font-medium transition-colors duration-150",
                    "after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:rounded-full after:bg-lime after:transition-transform after:duration-200",
                    activeAnchor === a.id
                      ? "text-brand after:scale-x-100"
                      : "text-ink/70 hover:text-brand after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={mobileRef}
          className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-b border-brand-line bg-white lg:hidden"
        >
          <nav aria-label="Primary mobile" className="shell flex flex-col gap-0.5 py-4">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-brand-line/70 last:border-b-0">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-12 items-center rounded-md px-3 text-base font-medium",
                      isActive ? "text-brand" : "text-ink/90",
                    )
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mb-2 ml-3 flex flex-col border-l-2 border-lime/40 pl-3">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          to={c.to}
                          className="flex min-h-11 items-center rounded-md px-3 text-meta text-ink-muted transition hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <a
              href={contactInfo.phoneHref}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-line px-4 text-sm font-semibold text-brand"
            >
              <Phone aria-hidden className="h-4 w-4" /> Call Emergency 24×7
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
