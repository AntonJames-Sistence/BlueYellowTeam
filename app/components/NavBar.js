"use client";

import React from "react";
import Link from "next/link";
import WarClock from "./WarClock.jsx";
// import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  // const { data: session } = useSession();
  return (
    <nav
      id="Nav"
      className="fixed flex w-full
                bg-blue-300 
                justify-between 
                items-center 
                p-4
                text-lg 
                mt-8 
                left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <Link href="/">
        <img
          className="w-24 h-auto  hover:cursor-pointer hover:opacity-80"
          src="/blue-yellow-logo.png"
          alt="BlueYellowFoundation logo"
        />
      </Link>

      <div className="flex">
        <Link
          href="/"
          className="hover:text-blue-600 
                      hover:scale-125 
                      hover:cursor-pointer 
                      ease-in-out duration-300
                      font-bold
                      mr-6 rounded-xl p-1"
        >
          Home
        </Link>
        <Link
          href="/donate"
          className="hover:text-blue-600 
                      hover:scale-125 
                      hover:cursor-pointer 
                      ease-in-out duration-300
                      font-bold
                      mr-6 rounded-xl p-1"
        >
          Donate
        </Link>
        <Link
          href="#EventsAndProjects"
          className="hover:text-blue-600 
                      hover:scale-125 
                      hover:cursor-pointer 
                      ease-in-out duration-300
                      font-bold
                      mr-6 rounded-xl p-1"
        >
          Events & Projects
        </Link>
        <Link
          href="#Causes"
          className="hover:text-blue-600 
                      hover:scale-125 
                      hover:cursor-pointer 
                      ease-in-out duration-300
                      font-bold
                      mr-6 rounded-xl p-1"
        >
          Causes
        </Link>
        <Link
          href="#Team"
          className="hover:text-blue-600 
                      hover:scale-125 
                      hover:cursor-pointer 
                      ease-in-out duration-300
                      font-bold
                      mr-6 rounded-xl p-1"
        >
          Team
        </Link>
        <Link
          href="#Contacts"
          className="hover:text-blue-600 
                      hover:scale-125 
                      hover:cursor-pointer 
                      ease-in-out duration-300
                      font-bold
                     rounded-xl p-1"
        >
          Contacts
        </Link>
      </div>

      <WarClock />

      <Link href="/donate">
        <button
          className="flex h-10 w-36
                        bg-gradient-to-b
                        from-blue-400 to-yellow-400
                        text-black text-l
                        hover:text-blue-600 
                        font-bold
                        shadow-md
                        rounded-2xl
                        items-center
                        justify-center
                        ease-in-out duration-300
                        self-center"
        >
          Donate Now
        </button>
      </Link>

      {/* {!"session" ? (
        <div onClick={() => "idk"} className="cursor-pointer">
          logout
        </div>
        ) : (
          <div className="flex">
            <div className="cursor-pointer" onClick={() => "idk"}>
              Login
            </div>
            <div>&nbsp;/&nbsp;</div>
            <div className="cursor-pointer">SignUp</div>
          </div>
        )} */}
      {/* <Login /> */}
    </nav>
  );
}
