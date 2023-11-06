import Link from 'next/link';

export default function ImageTextContainer({
  img,
  title,
  para,
  link,
  onClick,
}) {
  return (
    <Link
      onClick={() => onClick()}
      href={link}
      className="project-card
    flex-1 flex-basis-52 relative border border-solid border-black rounded-lg bg-white"
    >
      <img
        className="border-b border-solid border-black rounded-t-md"
        src={img}
        alt=""
      />
      <div className="p-10 pt-5">
        <div className="text-3xl mt-0 mb-2 text-gray-700">{title}</div>
        <div className="text-14 leading-2 tracking-wide text-gray-700">
          {para}
        </div>
      </div>
    </Link>
  );
}
