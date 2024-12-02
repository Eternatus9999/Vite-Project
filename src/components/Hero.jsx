import React, { useRef, useState } from 'react'
import Button from './Button';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [loadedVideos, setloadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setloadedVideos((prev) => prev + 1);
    }

    const upcomingVideoindex = (currentIndex % totalVideos) + 1;
    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoindex);
    }

    const getVideoResource = (index) => `videos/Japan-${index}.mp4`
    
    return (    
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video ref={nextVideoRef}
                                src={getVideoResource(upcomingVideoindex)}
                                loop
                                muted
                                id="current-video"
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoResource(currentIndex)}
                        loop
                        muted
                        id="next-viedo"
                        className='absolute-center absolute invisible z-20 size-64 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoResource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        // autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    J<b>a</b>pan
                </h1>
                <div className='absolute top-0 left-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-75'>
                            日本語
                        </h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                            The beauty of Japan
                        </p>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero