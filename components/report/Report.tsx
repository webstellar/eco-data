"use client";

import { Industry } from "@/types/Industry";

interface pageProps {
  data: Industry;
}

const Report: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-start justify-start p-6 lg:px-4 mb-5 gap-y-10">
      <div className="font-bold">
        <h2 className="text-left text-3xl md:text-5xl">Interactive Report.</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.dataVisuals }} />
    </div>
  );
};

export default Report;
