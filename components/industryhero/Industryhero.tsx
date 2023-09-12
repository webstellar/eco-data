"use client";

import { Industry } from "@/types/Industry";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface pageProps {
  data: Industry;
}

const Industryhero: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-start p-6 lg:px-4 mb-10">
      <div className="mx-auto grid grid-cols-2 justify-between items-center gap-x-10 gap-y-5">
        <div className="order-2 md:order-1 col-span-full md:col-span-1 flex flex-col mx-auto text-left gap-y-5">
          <div className="font-bold">
            <h1 className="text-3xl md:text-5xl">{data.name}.</h1>
          </div>

          {data.category &&
            data?.category.map((item, i) => (
              <div
                key={i}
                className="text-eco-green-100 font-semibold text-sm capitalize"
              >
                {item.name}
              </div>
            ))}

          <div className="text-gray-900 font-normal">
            <PortableText value={data.content} />
          </div>
          <div className="w-full text-left">
            <button className="rounded-full bg-eco-green-100 px-5 md:px-10 py-2 text-gray-200 font-light text-base">
              <Link href="#form">Download Report</Link>
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-full md:col-span-1 w-full flex justify-end items-stretch h-full">
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={600}
            className="rounded-3xl grow"
          />
        </div>
      </div>
    </div>
  );
};

export default Industryhero;
