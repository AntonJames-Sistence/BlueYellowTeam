const HeroBanner = () => {
    return (
        <div
            className="relative h-screen w-full overflow-hidden bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('./causes-children.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex md:flex-row items-center justify-between">
            <div className="md:w-[60%] space-y-6 pl-5 md:pl-10">
                <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight">
                Stand with Love, Stand with Ukraine
                </h1>
                <p className="text-xl text-white font-semibold">
                100% of the profits go to support Ukrainians in need.
                </p>
                <div className="w-[90%] flex justify-center items-center">
                <Link
                    href="/donate"
                    className="w-full text-center inline-block bg-amber-400 text-white text-3xl font-bold py-3 px-8 rounded-md shadow-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                    Donate Now
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroBanner