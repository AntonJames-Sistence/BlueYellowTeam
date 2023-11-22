import React, { useState } from "react";

export default function SubSectionForm({ section, index, handleDeleteCard }) {
  const [title, setTitle] = useState(section.title ?? "");
  const [text, setText] = useState(section.text ?? "");
  return (
    <div className="border-2 border-black my-5 rounded-md">
      <div className="flex justify-between p-4 border-b-2">
        <div>{index + 1}</div>
        <div
          className="hover:cursor-pointer"
          onClick={() => handleDeleteCard(section.pseudoId)}
        >
          delete
        </div>
      </div>
      <div className="flex justify-between gap-10 p-4">
        <input
          type="text"
          className="border-b-2 pb-2 w-full"
          placeholder="Enter Title:"
        />
        <input
          type="text"
          className="border-b-2 pb-2 w-full"
          placeholder="Enter Description"
        />
      </div>
    </div>
  );
}
