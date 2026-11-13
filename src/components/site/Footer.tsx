import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { contactInfo } from "@/lib/hospital-data";

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h2 className="text-label font-semibold uppercase text-lime">{title}</h2>
      <ul className="mt-5 space-y-3 text-meta">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="inline-block text-white/75 transition-colors duration-150 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/satyahospitals", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/satyahospital/", icon: Instagram },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC9nJ6i2w2ID3Yb41WvZYFSA",
    icon: Youtube,
  },
  { label: "WhatsApp", href: contactInfo.whatsapp, icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <div aria-hidden className="h-[3px] w-full bg-lime" />
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="measure-tight mt-6 text-meta text-white/70">
            A trusted name in orthopaedic, trauma, maternity and infertility care in Kanpur since
            1995.
          </p>
          <dl className="mt-7 space-y-3.5 text-meta text-white/80">
            <div className="flex items-start gap-3">
              <dt>
                <span className="sr-only">Address</span>
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
              </dt>
              <dd>{contactInfo.address}</dd>
            </div>
            <div className="flex items-start gap-3">
              <dt>
                <span className="sr-only">Phone</span>
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
              </dt>
              <dd className="tabular">
                {contactInfo.phone} · {contactInfo.altPhone}
              </dd>
            </div>
            <div className="flex items-start gap-3">
              <dt>
                <span className="sr-only">Email</span>
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
              </dt>
              <dd>
                <a
                  href={contactInfo.emailHref}
                  className="transition-colors duration-150 hover:text-lime"
                >
                  {contactInfo.email}
                </a>
              </dd>
            </div>
          </dl>
          <ul className="mt-7 flex flex-wrap items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/75 transition duration-150 hover:border-lime hover:text-lime"
                >
                  <span className="sr-only">{label}</span>
                  <Icon aria-hidden className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
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
            ["Facilities", "/facilities"],
            ["ENT", "/ent"],
            ["Book Appointment", "/appointment"],
          ]}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-meta text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Satya Hospital, Kanpur. All rights reserved.</p>
          <p>Since 1995 · Trauma &amp; Maternity Center</p>
        </div>
      </div>
    </footer>
  );
}
