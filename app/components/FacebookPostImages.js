import React from "react";

export default function FacebookPostImages({ images }) {
  if (images.length === 2)
    return (
      <div className="flex">
        <img className="w-1/2" src={images[0]} alt="" />
        <img className="w-1/2" src={images[1]} alt="" />
      </div>
    );

  const imagesWidth = images.length > 3 ? "w-1/3" : "w-1/2";

  return (
    <>
      <img
        className="w-full h-auto object-cover object-top"
        src={images[0]}
        alt=""
      />
      <div className="flex items-stretch relative">
        {images.slice(1, 4).map((img, index) => (
          <img
            key={index}
            className={`aspect-square ${imagesWidth} grow flex border-y-2 border-x-[1px] border-white`}
            src={img}
            alt=""
          />
        ))}
        {images[4] && (
          <div
            className="aspect-square grow flex justify-center items-center text-3xl text-white border-white border-y-2 border-x-[1px] absolute right-0 bg-black/50 w-1/3"
            alt=""
          >
            {images.length - 3}+
          </div>
        )}
      </div>
    </>
  );
}
// h-40 min-[1024px]:h-28 min-[1155px]:h-32
