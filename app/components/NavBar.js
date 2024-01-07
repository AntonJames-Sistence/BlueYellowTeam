"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../../data/navbar";
import { usePathname } from "next/navigation";
import WarClock from "./WarClock";
import Image from "next/image";
import logo from "../../public/blue-yellow-logo.png"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
      <div className="w-11/12 mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Blue&YellowFoundation logo"
            className="w-full h-auto"
          />
        </Link>
        <div className="max-[500px]:hidden">
          <WarClock />
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex space-x-1 lg:space-x-5">
            {navLinks.map((navlink, index) => (
              <Link
                key={index}
                href={navlink.href}
                className={` hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  path === navlink.href ? "text-blue-600 mt-1" : "text-gray-800"
                }`}
              >
                {navlink.title}
              </Link>
            ))}
          </div>

          <Link
            href="/donate"
            className={`text-gray-800 mr-3 px-4 py-2 rounded-full text-sm md:text-base font-bold transition-colors duration-200 bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-blue-500 ${
              path === "/donate" ? "ring-purple-500" : "ring-yellow-300"
            }`}
          >
            Donate Now
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <motion.div animate={isOpen ? "open" : "closed"} className="relative">
        <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col rounded-b-lg bg-white shadow-xl absolute w-2/5 right-[-15%] md:right-[-10%] md:w-[25%] overflow-hidden"
          >
            {navLinks.map((navlink, index) => (
              <Option
                key={index}
                href={navlink.href}
                title={navlink.title}  
                icon={navlink.icon}
              />
              ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
}

const Option = ({ title, href, icon }) => {
  return (
    <motion.li
      variants={itemVariants}
      className="flex justify-left w-full text-xs font-medium whitespace-nowrap last:rounded-b-lg hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className="flex flex-row text-gray-800 hover:text-blue-600 px-3 py-2 text-base md:text-[17px] font-normal md:font-semibold transition-colors duration-200"
      >
        <span className="self-center mr-4">
          {icon}
        </span>
        {title}
      </Link>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -25,
    transition: {
      when: "afterChildren",
    },
  },
};