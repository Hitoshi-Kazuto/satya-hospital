import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--brand-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="[&_a]:text-white [&_span]:text-white/70">
            <Logo />
          </div>
          <p className="mt-5 max-w-xs text-sm text-white/70">
            A trusted name in orthopaedic, trauma, maternity and infertility care in Kanpur since 1995.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" /> Satya Trauma &amp; Maternity Centre, HIG-1/2, 1/3, Satya Chowk, Barra 6, Kanpur, Uttar Pradesh 208027</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" /> 0512-22-821-11 / 12</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" /> contact@satyahospital.com</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            {[
              { label: "Facebook", href: "https://www.facebook.com/satyahospitals" },
              { label: "Instagram", href: "https://www.instagram.com/satyahospital/" },
              { label: "Twitter", href: "https://twitter.com/hospital_satya" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UC9nJ6i2w2ID3Yb41WvZYFSA" },
              { label: "WhatsApp", href: "https://wa.me/919838951052" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-xs font-medium text-white/70 underline-offset-4 transition hover:text-white hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Departments" links={[
          ["Orthopaedics", "/departments"],
          ["Joint Replacement", "/departments"],
          ["Trauma Care", "/departments"],
          ["Obstetrics & Gynaecology", "/departments"],
          ["Infertility", "/departments"],
          ["Diagnostics", "/departments"],
        ]} />

        <FooterCol title="Hospital" links={[
          ["About Us", "/"],
          ["Our Doctors", "/doctors"],
          ["Facilities", "/facilities"],
          ["Gallery", "/facilities"],
          ["Book Appointment", "/appointment"],
          ["Contact", "/contact"],
        ]} />

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Emergency</h4>
          <p className="mt-4 text-sm text-white/70">Our 24×7 emergency team is ready to respond.</p>
          <a href="tel:+915122282111" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-deep)] shadow-elevated">
            <Phone className="h-4 w-4" /> Call +91 512 228 2111
          </a>
          <p className="mt-6 text-xs text-white/50">Cashless insurance accepted at all major TPAs.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Satya Hospital, Kanpur. All rights reserved.</p>
          <p>Since 1995 · Trauma &amp; Maternity Center</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-white/70 transition hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}