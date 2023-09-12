"use client";
import { Category } from "@/types/Category";

interface categoryProps {
  data: Category;
}

const Categoryhero: React.FC<categoryProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center p-6 lg:px-4 mb-5">
      <div className="lg:w-6/12">
        <h1 className="text-center font-bold text-5xl md:text-7xl text-slate-900 md:leading-normal">
          {data?.name}.
        </h1>
      </div>
    </div>
  );
};

export default Categoryhero;
