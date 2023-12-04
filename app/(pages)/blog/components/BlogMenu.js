"use client";
import React from "react";
import { Menu, useMenu, MenuItem } from "../../../components/Menu";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function BlogMenu({ blogId }) {
  const { btnRef, hideMenu, toggleMenu, show, menuRef } = useMenu();
  const router = useRouter();
  return (
    <div className="absolute right-0 mr-2">
      <i
        className="fa-solid fa-ellipsis cursor-pointer absolute right-0 top-2 z-10 p-1 h-min bg-white rounded-md"
        ref={btnRef}
        onClick={toggleMenu}
      ></i>

      <Menu menuRef={menuRef} isOpen={show} right bottom>
        <MenuItem
          text="Edit"
          onClick={() => {
            hideMenu();
            router.push(`/blog/${blogId}/edit`);
          }}
        />
        <MenuItem
          text="Delete"
          onClick={async () => {
            hideMenu();
            const res = await fetch("api/blog", {
              method: "DELETE",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ id: blogId }),
            });

            if (res.ok) toast.success("Blog deleted!");
            else toast.error("something went wrong :(");
          }}
        />
      </Menu>
    </div>
  );
}
