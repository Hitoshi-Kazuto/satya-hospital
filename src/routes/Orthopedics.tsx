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
import { orthoTopicGroups, doctors, type OrthoTopic } from "@/lib/hospital-data";

const allTopics = orthoTopicGroups.flatMap((g) => g.topics) as OrthoTopic[];

const orthoDoctors = doctors.filter((d) => d.slug === "dr-ak-agarwal" || d.slug === "dr-gaurav");

function Orthopedics() {
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
        eyebrow="Orthopedics"
        title="Orthopaedic care"
        intro="Knee, hip and shoulder care — from pain management and injections to replacement surgery and rehabilitation, led by senior consultants with in-house physiotherapy."
      />

      <section className="border-b border-brand-line bg-white band">
        <div className="shell">
          <Reveal>
            <SectionHeading title="Meet Your Orthopaedic Consultants" />
          </Reveal>
          <div className="mt-10 grid gap-6">
            {orthoDoctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <DoctorProfile doctor={d} layout="horizontal" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TopicSections groups={orthoTopicGroups} />

      <FeatureBand
        eyebrow="Consult a Specialist"
        title="Get a clear assessment before any treatment begins."
        intro={`${doctors[0].name} brings ${doctors[0].experience} of orthopaedic experience — book a consultation for an honest assessment of your knee, hip, shoulder or sports injury.`}
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
            <h2 className="font-display text-h3 font-bold text-white">
              Common conditions we treat
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {allTopics.map((t) => (
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

export default Orthopedics;
