export default function createGoogleDriveLink(link) {
  link = link.split("https://drive.google.com/file/d/");
  const viewPosition = link[1].indexOf("/view");
  const linkId = link[1].slice(0, viewPosition);
  // return `https://drive.google.com/thumbnail?id=${linkId}`;
  return `https://drive.google.com/uc?export=view&id=${linkId}`;
}

{
  /* <img
  src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTDBbmirDjs3y1LK5daWh06AXOtWoBZyOsjTilKng2xQPmqsrK76URaKOu7H4HYD2CNdxEhFu_meSMOBwqpgji0P3vwbw=s1600"
  alt=""
/>; */
}
