import Button from "./Button";
import Image from "next/image";

export default function PostLayout({ post }) {
  const date = new Date(post.createdAt.seconds * 1000);

  const month = months[date.getMonth()];
  return (
    <div className=" flex-1 flex-basis-52 relative rounded-lg h-fit shadow-lg">
      <div className="h-64 w-full relative rounded-t-lg">
        <Image
          className="w-full h-full object-cover object-top rounded-t-lg"
          src={post.image}
          fill={true}
        />
      </div>
      <div className="p-5 bg-[#fff] rounded-b-lg h-max flex flex-col justify-between">
        <div className="mt-2 text-sm">{`${month} ${date.getDate()}, ${date.getFullYear()}`}</div>
        <div className="text-3xl mt-0 mb-2 text-gray-700 lg:min-h-20 break-all">
          {post.title.slice(0, 40)}
          {post.title.length > 40 ? "..." : ""}
        </div>
        <div className="mb-2 leading-2 tracking-wide text-gray-700 min-h-32">
          {post.description.slice(0, 200)}
          {post.description.length > 200 ? "..." : " "}
        </div>
        <Button
          text="continue reading"
          url={`/blog/${post.id}`}
          css="hover:text-blue-600 font-semibold transition-colors duration-200"
        />
      </div>
    </div>
  );
}

export const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
