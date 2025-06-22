import Image from 'next/image';
import React from 'react'

const InfoCards = () => {
  return (
    <div className="grid h-[800px]  md:h-[600px] grid-cols-1  md:grid-cols-3 gap-4 p-4">
        
      <div className="relative overflow-hidden col-span-1 md:col-span-2 bg-black/80 text-white p-6 ">
      <Image
      src="/images/try-gamersupps-card-1.webp"
      alt='info card background image'
      objectFit='cover'
      fill
      className='absolute z-0 inset-0 opacity-50 transition-transform duraiton-400 hover:scale-110'
      />
      <div className='relative flex flex-col gap-2 max-w-[50%] z-10'>
        <h4 className="text-xs font-semibold uppercase">Give us a try!</h4>
        <h2 className="text-2xl font-bold">Free Samples</h2>
        <p className='text-lg'>Get a sample pack and try 3 flavors for free!</p>
        <a href="#" className="underline underline-offset-4 uppercase font-semibold">Try GG Energy</a>
      </div>
      </div>

      <div className="relative overflow-hidden col-span-1 bg-black/80 text-white p-6 ">
        <Image
      src="/images/gg-energy-1-1.webp"
      alt='info card background image'
      objectFit='cover'
      fill
      className='absolute z-0 inset-0 opacity-50 transition-transform duraiton-400 hover:scale-110'
      />
        <div className='relative flex flex-col gap-2 max-w-[50%] z-10'>
        <h4 className="text-xs font-semibold uppercase">Transparency is the key</h4>
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className='text-lg'>See what our customers are saying about us</p>
        <a href="#" className="underline underline-offset-4 uppercase font-semibold">Explore Reviews</a>
        </div>
      </div>

      <div className="relative overflow-hidden col-span-1 bg-black/80 text-white p-6 ">
        <Image
      src="/images/latest-1.webp"
      alt='info card background image'
      objectFit='cover'
      fill
      className='absolute z-0 inset-0 opacity-50 transition-transform duraiton-400 hover:scale-110'
      />
        <div className='relative flex flex-col gap-2 max-w-[50%] z-10'>
        <h4 className="text-xs font-semibold uppercase">We are here for you</h4>
        <h2 className="text-2xl font-bold">Customer Support</h2>
        <p className='text-lg'>Got questions or need help? Click the purple bubble or send us an email!</p>
        <a href="#" className="underline underline-offset-4 uppercase font-semibold">Contact Us</a>
        </div>
      </div>

      <div className="relative overflow-hidden col-span-1 md:col-span-2 bg-black text-white p-6 ">
        <Image
      src="/images/try-gamersupps-card-2.webp"
      alt='info card background image'
      objectFit='cover'
      fill
      className='absolute z-0 inset-0 opacity-50 transition-transform duraiton-400 hover:scale-110'
      />
        <div className='relative flex flex-col gap-2 max-w-[50%] z-10'>
        <h4 className="text-xs font-semibold uppercase">Get the app!</h4>
        <h2 className="text-2xl font-bold">Do not miss anything!</h2>
        <p className='text-lg'>Download our app and stay up to date with our latest drops!</p>
        <a href="#" className="underline underline-offset-4 uppercase font-semibold">Install Now</a>
        </div>
      </div>

    </div>
  )
}

export default InfoCards;