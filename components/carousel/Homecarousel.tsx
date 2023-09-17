"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Loader from "../loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

type Universal = {
  [key: string]: string;
};

type Page = {
  carousel: Universal[];
};

const Homecarousel: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [results, setResults] = useState<Page[]>([]);

  useEffect(() => {
    const getFacts = async () => {
      const response = await fetch("/api/page");
      const data = await response.json();
      setResults(data);
      setIsLoading(false);
    };

    getFacts();
  }, []);

  return (
    <div className="-mt-36 mb-20">
      {isLoading ? (
        <div className="mx-auto flex flex-1 items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-full mx-auto flex items-center justify-center relative">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
          >
            {results &&
              results[0]?.carousel.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image
                    alt={item?.title}
                    src={item?.carousel}
                    width={2400}
                    height={1600}
                    className="block w-full object-cover h-[500px] md:h-[760px]"
                  />

                  <div className="absolute top-2/4 bottom-2/4  lg:right-1/4 lg:left-1/4 mx-auto max-w-7xl flex flex-col items-center justify-center p-6 lg:px-4 px-14">
                    <div className="mb-6">
                      <h1 className="text-center font-bold text-5xl md:text-6xl text-slate-100 md:leading-normal">
                        {item?.title}.
                      </h1>
                    </div>

                    <div className="lg:w-10/12 text-center font-normal text-base md:text-lg text-slate-100 mb-10">
                      {item?.description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Homecarousel;
