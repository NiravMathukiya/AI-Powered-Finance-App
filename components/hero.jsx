"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'


const HeroSection = () => {
    const imageref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100 ;
            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled")
            }else{
                imageElement.classList.remove("scrolled")
            }
            return ()=>{
                window.removeEventListener('scroll', handleScroll)
            }
        }
        const imageElement = imageref.current;
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className='pb-20 px-4 '>
            <div className='container mx-auto text-center '>
                <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-br from-blue-600 to-purple-600 font-extrabold tracking-tighter pr-2  text-transparent bg-clip-text' >Manage Your Finances <br />  With Intelligence</h1>
                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                    An AI-powered financial mangement platform that helps you track analyze , and optimize your spanding with real time Insights.
                </p>
                <div className='flex justify-center space-x-4'>
                    <Link href={"/dashboard"}>
                        <Button size={"lg"} className={"px-8"} >Get Started</Button>
                    </Link>
                    <Link href={"/dashboard"}>
                        <Button size={"lg"} className={"px-8"} variant={"outline"} >Watch Demo</Button>
                    </Link>
                </div>
            </div>
            <div className='hero-image-wrapper' >
                <div ref={imageref} className='hero-image'>
                    <Image src={"/banner.jpg"} width={1280} height={720} alt='dashbord preview' className='rounded-lg shadow-2xl border mx-auto' priority />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
