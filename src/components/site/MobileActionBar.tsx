import { Link } from "react-router-dom";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/lib/hospital-data";

/**
 * Sticky patient actions on mobile.
 *
 * Most visitors to a hospital site arrive on a phone with one of three jobs:
 * call, book, or find the place. Keeping those one tap away at all times is
 * the single highest-value interaction change on the site. Hidden from md up,
 * where the same actions live in the header.
 */
export function MobileActionBar() {
  const cell =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[0.6875rem] font-semibold transition-colors duration-150";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-line bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <nav aria-label="Quick actions" className="flex items-stretch">
        <a href={contactInfo.phoneHref} className={`${cell} text-brand`}>
          <Phone aria-hidden className="h-5 w-5" />
          Call 24×7
        </a>
        <span aria-hidden className="my-2 w-px bg-brand-line" />
        <Link to="/appointment" className={`${cell} text-brand`}>
          <CalendarCheck aria-hidden className="h-5 w-5" />
          Book
        </Link>
        <span aria-hidden className="my-2 w-px bg-brand-line" />
        <a
          href={contactInfo.maps}
          target="_blank"
          rel="noreferrer"
          className={`${cell} text-brand`}
        >
          <MapPin aria-hidden className="h-5 w-5" />
          Directions
        </a>
      </nav>
    </div>
  );
}
