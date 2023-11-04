'use client';

const Banner = () => {
    return (
        <div class="relative h-[400px] w-full">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-negative rounded-3xl"
                src="./flag_bg.mp4"
                autoPlay
                loop
                muted
                controls={false}
            ></video>
            <div className="absolute top-0 left-0 w-full h-full flex">
                <div className="flex flex-col justify-center p-5 w-1/2">
                    <div className="text-6xl -mt-24 text-white font-bold text-shadow-lg">
                        STAND WITH LOVE, <br/> STAND WITH UKRAINE
                    </div>
                    <div className="text-white font-bold text-2xl pt-4">
                        100% OF PROFIT GOES TO SUPPORT UKRAINIANS IN NEED
                    </div>
                </div>
                <div
                    className="relative w-1/2 h-full bg-cover bg-no-repeat rounded-3xl"
                    style={{ backgroundImage: `url(./intro_banner.png)` }}
                ></div>
            </div>
        </div>
    )
}

export default Banner;