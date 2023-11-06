export default async function getPost(postId) {
  const res = await fetch(`http://localhost:3000/api/blog/${postId}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return undefined;

  const data = await res.json();

  data.subSections = data.subSections.sort((a, b) => {
    if (a.createdAt.seconds !== b.createdAt.seconds) {
      return a.createdAt.seconds - b.createdAt.seconds;
    }
    return a.createdAt.nanoseconds - b.createdAt.nanoseconds;
  });
  return data;
}
