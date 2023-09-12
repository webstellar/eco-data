import { getBenefits } from "@/sanity/sanity-utils";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const Benefits = async () => {
  const benefits = await getBenefits();

  return (
    <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="md:col-span-2 flex flex-col space-y-7 items-center justify-center">
        <h2 className="font-bold text-4xl md:text-5xl text-left text-slate-900 md:leading-normal">
          Here&apos;s how data can grow your business.
        </h2>
        <p className="text-left text-base text-slate-900">
          We focus on on utilizing data analytics techniques to provide
          insights, trends, and information related to taxation and financial
          matters. We aims to help individuals, businesses, and government
          entities make informed decisions by analyzing tax-related data and
          presenting it in a clear and actionable format.
        </p>

        <div className="w-full">
          <button className="bg-eco-blue-100 rounded-full py-2 px-5 text-slate-100">
            <Link href="/contact-us">Learn more</Link>
          </button>
        </div>
      </div>

      <div className="md:col-span-3 w-full grid md:grid-cols-2 gap-x-10 gap-y-5">
        {benefits &&
          benefits.map((benefit) => (
            <div
              key={benefit._id}
              className="bg-gray-200 p-6 px-10 rounded-3xl flex flex-col gap-5 items-start justify-start"
            >
              <div>
                <Image
                  src={benefit.icon}
                  alt={benefit.name}
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-xl font-semibold">{benefit.name}</div>
              <div>
                <PortableText value={benefit.content} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Benefits;
