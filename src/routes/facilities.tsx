import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { equipment, facilities } from "@/lib/hospital-data";
import facOt from "@/assets/facility-ot.jpg";
import facReception from "@/assets/facility-reception.jpg";
import facRoom from "@/assets/facility-room.jpg";
import hero from "@/assets/hero-hospital.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Equipment — Satya Hospital, Kanpur" },
      { name: "description", content: "Modular OTs, 24×7 emergency, labour room, joint replacement centre, digital diagnostics and advanced physiotherapy at Satya Hospital." },
      { property: "og:title", content: "Facilities at Satya Hospital" },
      { property: "og:description", content: "Purpose-built infrastructure for complex surgery and comfortable recovery." },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">Facilities</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[color:var(--brand-deep)] sm:text-5xl">Built for healing.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Every corner of Satya Hospital — from theatres to rooms — is designed around clinical safety and patient comfort.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[hero, facReception, facOt, facRoom].map((s, i) => (
            <img key={i} src={s} alt="Satya Hospital" loading="lazy" className="h-56 w-full rounded-2xl object-cover md:h-64" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-deep)] sm:text-3xl">Facilities</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map((f) => (
            <div key={f} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--accent-mint)]" />
              <span className="text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-deep)] sm:text-3xl">Advanced Equipment</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map(({ name, icon: Icon }) => (
            <div key={name} className="rounded-2xl border border-border bg-white p-6 text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-[color:var(--brand-deep)]">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}