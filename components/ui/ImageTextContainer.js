import Link from "next/link";

export default function ImageTextContainer({
  img,
  title,
  para,
  link,
  onClick,
}) {
  return (
    <>
      {!onClick ? (
        <Link
          href={link}
          className="project-card
    flex-1 flex-basis-52 relative rounded-lg bg-white shadow-md hover:shadow-xl hover:scale-[105%] ease-in-out duration-300"
        >
          <img
            className="border-b border-solid border-black rounded-t-md"
            src={img}
            alt=""
          />
          <div className="p-10 md:p-5 lg:p-10 pt-5">
            <div className="text-3xl md:text-2xl lg:text-3xl mt-0 mb-2 text-gray-700">
              {title}
            </div>
            <div className="text-base md:text-sm lg:text-base leading-2 tracking-wide text-gray-700">
              {para}
            </div>
          </div>
        </Link>
      ) : (
        <div
          onClick={onClick}
          className="project-card
  flex-1 flex-basis-52 relative border border-solid border-black rounded-lg bg-white cursor-pointer"
        >
          <img
            className="border-b border-solid border-black rounded-t-md"
            src={img}
            alt=""
          />
          <div className="p-10 pt-5">
            <div className="text-3xl mt-0 mb-2 text-gray-700">{`Donate to ${title}`}</div>
            <div className="text-14 leading-2 tracking-wide text-gray-700">
              {para}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
