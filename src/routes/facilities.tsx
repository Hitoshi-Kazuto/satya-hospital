import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { equipment, facilities } from "@/lib/hospital-data";
import facOt from "@/assets/facility-ot.jpg";
import facReception from "@/assets/facility-reception.jpg";
import facRoom from "@/assets/facility-room.jpg";
import hero from "@/assets/hero-hospital.jpg";

function Facilities() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Facilities & Equipment"
        title="Facilities"
        intro="Systems and services available on site at Satya Hospital."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[hero, facReception, facOt, facRoom].map((s, i) => (
              <img
                key={i}
                src={s}
                alt="Satya Hospital"
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover shadow-elevated md:h-64"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Facilities"
              title="Facility register"
              intro="Systems and services available on site."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f} delay={Math.min(i, 8) * 50} className="h-full">
                <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-elevated/50">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--brand)]" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Equipment"
            title="Equipment we use"
            intro="Imaging, surgical and monitoring systems used across the hospital."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map(({ name, icon: Icon }, i) => (
            <Reveal key={name} delay={Math.min(i, 7) * 60} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6 text-center shadow-elevated/50 transition duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-foreground">{name}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to="/services" className={btn.secondary}>
            Explore our services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default Facilities;
