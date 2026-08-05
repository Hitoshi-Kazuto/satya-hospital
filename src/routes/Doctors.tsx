import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { btn } from "@/components/site/buttons";
import { doctors, contactInfo, stats } from "@/lib/hospital-data";
import drAk from "@/assets/doctor-ak-agarwal.jpeg";
import drManisha from "@/assets/doctor-manisha-agarwal.jpg";
import drGaurav from "@/assets/doctor-gaurav.jpeg";
import drHimani from "@/assets/doctor-himani-vaswani.jpeg";
import drVivek from "@/assets/doctor-vivek-sachan.jpeg";

const images: Record<string, string> = {
  "dr-ak-agarwal": drAk,
  "dr-manisha-agarwal": drManisha,
  "dr-gaurav": drGaurav,
  "dr-himani-vaswani": drHimani,
  "dr-vivek-sachan": drVivek,
};

function Doctors() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Doctors"
        title="Our doctors"
        intro="Senior consultants who lead orthopaedics, obstetrics, gynaecology and infertility at Satya Hospital."
      />

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-semibold text-[color:var(--brand)] sm:text-4xl">
                {n}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {doctors.map((d) => (
          <Reveal key={d.slug}>
            <article className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-white shadow-elevated/50 md:grid-cols-3">
              <img
                src={images[d.slug]}
                alt={d.name}
                loading="lazy"
                className="h-80 w-full object-cover object-top md:h-full"
              />
              <div className="p-8 md:col-span-2 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                  {d.specialty}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
                  {d.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {d.qualifications}
                  {d.experience ? ` · ${d.experience} experience` : ""}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {d.focus && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Focus areas
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm">
                        {d.focus.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {d.achievements && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Achievements
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm">
                        {d.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand)]" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Link to="/appointment" className={`${btn.primary} mt-8 inline-flex`}>
                  Book with {d.name.split(" ")[1]} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] gradient-brand p-10 text-white shadow-brand sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-mint)]">
                  Consultations
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                  Book a consultation with a senior consultant
                </h2>
                <p className="mt-3 max-w-lg leading-relaxed text-white/80">
                  Physical and video consultations available. OPD hours are 10:00 AM – 3:00 PM, and
                  the emergency department runs 24×7.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 rounded-full gradient-signal px-6 py-3.5 text-sm font-semibold text-[#16220a] shadow-signal transition duration-200 hover:brightness-105"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" /> {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default Doctors;
