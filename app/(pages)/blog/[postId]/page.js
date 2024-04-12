import getAllPost from "../hooks/getAllPost";
import getPost from "../hooks/getPost";
import { notFound } from "next/navigation";
import SubSectionCol from "../components/SubSectionCol";
import { months } from "../components/PostLayout";
import Image from "next/image";

export default async function SinglePost({ params: { postId } }) {
  const post = await getPost(postId);

  if (!post) return notFound();

  const date = new Date(post.createdAt.seconds * 1000);

  const month = months[date.getMonth()];

  const half = Math.ceil(post.subSections.length / 2);
  const firstHalf = post.subSections.slice(0, half);
  const secondHalf = post.subSections.slice(half);
  return (
    <div className="md:mb-40z w-full max-w-3xl m-auto pt-20 ">
      <a href="/blog">
        <button className="text-white rounded-3xl text-sm py-2 px-6 bg-[#4b5563] mb-4">
          « ALL BLOGS
        </button>
      </a>
      <div className="w-full max-w-3xl m-auto h-fit shadow-md shadow-sky-900 max-[550px]:shadow-md bg-[#fff]">
        <div className="w-full pl-2 border-b-2 border-black mb-4 pt-2 text-3xl font-bold">
          {post.title}
        </div>
        <div className="w-full px-8 m-auto">
          <div className="relative w-full h-64">
            <img
              className="object-cover w-full h-full object-top"
              src={post.image}
              alt="Image for blog post"
              fill="true"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute flex flex-col items-end px-4 py-1 bg-sky-500 text-white bottom-0 right-0 transform translate-y-1/2 translate-x-[15%]">
              <div>Blue & Yellow Foundation</div>
              <div className="text-sm">{`${month} ${date.getDate()}, ${date.getFullYear()}`}</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 break-words mt-4">
            <SubSectionCol sections={firstHalf} />
            <SubSectionCol sections={secondHalf} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const allPost = await getAllPost();

  if (!allPost) return [];

  return allPost.map((post) => ({
    postId: post.id,
  }));
}
