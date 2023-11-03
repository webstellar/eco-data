import { Metadata } from "next";

import { getPage } from "@/sanity/sanity-utils";

import Pagehero from "@/components/pagehero/Pagehero";
import Team from "@/components/team/Team";
import Contactform from "@/components/form/Contactform";
import Publicationcard from "@/components/publication/Publicationcard";
import Search from "../search";
import ReportPage from "@/components/reportPage/reportPage";

type Props = {
  params: { page: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.page;
  const page = await getPage(slug);
  return {
    title: `${page.name}`,
  };
};

export default async function page({ params }: Props) {
  const slug = params.page;
  const page = await getPage(slug);

  return (
    <div>
      <Pagehero data={page} />
      <ReportPage data={page} />
      {page.slug == "contact-us" && <Contactform />}
      {page.slug == "about-us" && <Team data={page} />}
      {page.slug == "industries" && <Search />}
      {page.slug == "publications" && <Publicationcard />}
    </div>
  );
}
