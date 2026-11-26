import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { TopicSections } from "@/components/site/sections/TopicSections";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
import { btn } from "@/components/site/buttons";
import { infertilityServices, doctors } from "@/lib/hospital-data";

const fertilityDoctors = doctors.filter((d) => d.slug === "dr-manisha-agarwal");

function Infertility() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Infertility & Fertility Care"
        title="Infertility and fertility care"
        intro="A dedicated fertility unit led by Dr. Manisha Agrawal — from complete evaluation and in-house IUI to compassionate, personalised treatment plans for couples trying to conceive."
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {infertilityServices.map((t) => (
            <li key={t.slug}>
              <a
                href={`#${t.slug}`}
                className="inline-block rounded-full border border-white/25 px-4 py-2 text-meta font-medium text-white/85 transition duration-150 hover:border-lime hover:text-lime"
              >
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>

      <section className="border-b border-brand-line bg-white band">
        <div className="shell">
          <Reveal>
            <SectionHeading title="Meet Your Fertility Specialist" />
          </Reveal>
          <div className="mt-10 grid gap-6">
            {fertilityDoctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <DoctorProfile doctor={d} layout="horizontal" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TopicSections groups={[{ label: "", topics: [...infertilityServices] }]} />

      <FeatureBand
        eyebrow="Consult a Specialist"
        title="Get a clear fertility assessment before any treatment begins."
        intro={`${doctors[1].name} brings ${doctors[1].experience} of obstetrics and gynaecology experience — book a consultation for an honest, personalised fertility plan.`}
        actions={
          <>
            <Link to="/appointment" className={btn.onDark}>
              Book Appointment <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link to="/doctors" className={btn.onDarkGhost}>
              Meet our doctors <ChevronRight aria-hidden className="h-4 w-4" />
            </Link>
          </>
        }
        aside={
          <div className="rounded-lg border border-white/15 bg-white/5 p-8">
            <h2 className="font-display text-h3 font-bold text-white">Our fertility services</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {infertilityServices.map((t) => (
                <li key={t.slug}>
                  <a
                    href={`#${t.slug}`}
                    className="inline-block rounded-full border border-white/25 px-3.5 py-1.5 text-meta font-medium text-white/85 transition duration-150 hover:border-lime hover:text-lime"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </SiteLayout>
  );
}

export default Infertility;
