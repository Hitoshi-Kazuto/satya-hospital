import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialtyContent } from "@/lib/hospital-data";

function NeuroSurgery() {
  return (
    <SpecialtyPage
      eyebrow={specialtyContent.neuro.eyebrow}
      title={specialtyContent.neuro.title}
      intro={specialtyContent.neuro.intro}
      sections={[...specialtyContent.neuro.sections]}
    />
  );
}

export default NeuroSurgery;
