import React, { useState } from "react";

export default function SubSectionForm({
  section,
  index,
  handleDeleteCard,
  handleEditCard,
}) {
  return (
    <div className="border-2 border-black my-5 rounded-md">
      <div className="flex justify-between p-4 border-b-2">
        <div>{index + 1}</div>
        <div
          className="hover:cursor-pointer"
          onClick={() => handleDeleteCard(section.pseudoId, section.id)}
        >
          delete
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 p-4">
        <div className="font-semibold">Title</div>
        <input
          type="text"
          className="border-2 p-2 rounded-md "
          placeholder="Enter Title:"
          value={section.title}
          onChange={(e) =>
            handleEditCard(section.pseudoId, "title", e.target.value)
          }
        />
        <div className="font-semibold">Text</div>
        <textarea
          type="text"
          className="border-2 p-2 rounded-md "
          placeholder="Enter Text"
          value={section.text}
          onChange={(e) =>
            handleEditCard(section.pseudoId, "text", e.target.value)
          }
          rows={4}
        />
      </div>
    </div>
  );
}
