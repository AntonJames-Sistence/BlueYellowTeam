"use client";
import { useState } from "react";

export default function FacebookPost({ post }) {
  const [hideExtra, setHideExtra] = useState(true);
  const tooBig = post.description.length > 250;

  return (
    <div className="FaceBookLogs-post p-4 mb-3.5 min-content h-min rounded shadow-[0px_7px_7px_0px_lightgrey] bg-[#fff]">
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
            <a href={post.url} target="_blank">
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
          ? post.description.slice(0, 250)
          : post.description}
        {tooBig && hideExtra && (
          <div
            className="cursor-pointer w-fit"
            onClick={() => setHideExtra(false)}
          >
            {" "}
            ...show more{" "}
          </div>
        )}
        {tooBig && !hideExtra && (
          <div
            className="cursor-pointer w-fit"
            onClick={() => setHideExtra(true)}
          >
            {" "}
            ...show less{" "}
          </div>
        )}
      </div>
      <a href={post.url} className="relative" target="_blank">
        <div className="absolute w-full h-full bg-black/0 duration-300 hover:bg-black/50"></div>
        <img src={post.images[0]} alt="" />
      </a>
      <div className="flex items-center mt-1 gap-0.5">
        <img src="/facebookLikes.png" className="h-auto rounded w-1/6" />
        <div className="text-sm">{post.likes}</div>
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
