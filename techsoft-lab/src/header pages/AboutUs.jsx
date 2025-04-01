import React from 'react'
import Strategy from '../Images/Strategy.jpg'

export default function AboutUs() {
  return (
    <div className='bg-gradient-to-r from-violet-200 to-pink-200 '>
      <div>
        <h2 className="text-center text-black text-xl sm:text-2xl md:text-3xl py-2 font-semibold">
          ABOUT US
        </h2>
      </div>
      <div className="text-center mt-2 sm:mt-4 md:mt-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-snug md:leading-18 uppercase font-bold text-[#292D55] [text-shadow:_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white,_2px_2px_0_white]">
          Your success <br />
          <span className="uppercase font-bold text-[#292D55] [text-shadow:_-2px_-2px_0_white,_2px_-2px_0_white,_-2px_2px_0_white,_2px_2px_0_white]">
            is our success
          </span>
        </h1>
        <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[950px] mx-auto border-4 bg-gradient-to-r from-rose-100 to-teal-100 border-[#292D55] p-3 sm:p-4 md:p-5 rounded-3xl my-3 sm:my-4 md:my-6">
          <p className="text-justify text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 font-semibold">
            Welcome to TechSoft Lab – a leading technology consulting company dedicated to delivering innovative software and hardware solutions. Established in 2025, we combine cutting-edge technology with industry expertise to help businesses of all sizes succeed in an ever-evolving digital world.

            At TechSoft Lab, our mission is simple: Empowering your business with the right technology solutions. We specialize in providing tailored software and hardware products that enhance operational efficiency, streamline processes, and drive business growth.
          </p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-red-100 to-neutral-50 rounded-3xl  p-10'>
          <div className='flex justify-between items-center'>
            <div className='border-8 border-[#292D55] rounded-3xl'>
            <img src={Strategy} alt="" className='rounded-2xl w-[450px]'/>
            </div>
              
          </div>
          
      </div>
    </div>
  )
}
