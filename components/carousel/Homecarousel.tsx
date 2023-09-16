"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Loader from "../loader/Loader";
import SwiperContainer from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

type Universal = {
  [key: string]: string;
};

type Page = { carousel: Universal[] };

const Homecarousel: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [results, setResults] = useState<Page[]>([]);

  useEffect(() => {
    const getFacts = async () => {
      const res = await fetch("/api/page", {
        method: "GET",
      });

      const data = await res.json();
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
        <div className="max-w-full mx-auto flex">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
          >
            {results[0].carousel.map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  alt="..."
                  src={item.carousel}
                  width={1920}
                  height={1280}
                  className="block w-full object-cover h-[400px] md:h-[600px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Homecarousel;
