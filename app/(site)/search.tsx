"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import { HiChevronRight } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import IndustryCategoryblock from "@/components/categoryblock/IndustryCategoryblock";
import { Industry } from "@/types/Industry";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Industry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/search", {
        method: "POST",
      });
      const data = await response.json();

      setResults(data);
    };

    fetchData();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(`/api/search?query=${query}`, {
        method: "POST",
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="-mt-20 mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="max-w-5xl mx-auto mb-10">
        <div className="pt-2 relative mx-auto max-w-6xl text-gray-600 flex justify-center items-center">
          <form onSubmit={onSubmit}>
            <input
              className="w-full md:w-[650px] py-6 border-gray-300 bg-gray-200 h-10 px-5 pl-16 rounded-full focus:outline-none font-light text-base"
              type="search"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for data on specific industry"
            />
            <button type="submit" className="absolute left-0 top-0 mt-6 ml-4">
              <BsSearch />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 -mt-5">
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-5 mx-auto justify-between items-stretch">
          {results &&
            results.map((industry) => (
              <div
                key={industry._id}
                className="rounded-3xl bg-slate-200 flex flex-col pb-5 justify-start items-center"
              >
                <Image
                  className="w-full md:h-[180px] rounded-t-3xl object-cover"
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
    </div>
  );
};

export default Search;

//this is the frontend form
//obivously it should be "use client"
//sadly when I add it, I can't run the search
