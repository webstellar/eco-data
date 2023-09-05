import { getPage } from "@/sanity/sanity-utils";

import Pagehero from "@/components/pagehero/Pagehero";
import Benefits from "@/components/benefits/Benefits";
import Team from "@/components/team/Team";
import Contactform from "@/components/form/Contactform";

type Props = {
  params: { page: string };
};

export default async function page({ params }: Props) {
  const slug = params.page;
  const page = await getPage(slug);

  return (
    <div>
      <Pagehero data={page} />
      {page.slug == "contact-us" && <Contactform />}
      {page.slug !== "contact-us" && <Benefits />}
      {page.slug == "about-us" && <Team data={page} />}
    </div>
  );
}
