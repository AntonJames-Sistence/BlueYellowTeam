"use client";
import React from "react";
import { useMenu, Menu, MenuItem } from "../../../components/Menu";
import { useRouter } from "next/navigation";
import { FaEllipsisH } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ProjectMenu({ projectId }) {
  const { btnRef, hideMenu, toggleMenu, show, menuRef } = useMenu();
  const router = useRouter();

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="absolute right-0 mr-2" onClick={handleClick}>
      <div ref={btnRef} onClick={toggleMenu}>
        <FaEllipsisH className="text-2xl text-black cursor-pointer absolute right-0 top-2 z-10 p-1 h-min bg-white rounded-md" />
      </div>

      <Menu menuRef={menuRef} isOpen={show} right bottom>
        <MenuItem
          text="Edit"
          onClick={() => {
            hideMenu();
            router.push(`/projects/${projectId}/edit`);
          }}
        />
        <MenuItem
          text="Delete"
          onClick={async () => {
            hideMenu();
            const res = await fetch(`api/projects/${projectId}`, {
              method: "DELETE",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ id: projectId }),
            });

            if (res.ok) toast.success("Project deleted!");
            else toast.error("something went wrong :(");
          }}
        />
      </Menu>
    </div>
  );
}
