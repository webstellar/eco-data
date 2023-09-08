import { getCategories } from "@/sanity/sanity-utils";

import React from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Homesearch: React.FC = async () => {
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="max-w-5xl mx-auto mb-10">
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="w-[650px] py-6 border-gray-300 bg-gray-200 h-10 px-5 pl-16 rounded-full focus:outline-none font-light text-base"
            type="search"
            name="search"
            placeholder="Search for data on specific industry"
          />
          <button type="submit" className="absolute left-0 top-0 mt-6 ml-4">
            <BsSearch />
          </button>
        </div>
      </div>

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
    </div>
  );
};

export default Homesearch;
