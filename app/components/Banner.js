'use client';
import Link from 'next/link';

const Banner = () => {
    return (
        <>
            <div className="relative h-[400px] w-full">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-3xl"
                    src="./flag_bg.mp4"
                    autoPlay
                    loop
                    muted
                    controls={false}
                ></video>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row">
                    <div className="w-full lg:-mt-16 md:-mt-20 md:w-1/2 flex flex-col justify-center p-5">
                        <div className="text-2xl md:text-4xl xl:text-5xl text-white font-bold text-shadow-lg md:pb-6">
                            STAND WITH LOVE, STAND WITH UKRAINE
                        </div>
                        <div className="text-white lg:text-left font-bold text-base md:text-lg xl:text-xl">
                            100% OF THE PROFITS GO <br/> TO SUPPORT UKRAINIANS IN NEED
                        </div>
                    </div>
                    <div
                        className="w-full md:w-3/4 sm:hidden h-full bg-cover bg-no-repeat rounded-3xl lg:block md:block"
                        style={{ 
                                backgroundImage: `url(./intro_banner.png)`,
                        }}
                    ></div>
                </div>
            </div>
            {/* <div className="flex flex-row justify-between w-full h-[100px]">
                <Link href="./donate" className='flex flex-grow'>
                <button className="h-10 
                        bg-gradient-to-b 
                        from-blue-400 to-yellow-400  
                        text-black text-l
                        hover:text-white 
                        hover:scale-110
                        font-bold
                        rounded-3xl
                        items-center
                        justify-center
                        ease-in-out duration-300
                        place-self-center
                        m-4
                        md:h-4 md:p-4 md:text-lg
                        lg:h-14 lg:p-4 lg:text-lg">
                        Donate now</button></Link>
                <button className="flex flex-grow h-10
                        bg-gradient-to-b 
                        from-blue-400 to-yellow-400  
                        text-black text-l
                        hover:text-white 
                        hover:scale-110
                        font-bold
                        rounded-3xl
                        items-center
                        justify-center
                        ease-in-out duration-300
                        place-self-center
                        m-4
                        md:h-4 md:p-4 md:text-lg
                        lg:h-14 lg:p-4 lg:text-lg">Credit Cart</button>
                <button className="flex flex-grow h-10
                        bg-gradient-to-b 
                        from-blue-400 to-yellow-400  
                        text-black text-l
                        hover:text-white 
                        hover:scale-110
                        font-bold
                        rounded-3xl
                        items-center
                        justify-center
                        ease-in-out duration-300
                        place-self-center
                        m-4
                        md:h-4 md:p-4 md:text-lg
                        lg:h-14 lg:p-4 lg:text-lg">By Check</button>
                <button className="flex flex-grow h-10
                        bg-gradient-to-b 
                        from-blue-400 to-yellow-400  
                        text-black text-l
                        hover:text-white 
                        hover:scale-110
                        font-bold
                        rounded-3xl
                        items-center
                        justify-center
                        ease-in-out duration-300
                        place-self-center
                        m-4
                        md:h-4 md:p-4 md:text-lg
                        lg:h-14 lg:p-4 lg:text-lg">
                        <a href="https://www.paypal.com/donate/?hosted_button_id=6S6S2484WWCKN">Pay Pal</a></button>
            </div> */}
        </>
    )
}

export default Banner;