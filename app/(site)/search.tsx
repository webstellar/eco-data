"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { BsSearch } from "react-icons/bs";
import Loader from "@/components/loader/Loader";
import IndustryCategoryblock from "@/components/categoryblock/IndustryCategoryblock";
import Industriescard from "@/components/industry/IndustriesCard";
import { Industry } from "@/types/Industry";

type Universal = {
  [key: string]: string;
};

type Category = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  industries: Universal[];
};

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Industry[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (results) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [results]);

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

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("/api/category", {
        method: "GET",
      });
      const data = await response.json();

      setCategory(data);
    };

    fetchCategory();
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

  //let skeletonCards = Array(5).fill(0);

  return (
    <div className="-mt-20 mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-10">
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

      <div className="mx-auto w-full grid grid-cols-2 md:grid-cols-5 gap-6 justify-between items-stretch">
        {category &&
          category.map((item) => (
            <IndustryCategoryblock key={item._id} data={item} />
          ))}
      </div>

      <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 -mt-5">
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mx-auto justify-between items-stretch">
            {results &&
              results.map((industry) => (
                <Industriescard key={industry._id} data={industry} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

//this is the frontend form
//obivously it should be "use client"
//sadly when I add it, I can't run the search
