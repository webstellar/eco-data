"use client";

import Link from "next/link";
import Image from "next/image";
import PeterLogo from "../../public/whitepeteronyegbule.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-blue-100 py-4">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-center p-6 lg:px-4"
        aria-label="Global"
      >
        <div className="text-center text-neutral-200 flex flex-wrap items-center justify-center">
          © {new Date().getFullYear()} &middot; Eco-Data. All Rights Reserved.
          Built by
          <Link
            href="https://www.peteronyegbule.ng"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={PeterLogo}
              alt="Peter-Onyegbule"
              className="ml-1 h-4 w-8"
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
