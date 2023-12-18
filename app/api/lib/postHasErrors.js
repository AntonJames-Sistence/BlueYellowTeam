export default function postHasErrors(post, type) {
  const errors = {};

  if (!post.title) errors.title = "Blog post missing title";
  if (!post.description) errors.description = "Blog post missing description";
  if (!post.image) errors.media = "Blog needs an image";
  if (type === "PUT" && !post.id) errors.id = "Blog needs an id to update";
  if (type === "POST" && (!post.subSections || !post.subSections.length))
    errors.subSections = "Blog needs at least one subSection";

  if (Object.values(errors).length) return errors;
  return false;
}
