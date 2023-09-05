import Industryhero from "@/components/industryhero/Industryhero";
import Report from "@/components/report/Report";
import Keypoint from "@/components/keypoint/Keypoint";

import { getIndustry } from "@/sanity/sanity-utils";

type Props = {
  params: { industry: string };
};

export default async function page({ params }: Props) {
  const slug = params.industry;
  const industry = await getIndustry(slug);

  return (
    <div>
      <Industryhero data={industry} />
      <Report data={industry} />
      <Keypoint data={industry} />
    </div>
  );
}
