import React, { useRef } from 'react';

import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';

const Story = () => {

    const FrameRef = useRef('null');

    const handleMouseLeave = ()=>{

        const element = FrameRef.current;
        
        gsap.to(element,{
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e)=>{

        const {clientX, clientY} = e;

        const element = FrameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element,{
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>Land of the Rising Sun</p>
            <div className='relative size-full'>
                <AnimatedTitle
                title = 'The St<b>o</b>ry <b>o</b>f j<b>a</b>p<b>a</b>n'
                sectionId = '#story'
                containerClass = 'mt-5 pointer-event-none mix-blend-difference relative z-10'
                />
                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img 
                            ref={FrameRef} 
                            src="/img/entrance.webp" 
                            alt="entrance" 
                            className='object-contain'
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            />
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>
            <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-2 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>
                    In Tokyo, a young girl named Hana found wisdom in a temple garden from Master Takashi, who taught her about Japan's rich culture and traditions.
                    Inspired, she grew up to share these values worldwide. 
                    The legacy of Japan's heritage continued to blossom through her journey.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story