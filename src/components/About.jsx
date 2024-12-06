import { useGSAP } from '@gsap/react'
import React from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);


const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path',{
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })
  return (
    <div id="about" className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Japan</h2>
            
            <AnimatedTitle title={"Disc<b>o</b>ver The L<b>a</b>nd <b>o</b>f the Rising Sun"} containerClass={'mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] !text-black'}/>
            
            <div className='about-subtext'>
                <p>
                Welcome to our journey through Japan, a country where ancient traditions blend seamlessly with cutting-edge technology
                </p>
                <p>
                Japan, an island nation in East Asia, is renowned for its rich culture, historical heritage, and breathtaking natural landscapes
                </p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                src='img/about.webp' 
                alt='Background'
                className='absolute top-0 left-0 size-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default About