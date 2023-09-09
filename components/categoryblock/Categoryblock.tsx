import { getCategories } from "@/sanity/sanity-utils";
import Link from "next/link";

const Categoryblock: React.FC = async () => {
  const categories = await getCategories();

  return (
    <div className="mx-auto w-full grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-between">
      {categories.map((category) => (
        <button
          key={category._id}
          className="text-left py-2 pl-4 rounded-lg bg-gray-200 "
        >
          <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </button>
      ))}
    </div>
  );
};

export default Categoryblock;
