export default function createGoogleDriveLink(link) {
  link = link.split("https://drive.google.com/file/d/");
  const viewPosition = link[1].indexOf("/view");
  const linkId = link[1].slice(0, viewPosition);
  return `https://drive.google.com/uc?export=view&id=${linkId}`;
}
