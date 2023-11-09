"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../../data/navbar";
import WarClock from "./WarClock";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 900);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full  z-10 bg-white shadow-md">
      <div className="w-11/12 mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img
              className="h-8 w-auto sm:h-10"
              src="/blue-yellow-logo.png"
              alt="BlueYellowFoundation logo"
            />
          </Link>

          <WarClock />
          <div className="hidden md:flex space-x-6">
            {navLinks.map((navlink, index) => (
              <Link
                key={index}
                href={navlink.href}
                className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {navlink.title}
              </Link>
            ))}
            {!isMobile && (
              <Link
                href="/donate"
                className="text-gray-800 px-4 py-2 rounded-full text-md font-bold transition-colors duration-200 bg-[#FEDB25]"
              >
                Donate Now
              </Link>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((navlink, index) => (
              <Link
                key={index}
                href={navlink.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {navlink.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
