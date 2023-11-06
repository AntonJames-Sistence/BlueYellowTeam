import Button from "./Button";

export default function PostLayout({ post }) {
  const date = new Date(post.createdAt.seconds * 1000);

  const month = months[date.getMonth()];
  return (
    <div>
      <img src={post.image} />
      <div className="mt-2 text-sm">{`${month} ${date.getDate()}, ${date.getFullYear()}`}</div>
      <div className="text-2xl font-bold my-2">{post.title}</div>
      <div className="mb-2 ">{post.description}</div>
      <Button
        text="continue reading"
        url={`/blog/${post.id}`}
        css="hover:text-blue-500 font-semibold"
      />
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
