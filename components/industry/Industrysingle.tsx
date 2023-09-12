import Link from "next/link";
import Image from "next/image";

import { Industry } from "@/types/Industry";

import { HiChevronRight } from "react-icons/hi2";

const Industrysingle = ({ data = [] }: { data: Industry[] }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="grid grid-cols-4 mx-auto justify-start">
        {data &&
          data.map((industry) => (
            <div
              key={industry._id}
              className="rounded-3xl bg-slate-200 flex flex-col pb-5"
            >
              <Image
                className="w-full rounded-t-3xl"
                src={industry.image}
                alt={industry.name}
                width={300}
                height={300}
              />
              <div className="text-left p-4 grid grid-cols-1 items-start justify-start text-slate-900 gap-y-5">
                <h3 className="font-normal uppercase">{industry.name}</h3>
                <button className="font-semibold text-base">
                  <Link
                    href={`/industry/${industry.slug}`}
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

export default Industrysingle;
