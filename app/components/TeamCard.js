import React from 'react';

export default function TeamCard({ index }) {
  return (
    <swiper-slide>
      <div id="card" className="rounded-3xl mx-2 bg-white">
        <div
          id="image-content"
          className="flex justify-center items-center relative p-4"
        >
          <span className="bg-blue-500 absolute rounded-t-3xl rounded-bl-3xl top-0 left-0 w-full h-full before:absolute before:h-10 before:w-10 before:bg-blue-500 before:-bottom-10 before:right-0 ham after:absolute after:h-10 after:w-10 after:-bottom-10 after:right-0 after:rounded-tr-3xl after:bg-white"></span>

          <div
            id="card-image"
            className="relative h-36 w-36 bg-white p-1 rounded-full"
          >
            <img
              id="card-img"
              src="/team.jpeg"
              alt=""
              className="h-full w-full object-cover border-solid border-4 rounded-full border-blue-500 "
            />
          </div>
        </div>

        <div className="text-center p-2">
          <h2 className="text-black text-lg">James {index}</h2>
          <div className="text-md text-gray-500">
            aldkfj aslkdjfdskal jflkdsja lkfjdsakfj ldskajf lkask asj lkjdlksf
            sadlkfjadsk lfksjda kfldj fk daslkjfladksjf lsdkajf ksald fjklsdajf
            klj sdaklf j lkasdjf klasdj fklas lkj
          </div>
          <div className="bg-blue-500 text-lg w-fit mx-auto my-4 py-1 px-3 rounded-md cursor-pointer">
            View more
          </div>
        </div>
      </div>
    </swiper-slide>
  );
}
