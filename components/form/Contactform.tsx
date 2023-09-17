"use client";

import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { verifyCaptchaAction, sendContactForm } from "@/utils/api";

import { useReCaptcha } from "next-recaptcha-v3";

import { ImSpinner2 } from "react-icons/im";

type valueProps = {
  [key: string]: string;
};

const initState: valueProps = {
  firstname: "",
  lastname: "",
  email: "",
  organization: "",
  message: "",
};

const Contactform: React.FC = () => {
  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

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

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // console.log(JSON.stringify(state));

      setLoading(true);
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("contactform_submit");
      const verified = await verifyCaptchaAction(token);

      if (verified) {
        try {
          await sendContactForm(state);
          toast("Your details was sent", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });
          setState(initState);
          setLoading(false);
        } catch (error) {
          setState((prev) => ({
            ...prev,
          }));
        }
      }
    },
    [executeRecaptcha, state]
  );

  return (
    <div>
      <div className="mx-auto max-w-7xl flex flex-col gap-x-20 gap-y-8 items-center justify-between p-6 lg:px-4 mb-20">
        <div className="font-bold mb-10">
          <h2 className="text-3xl md:text-5xl">Let&apos;s work together.</h2>
        </div>
        <div className="md:w-4/5 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">
              <div className="grid">
                <label htmlFor="firstname" className="mb-4">
                  First Name
                </label>
                <input
                  required
                  title="firstname"
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
                  required
                  title="lastname"
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
                  required
                  title="email"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid">
                <label htmlFor="organization" className="mb-4">
                  Organization (optional)
                </label>
                <input
                  required
                  title="organization"
                  type="text"
                  name="organization"
                  value={state.organization}
                  onChange={handleChange}
                  className="border-gray-800 border-b-2 border-x-2 focus:outline-none w-full px-2 py-1"
                />
              </div>
              <div className="grid col-span-full gap-y-2">
                <label htmlFor="message" className="mb-4">
                  Message
                </label>
                <textarea
                  required
                  title="message"
                  rows={8}
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  className="border-gray-800 border-2 focus:outline-none w-full px-2 py-2"
                />
              </div>

              <div className="grid col-span-1 gap-y-2 w-2/4">
                <button
                  className="bg-eco-blue-100 text-gray-100 px-8 py-2 flex gap-x-3 items-center justify-center"
                  type="submit"
                >
                  {loading ? (
                    <>
                      <div>
                        <ImSpinner2 className="animate-spin" />
                      </div>
                      <div className="mr-3">Sending..</div>
                    </>
                  ) : (
                    <span>Send</span>
                  )}
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

export default Contactform;
