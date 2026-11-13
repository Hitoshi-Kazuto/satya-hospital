import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, stagger } from "@/components/site/Reveal";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { DataBand } from "@/components/site/sections/DataBand";
import { FeatureBand } from "@/components/site/sections/FeatureBand";
import { btn } from "@/components/site/buttons";
import { doctors, contactInfo, stats } from "@/lib/hospital-data";

function Doctors() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Doctors"
        title="Our doctors"
        intro="Senior consultants who lead orthopaedics, obstetrics, gynaecology and infertility at Satya Hospital."
      />

      <section className="border-b border-brand-line bg-white">
        <div className="shell py-4">
          <DataBand items={stats} />
        </div>
      </section>

      {/* Achievements and qualifications now live in the card's own tabs. */}
      <section className="shell band grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((d, i) => (
          <Reveal key={d.slug} delay={stagger(i, 70)} className="h-full">
            <DoctorProfile
              doctor={d}
              headingLevel="h2"
              bookLabel={`Book with ${d.name.split(" ")[1]}`}
            />
          </Reveal>
        ))}
      </section>

      <FeatureBand
        eyebrow="Consultations"
        title="Book a consultation with a senior consultant"
        intro="Physical and video consultations available. OPD hours are 10:00 AM – 3:00 PM, and the emergency department runs 24×7."
        actions={
          <>
            <Link to="/appointment" className={btn.onDark}>
              Book Appointment <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={contactInfo.phoneHref} className={btn.onDarkGhost}>
              <Phone aria-hidden className="h-4 w-4" /> {contactInfo.phone}
            </a>
          </>
        }
      />
    </SiteLayout>
  );
}

export default Doctors;
