"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages= [
    {imgUrl:'/assets/images/hero-1.svg',alt:'smart-watch'},
    {imgUrl:'/assets/images/hero-2.svg',alt:'bag'},
    {imgUrl:'/assets/images/hero-3.svg',alt:'lamp'},
    {imgUrl:'/assets/images/hero-4.svg',alt:'air fryer'},
    {imgUrl:'/assets/images/hero-5.svg',alt:'chair'}
]

const HeroCarousel = () => {
  return (
    <>
    <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}>
                
        {
            heroImages.map((image)=>(
                <Image 
                src={image.imgUrl}
                alt={image.alt}
                className='object-contain '
                key={image.alt}
                height={484}
                width={284}
                
                />
            ))
        }
    </Carousel>
    <Image 
                src="/assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                className='max-xl:hidden absolute -leftl-[15%] -bottom-0 z-0'
                height={175}
                width={175}
            
                
                />
        </>
  )
}

export default HeroCarousel
