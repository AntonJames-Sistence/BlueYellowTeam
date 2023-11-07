export default async function getAllPost() {
  const res = await fetch(
    `https://blue-yellow-foundation.vercel.app/api/blog`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return undefined;
  let allPost = await res.json();
  allPost = allPost.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
  return allPost;
}
