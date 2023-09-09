"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendIndustryForm } from "@/utils/api";

type valueProps = {
  [key: string]: string;
};

const initState: valueProps = {
  firstname: "",
  lastname: "",
  email: "",
  organization: "",
  industry: "",
  message: "",
};

const Industryform: React.FC = () => {
  const [state, setState] = useState(initState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(JSON.stringify(state));
    try {
      await sendIndustryForm(state);
      toast("Your details was sent", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
        <div className="font-bold mb-10">
          <h2 className="text-3xl md:text-5xl">Sign up to download report.</h2>
        </div>
        <div className="md:w-3/5 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">
              <div className="grid">
                <label htmlFor="firstname" className="mb-4">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={state.firstname}
                  onChange={handleChange}
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid">
                <label htmlFor="lastname" className="mb-4">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={state.lastname}
                  onChange={handleChange}
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>

              <div className="grid">
                <label htmlFor="email" className="mb-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid">
                <label htmlFor="organization" className="mb-4">
                  Organization (optional)
                </label>
                <input
                  type="text"
                  name="organization"
                  value={state.organization}
                  onChange={handleChange}
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid col-span-full gap-y-2">
                <label htmlFor="industry" className="mb-4">
                  Industry
                </label>
                <select
                  data-te-select-init
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                  name="industry"
                  value={state.industry}
                  onChange={handleChange}
                >
                  <option value="food">Food</option>
                  <option value="construction">Construction</option>
                  <option value="transportation">Transportation</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="agriculutr">agriculture</option>
                  <option value="mining">Mining</option>
                  <option value="healthcare">Health care</option>
                  <option value="petroleum">Petroleum</option>
                  <option value="retail">Retail</option>
                  <option value="energy">Energy</option>
                  <option value="forestry">Forestry</option>
                  <option value="automotive">Automotive</option>
                  <option value="financial">Financial</option>
                  <option value="business">Business</option>
                  <option value="pharmaceutics">Pharmaceutics</option>
                </select>
              </div>
              <div className="grid col-span-full gap-y-2">
                <label htmlFor="message" className="mb-4">
                  Message
                </label>
                <textarea
                  rows={8}
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  className="border-gray-800 border-2 focus:outline-none w-full px-2 py-2"
                />
              </div>

              <div className="grid col-span-1 gap-y-2">
                <button
                  className="bg-eco-blue-100 text-gray-100 px-8 py-2 "
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Industryform;
