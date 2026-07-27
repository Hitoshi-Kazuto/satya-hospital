import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Satya Hospital, Kanpur" },
      { name: "description", content: "Contact Satya Hospital, Kanpur for appointments, emergency care and enquiries. Open 24×7." },
      { property: "og:title", content: "Contact Satya Hospital" },
      { property: "og:description", content: "Reach us for appointments and 24×7 emergency care in Kanpur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[color:var(--brand-deep)] sm:text-5xl">We're here, 24 hours a day.</h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { icon: Phone, title: "Helpline & Reception", value: "0512-22-821-11 / 12 · Reception 98389 68996", href: "tel:+915122282111" },
            { icon: Mail, title: "Email", value: "contact@satyahospital.com", href: "mailto:contact@satyahospital.com" },
            { icon: MapPin, title: "Visit", value: "HIG-1/2, 1/3, Satya Chowk, Barra 6, Kanpur, UP 208027", href: "https://www.google.com/maps/place/Satya+Trauma+%26+Maternity+Centre/@26.4394742,80.2905691,17z/data=!3m1!4b1!4m5!3m4!1s0x399c47c3cd081a87:0x624a166e9d7bbb0a!8m2!3d26.4394694!4d80.2927578" },
          ].map(({ icon: Icon, title, value, href }) => (
            <a key={title} href={href} className="rounded-3xl border border-border bg-white p-8 shadow-elevated/50 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)]">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-[color:var(--brand-deep)]">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-elevated">
          <iframe
            title="Satya Hospital location map"
            src="https://www.google.com/maps?q=Satya+Trauma+%26+Maternity+Centre+Barra+6+Kanpur&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}