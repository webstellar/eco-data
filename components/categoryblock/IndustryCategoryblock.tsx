"use client";
import { Category } from "@/types/Category";
import Link from "next/link";

interface categoryProps {
  data: Category;
}

const IndustryCategoryblock: React.FC<categoryProps> = ({ data }) => {
  return (
    <>
      {data && (
        <button
          key={data._id}
          className="text-left py-2 px-6 rounded-lg bg-gray-200 "
        >
          <Link href={`/category/${data.slug.current}`}>{data.name}</Link>
        </button>
      )}
    </>
  );
};

export default IndustryCategoryblock;
