import React from "react";

const Skeletionhero = () => {
  return (
    <div className="-mt-36 mb-20">
      <div className="bg-slate-200 max-w-full mx-auto flex items-center justify-center relative h-[500px] md:h-[700px]">
        <div className="absolute top-2/4 bottom-2/4 lg:right-1/4 lg:left-1/4 mx-auto max-w-7xl flex flex-col items-center justify-center p-6 lg:px-4 px-14 animate-pulse">
          <div className="mb-10 bg-slate-300 h-48 rounded-lg lg:w-12/12 text-center font-bold text-5xl md:text-6xl text-slate-300 md:leading-normal">
            Loading Eco Data Analysis Data
          </div>
          <div className="rounded-lg lg:w-10/12 mb-4 bg-slate-300 text-center text-slate-300 max-h-8 h-20">
            Loading...
          </div>
          <div className="rounded-lg lg:w-8/12 mb-4 bg-slate-300 text-center text-slate-300 max-h-8 h-20">
            Loading...
          </div>
          <div className="rounded-lg lg:w-6/12 mb-10 bg-slate-300 text-center text-slate-300 max-h-8 h-20">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeletionhero;
