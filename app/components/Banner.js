"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="relative h-[400px] w-11/12 max-w-[1400px] mt-28">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl shadow-custom"
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
              backgroundImage: `url(/intro_banner.png)`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row w-11/12 justify-between max-w-[1400px] mt-4">
                <Link href="./donate" className='w-[85px] md:w-1/5 flex flex-row'>
                  <button className="
                          h-[120%]
                          lg:h-16
                          w-full
                          bg-yellow-400
                          hover:bg-blue-400
                          text-black
                          hover:text-white
                          hover:scale-110
                          font-bold
                          rounded-2xl
                          shadow-custom
                          items-center
                          justify-center
                          ease-in-out duration-300
                          px-4
                          text-xs
                          md:text-sm
                          "><i className="fa-brands fa-cc-stripe fa-xl md:mr-2 ml:mr-6"></i>
                          <div className="inline">Donate with Stripe</div>
                  </button>
                </Link>
                <Link href="https://www.paypal.com/donate/?hosted_button_id=6S6S2484WWCKN" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className='w-[85px] md:w-1/5'>
                  <button className="
                          h-[120%]
                          lg:h-16
                          w-full
                          bg-yellow-400
                          hover:bg-blue-400
                          text-black
                          hover:text-white
                          hover:scale-110
                          shadow-custom
                          font-bold
                          rounded-2xl
                          items-center
                          justify-center
                          ease-in-out duration-300
                          px-4
                          text-xs
                          md:text-sm
                          "><i className="fa-brands fa-paypal fa-xl md:mr-2 ml:mr-6"></i>
                          <div className="inline">Donate with PayPal</div>
                  </button>
                </Link>
                <Link href="./donate" className='w-[85px] md:w-1/5'>
                  <button className="
                          h-[120%]
                          lg:h-16
                          w-full
                          md:w-full
                          bg-yellow-400
                          hover:bg-blue-400
                          text-black
                          hover:text-white
                          hover:scale-110
                          shadow-custom
                          font-bold
                          rounded-2xl
                          items-center
                          justify-center
                          ease-in-out duration-300
                          px-4
                          text-xs
                          md:text-sm
                          "><i className="fa-brands fa-google-pay fa-2xl md:mr-2 ml:mr-6"></i>
                          <div className="md:inline">Donate with GooglePay</div>
                  </button>
                </Link>
                <Link href="./donate" className='w-[85px] md:w-1/5'>
                  <button className="
                          h-[120%]
                          lg:h-16
                          w-full
                          bg-yellow-400
                          hover:bg-blue-400
                          text-black
                          hover:text-white
                          hover:scale-110
                          shadow-custom
                          font-bold
                          rounded-2xl
                          items-center
                          justify-center
                          ease-in-out duration-300
                          px-4
                          text-xs
                          md:text-sm
                          "><i className="fa-brands fa-apple-pay fa-2xl md:mr-2 ml:mr-6"></i>
                          <div className="inline">Donate with ApplePay</div>
                  </button>
                </Link>
                
                
            </div>
    </>
  );
};

export default Banner;
