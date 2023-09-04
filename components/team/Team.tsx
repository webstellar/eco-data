"use client";

import { Page } from "@/types/Page";
import Image from "next/image";

interface pageProps {
  data: Page;
}

const Team: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center p-6 lg:px-4 mb-5">
      <div className="lg:w-6/12 mb-10">
        <h2 className="text-center font-bold text-5xl md:text-7xl text-slate-900 md:leading-normal">
          Meet the Team.
        </h2>
      </div>

      <div className="w-full grid md:grid-cols-4 gap-x-4 gap-y-8 items-center justify-between mx-auto">
        {data.team.map((member, i) => (
          <div
            key={i}
            className="mx-auto col-span-1 grid grid-cols-1 gap-y-3 items-center justify-center"
          >
            <div className="h-[200px] w-[200px]">
              <Image
                src={member.profile}
                alt={member.teamName}
                height={200}
                width={400}
                className="rounded-full object-cover h-[200px] w-full"
              />
            </div>
            <div className="font-semibold text-base md:text-lg uppercase text-center">
              {member.teamName}
            </div>
            <div className="font-normal text-base text-center italic">
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
