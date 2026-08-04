import { SpecialtyPage } from "@/components/site/SpecialtyPage";
import { specialtyContent } from "@/lib/hospital-data";

function Infertility() {
  return (
    <SpecialtyPage
      eyebrow={specialtyContent.infertility.eyebrow}
      title={specialtyContent.infertility.title}
      intro={specialtyContent.infertility.intro}
      sections={[...specialtyContent.infertility.sections]}
    />
  );
}

export default Infertility;
