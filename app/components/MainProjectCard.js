export default function MainProjectCard({ img, title, para }) {
  return (
    <div className="flex flex-col items-center p-b-8 space-y-5">
      <img className="rounded-lg" src={img} alt="" />
      <div className="bg-blue-500 py-4 px-2 rounded-full text-center text-white font-bold text-sm tracking-wide cursor-pointer hover:bg-yellow-300 hover:text-black">
        Donate now
      </div>
      <div className="text-2xl text-gray-700 mb-1">{title}</div>
      <div className="text-sm leading-7 tracking-wide text-gray-700">
        {para}
      </div>
    </div>
  );
}
