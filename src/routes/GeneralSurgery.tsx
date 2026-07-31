import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialtyContent } from "@/lib/hospital-data";

function GeneralSurgery() {
  return (
    <SpecialtyPage
      eyebrow={specialtyContent.generalSurgery.eyebrow}
      title={specialtyContent.generalSurgery.title}
      intro={specialtyContent.generalSurgery.intro}
      sections={[...specialtyContent.generalSurgery.sections]}
    />
  );
}

export default GeneralSurgery;
