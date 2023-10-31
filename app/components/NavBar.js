"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav
      id="Nav"
      className="fixed flex w-full justify-between items-center p-2.5 max-w-7xl text-lg mt-8 mx-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <Link href="/">
        <img
          className="w-24 h-auto  hover:cursor-pointer hover:opacity-80"
          src="/blue-yellow-logo.png"
          alt="Picture of the author"
        />
      </Link>
      <div className="flex">
        <div className="hover:text-sky-500 hover:cursor-pointer">Donations</div>
        <div>&nbsp;/&nbsp;</div>
        <div className="hover:text-sky-500 hover:cursor-pointer">Events </div>
        <div>&nbsp;/&nbsp;</div>
        <Link
          href="/#FeaturedProjects"
          className="hover:text-sky-500 hover:cursor-pointer"
        >
          Projects
        </Link>
        <div>&nbsp;/&nbsp;</div>
        <div className="hover:text-sky-500 hover:cursor-pointer">Shop</div>
      </div>
      {session?.user ? (
        <div className="cursor-pointer" onClick={() => signOut()}>
          logout
        </div>
      ) : (
        <div className="flex">
          <div className="cursor-pointer" onClick={() => signIn("google")}>
            Login
          </div>
          <div>&nbsp;/&nbsp;</div>
          <div className="cursor-pointer">Signup</div>
        </div>
      )}
    </nav>
  );
}
