import { Metadata } from "next";
import { getPublication } from "@/sanity/sanity-utils";

type Props = {
  params: { publication: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.publication;
  const publication = await getPublication(slug);
  return {
    title: `${publication.name}`,
  };
};

export default async function page({ params }: Props) {
  const slug = params.publication;
  const publication = await getPublication(slug);

  return <div></div>;
}
