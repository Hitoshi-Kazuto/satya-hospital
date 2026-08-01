import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { infrastructure } from "@/lib/hospital-data";
import facOt from "@/assets/ot-0.jpeg";
import facReception from "@/assets/both-doc.jpeg";
import facRoom from "@/assets/doc-1.jpeg";
import heroImg from "@/assets/hero-hospital.jpg";
import ot1 from "@/assets/ot-1.jpeg";
import ot2 from "@/assets/ot-2.jpeg";
import ot3 from "@/assets/ot-3.jpeg";
import ot4 from "@/assets/ot-4.jpeg";
import ot5 from "@/assets/ot-5.jpeg";
import ot6 from "@/assets/ot-6.jpeg";

function Infrastructure() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Infrastructure & Technology"
        title="Infrastructure"
        intro="Operation theatres, diagnostics, emergency and patient rooms built to modern standards of sterility, monitoring and comfort."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[heroImg, facReception, facOt, facRoom].map((s, i) => (
              <img
                key={i}
                src={s}
                alt="Satya Hospital infrastructure"
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-elevated md:h-64"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-[color:var(--brand-soft)]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="What's Inside" title="Hospital infrastructure" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map(({ title, icon: Icon, desc }, i) => (
              <Reveal key={title} delay={Math.min(i, 7) * 60} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                  <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Operation Theatres"
            title="Our modular operation theatres"
            intro="HEPA-filtered, laminar-flow theatres designed for zero-infection surgery."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[facOt, ot1, ot2, ot3, ot4, ot5, ot6].map((s, i) => (
            <Reveal
              key={i}
              delay={Math.min(i, 6) * 60}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <img
                src={s}
                alt="Modular operation theatre"
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-elevated"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] gradient-brand p-10 text-white shadow-brand sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-mint)]">
                  Facilities
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                  Infrastructure for surgery and recovery
                </h2>
                <p className="mt-3 max-w-lg leading-relaxed text-white/80">
                  Operation theatres, diagnostics, emergency and patient rooms built to modern
                  standards.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/facilities"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand)] shadow-elevated transition duration-200 hover:bg-[color:var(--brand-soft)]"
                >
                  Explore facilities <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
                >
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default Infrastructure;
