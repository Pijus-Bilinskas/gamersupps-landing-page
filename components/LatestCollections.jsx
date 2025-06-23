import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import images from '@/constants/images'
import Image from 'next/image'

const LatestCollections = () => {
  return (
    <div>
        <h3 className='text-2xl px-1 md:text-5xl font-bold text-center text-gray-100 mb-8'>LATEST COLLECTIONS</h3>

        <div className='mb-12 w-full mx-auto overflow-hidden px-4'>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                {images.latestCollectionImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-[100%] md:basis-1/2 lg:basis-1/4 group">
                        <div className='overflow-hidden relative h-[610px] w-full '>
                            <Image
                            src={image}
                            alt='collection banner'
                            fill
                            className='object-fill  transition-transform duration-500 ease-in-out group-hover:scale-105'
                            />
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    </div>
  )
}

export default LatestCollections