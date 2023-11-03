'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import WarClock from './WarClock.jsx';
import { navLinks } from '../../data/navbar';

export default function NavBar() {
  let isDesktop = true;
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 900) {
      isDesktop = false;
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isDesktop ? (
        <nav
          id="Nav"
          className="fixed flex w-full
                justify-between
                items-center
                p-4
                text-lg
                mt-8
                left-1/2
                transform -translate-x-1/2 -translate-y-1/2 z-30 bg-inherit rounded-bl-2xl rounded-br-2xl"
        >
          <Link href="/">
            <img
              className="w-28 h-auto  hover:cursor-pointer hover:opacity-80"
              src="/blue-yellow-logo.png"
              alt="BlueYellowFoundation logo"
            />
          </Link>
          <WarClock />

          <div className="flex w-1/2 justify-evenly">
            {navLinks.map((navlink, index) => {
              return (
                <Link key={index} href={navlink.href}>
                  {navlink.title}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : (
        <>
          <nav className="flex items-center justify-evenly">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'close' : 'open'}
            </button>

            <Link href="/">
              <img
                className="w-28 h-auto  hover:cursor-pointer hover:opacity-80"
                src="/blue-yellow-logo.png"
                alt="BlueYellowFoundation logo"
              />
            </Link>
          </nav>
          {isOpen ? (
            <div className="flex flex-col items-center justify-evenly">
              {navLinks.map((navlink, index) => {
                return (
                  <Link key={index} href={navlink.href}>
                    {navlink.title}
                  </Link>
                );
              })}
            </div>
          ) : null}{' '}
        </>
      )}
    </>
  );
}
