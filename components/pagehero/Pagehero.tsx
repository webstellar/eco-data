"use client";

import { Page } from "@/types/Page";

import { PortableText } from "@portabletext/react";

interface pageProps {
  data: Page;
}

const Pagehero: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center p-6 lg:px-4 mb-5">
      <div
        className="lg:w-6/12"
        style={{ marginBottom: `${data.excerpt}` ? "2.5rem" : "0rem" }}
      >
        <h1 className="text-center font-bold text-5xl md:text-7xl text-slate-900 md:leading-normal">
          {data.name}.
        </h1>

        {data.excerpt && (
          <p className="text-center font-normal text-base text-slate-900">
            {data.excerpt}
          </p>
        )}
      </div>
      {data.content && (
        <div
          className="mx-auto max-w-7xl flex flex-col h-auto md:h-[500px] items-center justify-center p-6 lg:px-4 rounded-2xl mb-20"
          style={{
            backgroundColor: `${data.color}` ? `${data.color}` : "#E5E7EB",
          }}
        >
          <div
            className="lg:w-10/12 text-center font-normal text-base md:text-lg mb-10"
            style={{
              color: `${data.textcolor}` ? `${data.textcolor}` : "#00000070",
            }}
          >
            <PortableText value={data.content} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagehero;
