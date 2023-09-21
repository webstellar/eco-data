"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Industry } from "@/types/Industry";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

//next-share
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

interface pageProps {
  data: Industry;
}

const Industryhero: React.FC<pageProps> = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentUrl = `https;//www.ecodataplace.com${pathname}?${searchParams}`;

  console.log(currentUrl);

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-start p-6 lg:px-4 mb-10">
      <div className="mx-auto grid grid-cols-2 justify-between items-center gap-x-10 gap-y-5">
        <div className="order-2 md:order-1 col-span-full md:col-span-1 flex flex-col mx-auto text-left gap-y-5">
          <div className="font-bold">
            <h1
              className="text-3xl md:text-5xl"
              style={{ lineHeight: "1.2em" }}
            >
              {data.name}.
            </h1>
          </div>

          {data.category &&
            data?.category.map((item, i) => (
              <div
                key={i}
                className="text-eco-green-100 font-semibold text-sm capitalize"
              >
                <Link href={`/category/${item.name.toLowerCase()}`}>
                  {item.name}
                </Link>
              </div>
            ))}

          <div className="text-gray-900 font-normal">
            <PortableText value={data.content} />
          </div>
          <div className="w-full text-left">
            <button className="rounded-full bg-eco-green-100 px-5 md:px-10 py-2 text-gray-200 font-light text-base">
              <Link href="#form">Download Report</Link>
            </button>
          </div>
          <div className="w-full text-left flex gap-x-2">
            <EmailShareButton
              url={currentUrl}
              subject={data.name}
              body={`${data.name} <br> ${data?.infographics} <br> ${data?.report}`}
            >
              <EmailIcon size={32} />
            </EmailShareButton>
            <FacebookShareButton
              url={currentUrl}
              quote={data.name}
              hashtag={"#ecodataplace"}
            >
              <FacebookIcon size={32} />
            </FacebookShareButton>

            <PinterestShareButton url={currentUrl} media={data.infographics}>
              <PinterestIcon size={32} />
            </PinterestShareButton>

            <TelegramShareButton url={currentUrl} title={data.name}>
              <TelegramIcon size={32} />
            </TelegramShareButton>

            <TwitterShareButton url={currentUrl} title={data.name}>
              <TwitterIcon size={32} />
            </TwitterShareButton>

            <LinkedinShareButton url={currentUrl}>
              <LinkedinIcon size={32} />
            </LinkedinShareButton>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-full md:col-span-1 w-full flex justify-end items-stretch h-full">
          <Image
            src={data.image}
            alt={data.name}
            width={1000}
            height={1200}
            className="rounded-3xl grow object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Industryhero;
