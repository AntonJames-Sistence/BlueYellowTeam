import './IntroBanner.css';

const IntroBanner = () => {
    return (
        <>
        <div className='banner-box'>
            <div className='banner-content'>
                <video
                    className='background-video'
                    src="./src/components/IntroBanner/flag_bg.mp4"
                    autoPlay
                    loop
                    muted
                    controls={false}
                ></video>
            
                <div className='banner-color'>
                    <div className='banner-left-side'>
                        <div className='stand-title'>STAND WITH LOVE STAND WITH UKRAINE</div>
                        <div className='banner-description'>100% OF PROFIT GOES TO SUPPORT UKRAINIANS IN NEED</div>
                    </div>

                    <div className='banner-right-side'></div>
                </div>
            </div>
        </div>
        {/* <div className='buttons-box'>
                <button className='donate'>hi</button>
                <button className='donate'>hi</button>
                <button className='donate'>hi</button>
                <button className='donate'>hi</button>
        </div> */}
        </>
    )
}

export default IntroBanner;