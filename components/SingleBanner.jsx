import Image from 'next/image'
import React from 'react'

const SingleBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-12 px-4 overflow-hidden">
      
      <div className="relative w-[180px] h-[300px] md:w-[430px] md:h-[550px] lg:h-[550px] lg:w-[320px] xl:w-[400px] flex-shrink-0">
        <div className="absolute inset-0 z-10 transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/try-gamersupps-card-2.webp"
            alt="Try GamerSupps Image 2"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute top-[40%] left-1/40 -translate-x-1/2 md:top-[28%] w-[120px] sm:w-[300px] md:w-[370px] lg:w-[300px] xl:w-[380px] z-20 transition-transform duration-300 hover:scale-105 rotate-[-10deg]">
          <Image
            src="/images/try-gamersupps-card-1.webp"
            alt="Try GamerSupps Image 1"
            width={400}
            height={450}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:max-w-sm xl:max-w-lg">
        <h3 className="text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
          Try Gamer Supps For Free
        </h3>
        <p className="mb-6 text-lg font-medium text-gray-300">
          Sign up today, enter your favorite creator's promo code, and enjoy free samples on us!
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300">
          SHOP NOW!
        </button>
      </div>
    </div>
  )
}

export default SingleBanner