import { getCategory } from "@/sanity/sanity-utils";
import Categoryhero from "@/components/categoryhero/Categoryhero";
import Industrycard from "@/components/industry/Industrycard";
import Categorycard from "@/components/category/CategoryCard";

type Props = {
  params: { category: string };
};

export default async function page({ params }: Props) {
  const slug = params.category;
  const category = await getCategory(slug);

  return (
    <div>
      <Categoryhero data={category} />
      <Categorycard data={category} />
    </div>
  );
}
