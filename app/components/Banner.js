"use client";
import { useEffect, useState } from 'react';
import ThankYouModal from './Modal';

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the current URL matches the desired pattern
    const isLocalhostURL = window.location.href.includes('thankyounote');

    if (isLocalhostURL) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    // Additional logic for closing the modal if needed
  };

  return (
    <>
      <div className={`fixed -top-32 md:-top-60 lg:top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-40 transition-opacity duration-500 ease-in-out ${showModal ? 'opacity-100 visible' : 'opacity-0 invisible transition-modal'}`}>
        <ThankYouModal isOpen={showModal} onRequestClose={closeModal} />
      </div>

      <div className="relative max-[600px]:aspect-[5/4] min-[600px]:h-[400px] w-11/12 max-w-[1400px] mt-28">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl"
          src="/flag_bg.mp4"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between md:flex-row">
          <div className="w-full lg:-mt-10 md:-mt-14 mt-4 md:w-1/2 flex flex-col justify-center p-5 absolute md:static top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0">
            <div className="uppercase text-4xl md:text-3xl xl:text-4xl text-center md:text-left text-white font-bold text-shadow-lg -mt-8 md:pb-2 md:mt-4 lg:-mt-6">
              Resilience and bravery in times of war
            </div>
            <div className="uppercase text-white md:-mb-6 text-center lg:text-left mt-4 text-2xl md:text-lg xl:text-xl">
              100% of profit goes to support ukraine through trusted funds or
              direct aid
            </div>
          </div>
          <div
            className="w-full md:w-3/4 h-1/2 md:h-full lg:h-full bg-cover bg-no-repeat rounded-2xl hidden md:block"
            style={{
              backgroundImage: `url(/girl.png)`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
