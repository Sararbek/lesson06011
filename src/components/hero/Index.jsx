import React from 'react'
import { useContextValue } from '../../context/Index'

import heroBg from "../../assets/001.jpg"

const Hero = () => {
  return (
    <div style={{minHeight: `716px`, background: `linear-gradient(to bottom, #0009, transparent), url(${heroBg}) no-repeat top right / cover`}} className='w-full relative' >
        <div className='container h-full'>
            <div className='space-y-[35px] text-light-text-color absolute top-[50%] translate-y-[-50%] 
            max-sm:text-center max-sm:space-y-5 '>
                <h5 className='heading__h5'>SUMMER 2020</h5>
                <h1 className='text-[58px] font-[800] leading-[80px] tracking-[0.2px]
                 max-sm:text-[40px] max-sm:font-bold max-sm:leading-[57px] max-[400px]:text-[36px] max-[400px]:leading-[48px] '>NEW COLLECTION</h1>
                <h4 className='text-[20px] font-medium leading-[30px] tracking-[0.2px] max-sm:text-center max-sm:mx-auto max-sm:text-white max-w-[60%] text-light-color-1
                 max-sm:max-w-full max-sm:text-base'>
                    We know how large objects will act, 
but things on a small scale.
                </h4>
                <button className='text-2xl font-bold leading-[32px] tracking-[0.1px] uppercase py-[15px] px-[40px] bg-success-color rounded-[5px] duration-200 hover:bg-green-600 active:bg-success-color/60 
                 max-sm:text-base max-sm:py-3 max-sm:px-7 max-[400px]:py-2 '>SHOP NOW</button>
            </div>  
        </div>
    </div>
  )
}

export default Hero