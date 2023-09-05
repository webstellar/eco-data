import { getPublication } from "@/sanity/sanity-utils";
import publication from "../../../../sanity/schemas/publication-schema";

type Props = {
  params: { publication: string };
};

export default async function page({ params }: Props) {
  const slug = params.publication;
  const publication = await getPublication(slug);

  return <div></div>;
}
