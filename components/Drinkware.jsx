import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import images from '@/constants/images'
import Image from 'next/image'

const Drinkware = () => {
  return (
    <div>
        <h3 className='text-5xl font-bold text-gray-100 text-center mb-12'>PREMIUM DRINKWARE</h3>

        <div className=' relative w-full mx-auto overflow-hidden'>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent className="px-3">
                    {images.drinkwareImages.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <div className='flex justify-center'>
                                <button className='text-gray-50 font-bold bg-purple-800 hover:bg-purple-900 mb-7 hover:cursor-pointer px-7 py-2'>{image.btnTitle}</button>
                            </div>
                            <div className=' relative h-[520px] md:h-[650px] lg:h-[750px] w-full'>
                                <Image
                                src={image.cup}
                                alt='gamersupps cup'
                                fill
                                className='object-fill transition-transform duration-500 ease-in-out hover:scale-110'
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className='bg-purple-800 py-5 gap-4 flex flex-row justify-center items-center'>
                <h3 className='text-gray-100 font-bold text-2xl'>BECOME A GG PARTNER</h3>
                <button className='text-gray-200 py-3 px-6 font-bold bg-gray-900'>LEARN MORE</button>
            </div>
        </div>
        <div className='w-full h-[400px] md:h-[550px] lg:h-[700px] relative'>
            <video
            src='/videos/gamersupps-creator.mp4'
            muted
            autoPlay
            loop
            playsInline
            className='w-full h-full object-cover'
            />
        </div>
    </div>
  )
}

export default Drinkware