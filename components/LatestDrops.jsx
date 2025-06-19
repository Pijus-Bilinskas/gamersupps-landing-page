import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'
import images from '@/constants/images'

const LatestDrops = () => {
  return (
    <div className='box-border bg'>
        <div className='flex flex-row items-center my-4 gap-5 justify-center'>
            <h2 className='text-2xl font-semibold text-white'>CHECK OUR LATEST DROPS HERE!</h2>
            <button className='bg-purple-800 text-white text-lg px-3 py-1 font-semibold'>SEE WHAT'S NEW?</button>
        </div>

        <div className='mb-12 w-full mx-auto overflow-hidden px-4'>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                {images.latestImages.map((image) => (
                    <CarouselItem key={image} className="basis-[100%] md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
                       <div className='overflow-hidden relative h-[600px] w-full rounded-lg hover:rounded-none'>
                        <Image
                        src={image}
                        alt='gamer supps banner'
                        fill
                        className='object-cover transition-transform duration-500 hover:scale-105'
                        />
                       </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
  )
}

export default LatestDrops