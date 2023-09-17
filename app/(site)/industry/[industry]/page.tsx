import Industryhero from "@/components/industryhero/Industryhero";
import Report from "@/components/report/Report";
import Keypoint from "@/components/keypoint/Keypoint";

import { getIndustry } from "@/sanity/sanity-utils";
import Industryform from "@/components/industryform/Industryform";
import Infographics from "@/components/infographics/Infographics";

type Props = {
  params: { industry: string };
};

export default async function page({ params }: Props) {
  const slug = params.industry;
  const industry = await getIndustry(slug);

  return (
    <div>
      <Industryhero data={industry} />
      {industry?.infographics && <Infographics data={industry} />}
      {industry?.report && <Report data={industry} />}
      {industry?.highlight && <Keypoint data={industry} />}
      <Industryform />
    </div>
  );
}
