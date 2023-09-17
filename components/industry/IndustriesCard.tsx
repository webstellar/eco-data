import Link from "next/link";
import Image from "next/image";
import { Industry } from "@/types/Industry";

import { HiChevronRight } from "react-icons/hi2";

interface industryProps {
  data: Industry;
}

const Industriescard: React.FC<industryProps> = ({ data }) => {
  return (
    <div
      key={data._id}
      className="rounded-xl bg-slate-200 flex flex-col pb-4 justify-start items-center"
    >
      <Link href={`/industry/${data.slug}`}>
        <Image
          className="w-full md:h-[200px] rounded-t-xl object-cover"
          src={data.image}
          alt={data.name}
          width={600}
          height={600}
        />
        <div className="text-left p-4 grid grid-cols-1 items-end justify-end text-slate-900 gap-y-5">
          <h3 className="font-normal uppercase text-base">{data.name}</h3>
          <button className="font-semibold text-base flex items-center">
            <div className="mr-3">View report</div>
            <div>
              <HiChevronRight />
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Industriescard;
