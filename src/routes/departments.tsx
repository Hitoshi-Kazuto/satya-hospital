import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { departments, orthoTreatments } from "@/lib/hospital-data";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — Satya Hospital, Kanpur" },
      { name: "description", content: "Orthopaedics, Trauma, Joint Replacement, Obstetrics, Gynaecology, Infertility, Neurosurgery, ENT and more at Satya Hospital, Kanpur." },
      { property: "og:title", content: "Departments at Satya Hospital" },
      { property: "og:description", content: "Multi-speciality care led by senior consultants at Satya Hospital, Kanpur." },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand)]">Departments</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[color:var(--brand-deep)] sm:text-5xl">Centers of clinical excellence</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Every department at Satya Hospital is led by senior consultants, supported by modern diagnostics, modular OTs and 24×7 emergency backup.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ name, icon: Icon, desc }) => (
            <article key={name} className="rounded-2xl border border-border bg-white p-6 shadow-elevated/50 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand-deep)]">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-[color:var(--brand-deep)]">{name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--brand-soft)]/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-[color:var(--brand-deep)] sm:text-3xl">Orthopaedic treatments we specialise in</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {orthoTreatments.map((t) => (
              <span key={t} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}