"use client";

import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types/Category";

import { HiChevronRight } from "react-icons/hi2";

interface categoryProps {
  data: Category;
}

const Categorycard: React.FC<categoryProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-5 mx-auto justify-between items-stretch">
        {data.industries &&
          data.industries.map((category) => (
            <div
              key={category._id}
              className="rounded-3xl bg-slate-200 flex flex-col pb-5"
            >
              <Image
                className="w-full rounded-t-3xl"
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
              />
              <div className="text-left p-4 grid grid-cols-1 items-start justify-start text-slate-900 gap-y-5">
                <h3 className="font-normal uppercase">{category.name}</h3>
                <button className="font-semibold text-base">
                  <Link
                    href={`/industry/${category.slug}`}
                    className="flex items-center"
                  >
                    <div className="mr-3">View report</div>
                    <div>
                      <HiChevronRight />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categorycard;
