import { getIndustry } from "@/sanity/sanity-utils";

type Props = {
  params: { industry: string };
};

export default async function page({ params }: Props) {
  const slug = params.industry;
  const industry = await getIndustry(slug);

  return <div></div>;
}
