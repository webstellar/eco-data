"use client";

import React, { useState, FormEvent } from "react";

import { BsSearch } from "react-icons/bs";
import Categoryblock from "../categoryblock/Categoryblock";

const Homesearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/search", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  /*   const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };
 */
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
      <div className="max-w-5xl mx-auto mb-10">
        <div className="pt-2 relative mx-auto max-w-6xl text-gray-600 flex justify-center items-center">
          <form onSubmit={onSubmit}>
            <input
              className="w-full md:w-[650px] py-6 border-gray-300 bg-gray-200 h-10 px-5 pl-16 rounded-full focus:outline-none font-light text-base"
              type="search"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for data on specific industry"
            />
            <button
              title="submit"
              type="submit"
              className="absolute left-0 top-0 mt-6 ml-4"
            >
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      <Categoryblock />

      <div>
        <ul>
          {results
            ? results.map((result) => <li key={result._id}>{result.title}</li>)
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Homesearch;

//this is the frontend form
//obivously it should be "use client"
//sadly when I add it, I can't run the search
