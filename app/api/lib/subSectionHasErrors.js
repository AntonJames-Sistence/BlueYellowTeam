export default function subSectionHasErrors(subSection) {
  const errors = {};

  if (!subSection.title) errors.title = "SubSection missing title";
  if (!subSection.text) errors.subSection = "SubSection missing text";

  if (Object.values(errors).length) return errors;
  return false;
}
