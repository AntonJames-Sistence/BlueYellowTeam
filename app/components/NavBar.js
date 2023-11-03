'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import WarClock from './WarClock.jsx';

const navLinks = [
  { href: '', title: 'Home' },
  { href: '/donate', title: 'Donate' },
  { href: '#EventsAndProjects', title: 'Events & Projects' },
  { href: '#Causes', title: 'Causes' },
  { href: '#Team', title: 'Team' },
  { href: '#Contacts', title: 'Contacts' },
  { href: '/donate', title: 'Donate Now' },
];

export default function NavBar() {
  const isDesktop = window.innerWidth > 900;

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
            {navLinks.map((navlink) => {
              return <Link href={navlink.href}>{navlink.title}</Link>;
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
              {navLinks.map((navlink) => {
                return <Link href={navlink.href}>{navlink.title}</Link>;
              })}
            </div>
          ) : null}{' '}
        </>
      )}
    </>
  );
}
