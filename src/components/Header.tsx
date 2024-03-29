"use client";

import ThemeContext, { ThemeContextType } from "@/app/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { BsSuitcaseLg } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const { darkTheme, setDarkTheme }: ThemeContextType =
    useContext(ThemeContext);

  return (
    <header className="bg-primary text-white py-8 px-6 text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex mx-9 my-4 items-center w-full md:w-1/3 md:items-center justify-center">
        <BsSuitcaseLg />
        <Link
          href="/"
          className="font-black text-tertiary-light mx-4 md:align-center"
        >
          MP Second Jobs
        </Link>
        <ul className="flex items-center justify-center ml-5">
          <li className="ml-2">
            {darkTheme ? (
              <HiLightBulb
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("second-jobs-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("second-jobs-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-around w-full md:w-1/3 mt-4 mr-12">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/about" className="text-sm md:text-base lg:text-xl">
            About
          </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/mps" className="text-sm md:text-base lg:text-xl">
            MP List
          </Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/contact" className="text-sm md:text-base lg:text-xl">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
