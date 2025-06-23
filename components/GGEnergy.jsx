import Link from 'next/link';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import images from "../constants/images";
import Image from 'next/image';

const GGEnergy = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between px-10 py-4 md:py-8'>
            <Link className='text-xl md:text-5xl font-semibold text-gray-200' href={"/"}>GG Energy</Link>
            <Link className='text-xs md:text-base text-gray-300 font-semibold underline underline-offset-5 decoration-purple-700' href={"/"}>VIEW ALL</Link>
        </div>

        <div className='mb-12 w-full mx-auto overflow-hidden px-4'>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                    {images.ggEnergyImages.map((image, index) => (
                        <CarouselItem className="lg:basis-1/4" key={index}>
                        <div className='flex flex-col items-center text-center p-4'>
                           <div className="relative group w-full h-[400px] overflow-hidden mb-5">
                         <Image
                        src={image.still}
                        alt="GG Energy Still"
                        fill
                       className="object-cover bg-gray-600/20 absolute top-0 left-0 z-10 transition-opacity duration-500 group-hover:opacity-0 group-hover:fade-mask-left"
                        />

                      <Image
                      src={image.hover}
                      alt="GG Energy Hover"
                      fill
                      className="object-cover bg-gray-600/20 absolute top-0 left-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                     />
                      </div>
                      <h3 className='text-lg font-medium text-gray-300'>{image.title}</h3>
                      <p className='text-base text-gray-300'>€{image.price}</p>
                    </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

    </div>
  )
}

export default GGEnergy;