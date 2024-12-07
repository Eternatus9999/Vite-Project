import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'

import gsap from 'gsap'

gsap.registerPlugin();

const navItems = ['Home', 'About', 'More Info'];	

const NavBar = () => {
    const [IsAudioPlaying, setIsAudioPlaying] = useState(false);
    const [IsIndicatorActive, setIsIndicatorActive] = useState(false)
    const [LastScrollY, setLastScrollY] = useState(0)
    const [IsNavVisible, setIsNavVisible] = useState(true)

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    const{y:currentScrollY} = useWindowScroll();
    const toggleAudioIndicator=() => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if(currentScrollY > LastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        }else if(currentScrollY < LastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, LastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: IsNavVisible ? 0 : -100,
            opacity: IsNavVisible ? 1 : 0,
            duration: 0.2
        })
    }, [IsNavVisible]);

    useEffect(() => {
        if (IsAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [IsAudioPlaying]);

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
            <div className='flex h-full items-center'>
                <div className='hidden md:block'>
                    {navItems.map((item) => (
                        <a className='nav-hover-btn' key={item} href={`#${item.toLowerCase()}`}>
                            {item}
                        </a>
                    ))}
                </div>

                <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator}>
                    <audio ref={audioElementRef} className='hidden' src="/audio/loop.mp3" loop />
                        {[1,2,3,4].map((bar)=>(
                            <div key={bar} className={`indicator-line ${IsIndicatorActive ? 'active' : ''}`} style={{animationDelay: `${bar * 0.1}s`}}/>
                        ))}
                </button>
            </div>
        </nav>
        </header>
    </div>
  )
}

export default NavBar