'use client';

const Banner = () => {
    return (
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
                <div className="w-full lg:-mt-22 md:-mt-12 md:w-1/2 flex flex-col justify-center p-5">
                    <div className="text-3xl md:text-4xl xl:text-6xl text-white font-bold text-shadow-lg md:pb-6">
                        STAND WITH LOVE STAND WITH UKRAINE
                    </div>
                    <div className="text-white lg:text-left font-bold text-base md:text-lg xl:text-xl lg:pt-8">
                        100% OF PROFIT GOES TO SUPPORT UKRAINIANS IN NEED
                    </div>
                </div>
                <div
                    className="w-full md:w-1/2 h-full bg-cover bg-no-repeat rounded-3xl"
                    style={{ backgroundImage: `url(./intro_banner.png)` }}
                ></div>
            </div>
        </div>
    )
}

export default Banner;