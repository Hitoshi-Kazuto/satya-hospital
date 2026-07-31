import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { contactInfo } from "@/lib/hospital-data";

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="text-white/75 transition duration-200 hover:text-[color:var(--accent-mint)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#0b3a6b] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm text-white/70">
            A trusted name in orthopaedic, trauma, maternity and infertility care in Kanpur since
            1995.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" />
              {contactInfo.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" />
              {contactInfo.phone} · {contactInfo.altPhone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" />
              <a
                href={contactInfo.emailHref}
                className="transition hover:text-[color:var(--accent-mint)]"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { label: "Facebook", href: "https://www.facebook.com/satyahospitals" },
              { label: "Instagram", href: "https://www.instagram.com/satyahospital/" },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UC9nJ6i2w2ID3Yb41WvZYFSA",
              },
              { label: "WhatsApp", href: contactInfo.whatsapp },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-xs font-medium text-white/70 underline-offset-4 transition duration-200 hover:text-[color:var(--accent-mint)] hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="About"
          links={[
            ["About Us", "/about"],
            ["Our Doctors", "/doctors"],
            ["Infrastructure", "/infrastructure"],
            ["Facilities", "/facilities"],
            ["Contact", "/contact"],
          ]}
        />

        <FooterCol
          title="Orthopedics"
          links={[
            ["Knee Pain", "/orthopedics#knee-pain"],
            ["Knee Replacement", "/orthopedics#knee-replacement"],
            ["Hip Replacement", "/orthopedics#hip-replacement"],
            ["Shoulder Surgery", "/orthopedics#shoulder-surgery"],
            ["Knee Treatments", "/orthopedics#knee-treatments"],
            ["Shoulder Treatments", "/orthopedics#shoulder-treatments"],
          ]}
        />

        <FooterCol
          title="Services"
          links={[
            ["Our Services", "/services"],
            ["Gynecology & Obstetrics", "/gynecology-obstetrics"],
            ["General Surgery", "/general-surgery"],
            ["ENT", "/ent"],
            ["Neuro Surgery", "/neuro-surgery"],
            ["Book Appointment", "/appointment"],
          ]}
        />
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
