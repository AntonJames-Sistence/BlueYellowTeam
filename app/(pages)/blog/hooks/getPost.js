export default async function getPost(postId) {
  const res = await fetch(`http://localhost:3000/api/blog/${postId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return undefined;

  const data = await res.json();
  return data;
}
