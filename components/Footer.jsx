import React from 'react'

const Footer = () => {
  return (
    <div className="relative bg-gray-700/25 px-8 md:px-20 pt-20 ">
      <div className="relative z-10 flex flex-col gap-4 mb-20">
        <h3 className="text-3xl text-white font-semibold">Newsletter</h3>
        <p className="text-lg text-white">
          Sign up for exclusive deals and early access to new products.
        </p>
        <div className="flex flex-col md:flex-row max-w-sm md:max-w-xl gap-2">
          <input
            type="email"
            className="text-white px-3 py-2 text-sm md:text-base border md:min-w-md border-white hover:border-purple-700 bg-transparent"
            placeholder="Enter your email"
          />
          <button className="text-sm px-2 py-1 md:text-lg text-white font-semibold cursor-pointer bg-purple-700 md:px-4 md:py-2">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className=" p-6 ">
        <div className="flex flex-col md:flex-row gap-8 justify-between text-white">
          <div className="flex flex-col text-xl gap-1">
            <a href="#">Our Ingredients</a>
            <a href="#">Partnerships</a>
            <a href="#">FAQ's</a>
            <a href="#">Military Discount</a>
            <a href="#">Reviews</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex flex-col text-xl gap-1">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Refund Policy</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Fraud Warning</a>
            <a href="#">Brand Protection</a>
          </div>
          <div className="max-w-lg text-sm">
            <p className="uppercase font-semibold mb-1">Our Mission</p>
            <p className='text-lg'>
              Gamer Supps Inc. epitomizes a paradigmatic entity at the intricate
              confluence of gaming nutrition and content creation, meticulously
              engineering products to address the hyper-specific and multifaceted
              demands of a globally dispersed cohort...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;