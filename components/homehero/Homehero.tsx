"use client";

import { Page } from "@/types/Page";

import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface pageProps {
  data: Page;
}

const Homehero: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col h-[600px] items-center justify-center p-6 lg:px-4 bg-slate-200 rounded-2xl mb-20">
      <div className="lg:w-6/12 mb-6">
        <h1 className="text-center font-bold text-5xl md:text-6xl text-slate-900 md:leading-normal">
          {data?.excerpt}.
        </h1>
      </div>

      <div className="lg:w-10/12 text-center font-normal text-base md:text-lg text-slate-900 mb-10">
        <PortableText value={data?.content} />
      </div>

      <div className="text-center">
        <button className="bg-eco-green-100 rounded-full py-2 px-5 text-slate-100">
          <Link href="/contact-us">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Homehero;
