import { getPage } from "@/sanity/sanity-utils";

import Pagehero from "@/components/pagehero/Pagehero";
import Benefits from "@/components/benefits/Benefits";

type Props = {
  params: { page: string };
};

export default async function page({ params }: Props) {
  const slug = params.page;
  const page = await getPage(slug);

  return (
    <div>
      <Pagehero data={page} />
      <Benefits />
    </div>
  );
}
