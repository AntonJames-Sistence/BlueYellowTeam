"use client";
import { useRef, useState, useEffect } from "react";

export function Menu({
  children,
  isOpen,
  menuRef,
  right,
  top = "45px",
  bottom,
}) {
  if (!isOpen) return;

  return (
    <div
      ref={menuRef}
      className="absolute z-10 p-1 bg-white rounded-md"
      style={{
        right: 0,
        top: "35px",
      }}
    >
      {children}
    </div>
  );
}

export function MenuItem({ icon, text, onClick }) {
  return (
    <div
      className="flex items-center gap-1 text-black py-1 px-4 cursor-pointer hover:bg-slate-300"
      onClick={onClick}
    >
      {icon}
      {text}
    </div>
  );
}

export function useMenu() {
  const [show, setShow] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShow(!show);
  };

  const hideMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        btnRef.current &&
        !btnRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return { btnRef, hideMenu, toggleMenu, show, menuRef };
}
