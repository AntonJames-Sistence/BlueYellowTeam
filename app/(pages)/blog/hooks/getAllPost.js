export default async function getAllPost() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 15 },
  });

  if (!res.ok) throw new Error("failed to fetch all blogs");
  let allPost = await res.json();
  allPost = allPost.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
  return allPost;
}
