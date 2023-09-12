"use client";

import { Page } from "@/types/Page";
import Link from "next/link";
import Image from "next/image";

interface pageProps {
  data: Page;
}

const Benefit: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="md:col-span-2 flex flex-col space-y-7 items-center justify-center">
        <h2 className="font-bold text-4xl md:text-5xl text-left text-slate-900 md:leading-normal">
          {data?.benefit}.
        </h2>
        <p className="text-left text-base text-slate-900">
          {data?.benefitDescription}
        </p>

        <div className="w-full">
          <button className="bg-eco-blue-100 rounded-full py-2 px-5 text-slate-100">
            <Link href="/contact-us">Learn more</Link>
          </button>
        </div>
      </div>

      <div className="md:col-span-3 w-full grid md:grid-cols-2 gap-x-10 gap-y-5">
        {data?.benefits.map((benefit, i) => (
          <div
            key={i}
            className="bg-gray-200 p-6 px-10 rounded-3xl flex flex-col gap-5 items-start justify-start"
          >
            <div>
              <Image
                src={benefit?.icon}
                alt={benefit?.benefitName}
                width={50}
                height={50}
              />
            </div>
            <div className="text-xl font-semibold">{benefit?.benefitName}</div>
            <div>{benefit?.benefitdescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
