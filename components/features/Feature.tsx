"use client";

import React from "react";
import { Page } from "@/types/Page";
import Image from "next/image";

import { Disclosure } from "@headlessui/react";

interface pageProps {
  data: Page;
}

const Feature: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="max-w-5xl mx-auto mb-5 md:mb-10">
        <h2 className="font-bold text-4xl md:text-5xl md:text-center text-slate-900 md:leading-relaxed">
          {data.feature}.
        </h2>
      </div>

      <div className="mx-auto grid md:grid-cols-2 gap-x-20 gap-y-8 items-center justify-between">
        <div className="col-span-1 grid md:grid-cols-2 gap-4 items-center justify-stretch">
          <div className="grid gap-4 h-700">
            <div className="h-full">
              <Image
                className="object-cover rounded-3xl md:rounded-l-3xl"
                src={data.featuredImageOne}
                alt={data.feature}
                width={450}
                height={900}
              />
            </div>
          </div>
          <div className="hidden md:grid gap-4 items-stretch justify-stretch object-fill">
            <div>
              <Image
                className="max-w-full rounded-r-3xl"
                src={data.featuredImageTwo}
                alt=""
                width={450}
                height={450}
              />
            </div>

            <div>
              <Image
                className="h-auto max-w-full rounded-r-3xl"
                src={data.featuredImageThree}
                alt=""
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 justify-stretch items-start gap-y-10">
          {data.features.map((feature, i) => (
            <div key={i}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button>
                      <div className="text-left flex gap-x-10 items-center justify-between font-medium text-xl text-slate-900 mb-5">
                        {feature.featureTitle}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      {feature.featureDescription}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}

          <Disclosure></Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Feature;
