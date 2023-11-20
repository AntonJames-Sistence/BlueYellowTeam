"use client";
import { useState } from "react";
import FacebookPostImages from "./FacebookPostImages";

export default function FacebookPost({ post }) {
  const [hideExtra, setHideExtra] = useState(true);
  const tooBig = post.description.length > 300;

  return (
    <div className="FaceBookLogs-post p-4 mb-3.5 min-content h-min rounded-md shadow-[0px_7px_7px_0px_lightgrey] bg-[#fff]">
      <div className="FaceBookLogs-post-header flex items-center gap-1.5 mb-3.5">
        <a
          href="https://www.facebook.com/BlueYellowFoundation/"
          target="_blank"
        >
          <img
            className="FaceBookLogs-post-header-img w-10 h-10 rounded-full"
            src={post.pfp}
            alt=""
          />
        </a>
        <div className="FaceBookLogs-post-header-content h-10">
          <div className="FaceBookLogs-post-header-content-1 font-bold text-sm">
            <a
              href="https://www.facebook.com/BlueYellowFoundation/"
              target="_blank"
            >
              {post.name}
            </a>
          </div>
          <div className="FaceBookLogs-post-header-content-2 text-xs">
            {getDate(post.createdAt)}
          </div>
        </div>
      </div>
      <div className="FaceBookLogs-post-caption break-words mb-2 font-sans">
        {tooBig && hideExtra
          ? post.description.slice(0, 300)
          : post.description}
        {tooBig && hideExtra && (
          <div
            className="cursor-pointer w-fit inline"
            onClick={() => setHideExtra(false)}
          >
            {" "}
            ...
            <span className="hover:underline font-bold text-black">
              See more
            </span>
          </div>
        )}
        {tooBig && !hideExtra && (
          <div
            className="cursor-pointer w-fit inline "
            onClick={() => setHideExtra(true)}
          >
            {" "}
            ...
            <span className="hover:underline font-bold text-black">
              See less
            </span>
          </div>
        )}
      </div>
      <a href={post.url} className="relative h-full" target="_blank">
        <div className="absolute z-[2] w-full h-full bg-black/0 duration-300 hover:bg-black/50"></div>
        <FacebookPostImages images={post.images} />
      </a>
      <div className="flex justify-between mt-2">
        <div className="flex justify-between text-sm gap-4">
          <div className="flex items-center gap-0">
            <img src="/facebookLikes.png" className="h-5 rounded w-auto" />
            <div>{post.likes}</div>
          </div>
          <div className="flex items-center gap-0.5">
            <i className="fa-regular fa-comment"></i>
            <div>{post.comments}</div>
          </div>
          <div className="flex items-center gap-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1969_47911)">
                <path
                  d="M12.8409 6.58819L9.47282 3.13265C9.17819 2.83078 8.71394 3.07612 8.71394 3.54622V5.40051C5.52663 5.44126 3 6.15312 3 9.51614C3 10.8738 3.78567 12.2191 4.65347 12.9217C4.92444 13.1412 5.31013 12.8657 5.21013 12.5101C4.31019 9.30611 5.85697 8.601 8.71394 8.5785V10.4338C8.71394 10.9044 9.17909 11.1486 9.47326 10.8466L12.8414 7.39106C13.053 7.19578 13.053 6.80572 12.8409 6.58819Z"
                  stroke="#141B38"
                  stroke-linecap="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1969_47911">
                  <rect width="16" height="16" rx="2" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div>{post.shares}</div>
          </div>
        </div>
        <div className="flex items-center">
          <a className="flex items-center" href={post.url} target="_blank">
            <i className="fa-brands fa-facebook hover:cursor-pointer"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

const getDate = (inputDate) => {
  const date = new Date(inputDate);
  const curDate = new Date();
  const timeDif = curDate.getTime() - date.getTime();

  const months = Math.floor(timeDif / 1000 / 60 / 60 / 24 / 30);
  if (months > 0) return `${months} ${months > 1 ? "months" : "month"} ago`;

  const weeks = Math.floor(timeDif / 1000 / 60 / 60 / 24 / 7);
  if (weeks > 0) return `${weeks} ${weeks > 1 ? "weeks" : "week"} ago`;

  const days = Math.floor(timeDif / 1000 / 60 / 60 / 24);
  if (days > 0) return `${days} ${days > 1 ? "days" : "day"} ago`;

  const hourDif = Math.floor(timeDif / 1000 / 60 / 60);
  if (hourDif > 0) return `${hourDif} ${hourDif > 1 ? "hours" : "hour"} ago`;

  const minuteDif = Math.floor(timeDif / 1000 / 60);

  if (minuteDif > 0)
    return `${minuteDif} ${minuteDif > 1 ? "minutes" : "minute"} ago`;

  return "now";
};
