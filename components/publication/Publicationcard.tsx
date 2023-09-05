import { getPublications } from "@/sanity/sanity-utils";

import Link from "next/link";
import Image from "next/image";

import { HiChevronRight } from "react-icons/hi2";

const Publicationcard = async () => {
  const publications = await getPublications();

  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="grid grid-cols-4 mx-auto justify-start">
        {publications.map((publication) => (
          <div
            key={publication._id}
            className="rounded-3xl bg-slate-200 flex flex-col pb-5"
          >
            <Image
              className="w-full rounded-t-3xl"
              src={publication.image}
              alt={publication.name}
              width={300}
              height={300}
            />
            <div className="text-left p-4 grid grid-cols-1 items-start justify-start text-slate-900 gap-y-5">
              <h3 className="font-normal uppercase">{publication.name}</h3>
              <button className="font-semibold text-base">
                <Link
                  href={`/publication/${publication.slug}`}
                  className="flex items-center"
                >
                  <div className="mr-3">View publication</div>
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

export default Publicationcard;
