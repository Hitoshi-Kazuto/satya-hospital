import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { doctors } from "@/lib/hospital-data";
import drAk from "@/assets/doctor-ak-agarwal.jpg";
import drManisha from "@/assets/doctor-manisha-agarwal.jpg";

const images: Record<string, string> = {
  "dr-ak-agarwal": drAk,
  "dr-manisha-agarwal": drManisha,
};

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Satya Hospital, Kanpur" },
      { name: "description", content: "Meet the senior consultants at Satya Hospital: Dr. A.K. Agarwal (Orthopaedic & Sports Injury) and Dr. Manisha Agarwal (Gynaecology & Infertility)." },
      { property: "og:title", content: "Doctors at Satya Hospital" },
      { property: "og:description", content: "Senior specialists in orthopaedics, sports injury, gynaecology and infertility care." },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">Our Doctors</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[color:var(--brand-deep)] sm:text-5xl">Senior specialists you can trust</h1>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 pb-24 sm:px-6 lg:px-8">
        {doctors.map((d) => (
          <article key={d.slug} className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-white shadow-elevated md:grid-cols-3">
            <img src={images[d.slug]} alt={d.name} loading="lazy" className="h-80 w-full object-cover object-top md:h-full" />
            <div className="p-8 md:col-span-2 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">{d.specialty}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-[color:var(--brand-deep)]">{d.name}</h2>
              <p className="text-sm text-muted-foreground">{d.qualifications} · {d.experience} experience</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Focus areas</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {d.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-mint)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Achievements</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {d.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-brand">
                Book with {d.name.split(" ")[1]} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}