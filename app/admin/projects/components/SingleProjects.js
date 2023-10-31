"use client";

import React, { useState } from "react";

export default function SingleProjects({ id, img, title, para }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImg, setNewImg] = useState(img);
  const [newPara, setNewPara] = useState(para);

  const handleClick = async () => {
    console.log("clicked");
    const res = await fetch("http://localhost:3000/api/projects", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id, title: newTitle, img: newImg, para: newPara }),
    });

    if (res.ok) {
      console.log("successful");
    }
  };
  return (
    <div
      className="project-card
    flex-1 flex-basis-52 relative pb-8"
    >
      <img className="rounded-lg" src={newImg} alt="" />
      <div
        onClick={handleClick}
        className="donate-button
      py-3.5 px-1 mt-5 mb-2.5 rounded-3xl flex justify-center text-sm font-bold leading-none tracking-wide
      bg-blue-500 text-white cursor-pointer hover:bg-yellow-300 hover:text-black"
      >
        Update
      </div>

      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="text-3xl mt-0 mb-2 text-gray-700 w-full"
      />

      <textarea
        value={newPara}
        onChange={(e) => setNewPara(e.target.value)}
        className="text-14 leading-2 tracking-wide text-gray-700 w-full"
        rows={5}
      />
    </div>
  );
}
