"use client";

import { Industry } from "@/types/Industry";
import Image from "next/image";

interface industryProps {
  data: Industry;
}

const Infographics: React.FC<industryProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-start justify-start p-6 lg:px-4 mb-5 gap-y-10">
      <div className="font-bold">
        <h2 className="text-left text-3xl md:text-5xl">Infographics.</h2>
      </div>
      <div>
        <Image
          src={data.infographics}
          alt={data.name}
          width={500}
          height={900}
          className="w-full object-cover h-[500px]"
        />
      </div>
    </div>
  );
};

export default Infographics;
