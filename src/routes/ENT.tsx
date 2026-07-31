import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialtyContent } from "@/lib/hospital-data";

function ENT() {
  return (
    <SpecialtyPage
      eyebrow={specialtyContent.ent.eyebrow}
      title={specialtyContent.ent.title}
      intro={specialtyContent.ent.intro}
      sections={[...specialtyContent.ent.sections]}
    />
  );
}

export default ENT;
