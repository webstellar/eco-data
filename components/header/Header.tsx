"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Popover } from "@headlessui/react";
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";

import { BiSolidHome } from "react-icons/bi";
import { usePathname } from "next/navigation";

import Logo from "../../public/eco-data.png";

interface linkProps {
  id?: number;
  title?: string | any;
  url?: string;
}

const links: linkProps[] = [
  {
    id: 1,
    title: <BiSolidHome />,
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "about-us",
  },
  {
    id: 3,
    title: "Taxation",
    url: "taxation",
  },
  {
    id: 4,
    title: "Stock",
    url: "stock-market",
  },
  {
    id: 5,
    title: "Budget",
    url: "annual-budget",
  },
  {
    id: 6,
    title: "Country",
    url: "country",
  },
  {
    id: 7,
    title: "Foreign Exchange",
    url: "foreign-exchange",
  },
  {
    id: 8,
    title: "Industries",
    url: "industries",
  },
  {
    id: 9,
    title: "Publications",
    url: "publications",
  },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const href = "/";

  return (
    <header className="bg-transparent mb-10 relative z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-4"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Eco DataPlace</span>
            <Image className="h-16 w-auto" src={Logo} alt="ecodata-logo" />
          </Link>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
            style={{
              color: pathname === href ? "#ffffff" : "#000000",
            }}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3CenterLeft className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation and Button*/}
        <div className="hidden lg:flex lg:justify-end items-center gap-x-5">
          <Popover.Group className="hidden lg:flex lg:gap-x-5 items-center justify-center">
            {links &&
              links.map((link) => (
                <Link
                  href={`/${link.url}`}
                  className="text-base font-normal leading-6 hover:text-eco-blue-100 active:text-eco-blue-100 active:font-bold hover:font-semibold"
                  key={link.id}
                  style={{
                    color: pathname === href ? "#ffffff" : "#000000",
                  }}
                >
                  {link.title}
                </Link>
              ))}
          </Popover.Group>

          <button className="bg-eco-blue-100 py-2 px-5 rounded-2xl">
            <Link
              href="/contact-us"
              className="text-base font-normal leading-6 text-gray-50"
            >
              Contact Us
            </Link>
          </button>

          <button className="bg-green-600 py-2 px-5 rounded-2xl">
            <Link
              href="/donate"
              className="text-base font-normal leading-6 text-gray-50"
            >
              Donate
            </Link>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Expand</span>
              <Image className="h-8 w-auto" src={Logo} alt="ecodata-logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links &&
                  links.map((link) => (
                    <Link
                      key={link.id}
                      href={`/${link.url}`}
                      className="-mx-3 block px-3 py-2 text-base font-normal leading-5 text-gray-900 hover:bg-gray-100 hover:font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact-us"
                  className="-mx-3 block px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/donate"
                  className="-mx-3 block px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
