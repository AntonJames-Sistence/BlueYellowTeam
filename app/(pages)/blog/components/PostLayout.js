import Button from "./Button";
import Image from "next/image";
import BlogMenu from "./BlogMenu";
import { getServerSession } from "next-auth";

export default async function PostLayout({ post }) {
  const date = new Date(post.createdAt.seconds * 1000);
  const month = months[date.getMonth()];
  const session = await getServerSession();
  return (
    <div className="flex-basis-52 flex flex-col relative justify-between rounded-lg h-full shadow-lg">
      {session && <BlogMenu blogId={post.id} />}
      <div>
        <div className="h-64 w-full relative rounded-t-lg">
          <img
            src={post.image}
            alt="Blog image"
            className="w-full h-full object-cover object-top rounded-t-lg"
          />
          {/* <Image
            className="w-full h-full object-cover object-top rounded-t-lg"
            src={post.image}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Image blog post"
          /> */}
        </div>
        <div className="p-5 rounded-b-lg flex flex-col justify-between">
          <div className="text-2xl mt-0 mb-2 text-black font-semibold">
            {post.title.slice(0, 40)}
            {post.title.length > 40 ? "..." : ""}
          </div>
          <hr></hr>
          <div className="my-2 leading-2 h-max tracking-wide text-gray-700 h-min-[100px] ">
            {post.description.slice(0, 250)}
            {post.description.length > 250 ? "... " : " "}
            <Button
              text="continue reading"
              url={`/blog/${post.id}`}
              css="hover:text-blue-600 font-semibold transition-colors ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 p-5 pt-0 text-sm">{`${month} ${date.getDate()}, ${date.getFullYear()}`}</div>
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
