import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialtyContent } from "@/lib/hospital-data";

function GynecologyObstetrics() {
  return (
    <SpecialtyPage
      eyebrow={specialtyContent.gynecology.eyebrow}
      title={specialtyContent.gynecology.title}
      intro={specialtyContent.gynecology.intro}
      sections={[...specialtyContent.gynecology.sections]}
    />
  );
}

export default GynecologyObstetrics;
