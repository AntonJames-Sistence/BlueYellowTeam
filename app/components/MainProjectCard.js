"use client";
import Link from "next/link";

export default function MainProjectCard({ id, img, title, para }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <div
      className="project-card
    flex-1 flex-basis-52 relative pb-8"
    >
      <img className="rounded-lg" src={img} alt="" />
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=6S6S2484WWCKN"
        target="_blank"
      >
        <div
          className="donate-button
      py-3.5 px-1 mt-5 mb-2.5 rounded-3xl flex justify-center text-sm font-bold leading-none tracking-wide
      bg-blue-500 text-white cursor-pointer hover:bg-yellow-300 hover:text-black"
        >
          Donate now
        </div>
      </a>
      <div className="text-3xl mt-0 mb-2 text-gray-700">{title}</div>
      <div className="text-14 leading-2 tracking-wide text-gray-700">
        {para}
      </div>
      {/* update button for testing props */}
      {/* <button
        onClick={handleClick}
      >
        Update
      </button> */}
    </div>
  );
}