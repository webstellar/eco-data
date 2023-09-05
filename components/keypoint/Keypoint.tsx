"use client";

import { Industry } from "@/types/Industry";

interface pageProps {
  data: Industry;
}

const Keypoint: React.FC<pageProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-start p-6 lg:px-4 mb-5">
      <div className="font-bold">
        <h2 className="text-3xl md:text-5xl">Keypoint.</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        {data.highlight.map((key) => (
          <div key={key._id} className="text-gray-900 text-base py-2 px-4">
            {key.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keypoint;
