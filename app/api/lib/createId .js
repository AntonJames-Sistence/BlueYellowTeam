export default function createId(title) {
  const invalid = new Set(["!", ",", "?", "."]);
  const filteredString = title
    .split("")
    .filter((char) => !invalid.has(char))
    .join("");
  const id = filteredString.replace(/ /g, "-");
  return id;
}
