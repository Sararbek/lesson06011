import React from 'react'
import Hero from '../../components/hero/Index'
import { MAIN_CATEGORY, POSTS } from '../../static/Index'
import Products from '../../components/products/Index'

import imgOne from "../../assets/007.png"
import dateIcon from "../../assets/011.png";
import lineIcon from "../../assets/012.png";

import { FcNext } from "react-icons/fc";

const Home = () => {
  return (
    <>
        <Hero/>
        <section className='w-full bg-light-color-1'>
            <div className="container">
                <div className='py-20 space-y-12'>
                    <div className='space-y-2.5 text-center'>
                        <h3 className='uppercase text-2xl font-bold tracking-[0.1px] '>EDITOR’S PICK</h3>
                        <p className=' text-[14px] font-[400] leading-[28px] tracking-[0.2px] text-secondary-text-color '>Problems trying to resolve the conflict between </p>
                    </div>
                    <div className='grid grid-cols-4 grid-rows-2 gap-x-[30px] gap-y-4 max-lg:gap-x-4 max-md:grid-cols-2 max-md:grid-rows-4 max-md:px-24 max-sm:px-1 max-xs:grid-rows-5 '>
                        {
                            MAIN_CATEGORY?.map((item, inx) => (
                                <div key={inx} className={`min-h-[242px] relative ${inx == 0 ? 'col-span-2 row-span-2 ' : inx === 1 ? 'col-span-1 row-span-2 max-[400px]:col-span-2 ' : 'col-span-1 row-span-1 '} `} style={{background: `url(${item.img}) no-repeat center / cover`}}>
                                    <button className={` uppercase text-text-color text-base font-bold tracking-[0.1px] absolute py-3 bg-white bottom-6 ${inx === 0 ? ' left-8 px-[66px] ' : inx == 1 ? ' left-5 px-8 ' : ' left-[14px] px-6 '}`}>{item.title}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20 bg-white'>
            <div className="container">
                <div className='space-y-16'>
                    <div className='space-y-2.5 font-medium trcking-[0.2px] text-center text-secondary-text-color'>
                        <h4 className='text-xl leading-[30px] '>Featured Products</h4>
                        <h3 className='text-2xl font-bold leading-[32px] tracking-[0.1px] text-text-color '>
                            BESTSELLER PRODUCTS
                        </h3>
                        <p className='text-sm leading-[20px]'>
                            Problems trying to resolve the conflict between 
                        </p>
                    </div>
                    <Products/>
                </div>
            </div>
        </section>
        <section className='bg-white'>
            <div className="container">
                <div className='flex items-center gap-x-[110px] max-lg:gap-x-8 max-md:flex-col-reverse gap-y-7'>
                    <div className='max-md:max-w-[70%] max-sm:max-w-full'>
                        <img src={imgOne} alt="" />
                    </div>
                    <div className='space-y-[30px] max-md:text-center'>
                        <h5 className='text-muted-text-color 
                        font-bold tracking-[0.1px] uppercase '>SUMMER 2020</h5>
                        <h2 className='text-text-color text-[40px] 
                        font-bold leading-[57px] tracking-[.2px] max-sm:leading-[48px] '>
                            Part of the Neural Universe
                        </h2>
                        <h4 className='text-secondary-text-color 
                        font-medium text-xl leading-[30px] tracking-[0.2px] max-[400px]:text-base '>
                            We know how large objects will act, 
                            but things on a small scale.
                        </h4>
                        <div className='flex gap-2.5 max-md:justify-center'>    
                            <button className='rounded-[5px] py-[15px] px-10 uppercase text-sm font-bold leading-[28px] tracking-[0.2px] border border-success-color bg-success-color text-light-text-color duration-200 hover:bg-green-600 active:bg-success-color/60 max-sm:text-base max-sm:py-3 max-sm:px-7 max-[400px]:text-sm '>BUY NOW</button>
                            <button className='rounded-[5px] py-[15px] px-10 uppercase text-sm font-bold leading-[28px] tracking-[0.2px] border border-success-color text-success-color duration-200 max-sm:text-base max-sm:py-3 max-sm:px-7 max-[400px]:py-2 '>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='bg-white py-20'>
            <div className='container'>
                <div className='space-y-20'>
                    <div className='space-y-2.5 text-center'>
                        <h6 className='text-sm font-semibold leading-[24px] tracking-[0.2px] text-primary-text-color '>
                            Practice Advice
                        </h6>
                        <h2 className=' text-[40px] font-bold leading-[57px] tracking-[0.2px] text-text-color '>
                            Featured Posts
                        </h2>
                        <p className='text-sm font-medium leading-[20px] tracking-[0.2px] text-secondary-text-color max-w-[50%] mx-auto max-sm:max-w-[90%] '>
                            Problems trying to resolve the conflict between 
                            the two major realms of Classical physics: Newtonian mechanics 
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-x-2.5 gap-y-[30px] max-[900px]:grid-cols-2 max-sm:grid-cols-1 max-sm:px-8 max-xs:px-0 '>
                        {
                            POSTS?.map((item, inx) => (
                                <div key={inx} className='shadow-[0_4px_4px_rgba(0,0,0,0.25)] '>
                                    <div className='relative'>
                                        <img src={item.img} alt="" className='w-full object-cover' />
                                        <span className='absolute uppercase rounded-[3px] bg-danger-color text-light-text-color px-2.5 cursor-pointer 
                                        text-sm font-bold leading-[24x] tracking-[0.2px] top-[20px] left-[20px] '>new</span>
                                    </div>
                                    <div className='p-[25px] space-y-2.5 '>
                                        <ul className='flex items-center gap-[15px]'>
                                            {
                                                item.tabs?.map((tab, inx) => (
                                                    <li key={inx} className={`${inx === 0 && 'text-primary-text-color'}  text-xs tracking-[0.2px] leading-[16px] cursor-pointer `} >{tab}</li>
                                                ))
                                            }
                                        </ul>
                                        <h4 className='text-text-color text-xl leading-[30px] tracking-[0..2px] '>{item.title}</h4>
                                        <p className='text-secondary-text-color text-sm leading-[20px] tracking-[0.2px] '>{item.desc}</p>
                                        <div className='flex items-center justify-between py-[15px]'>
                                            <div className='flex items-center gap-[5px]'>
                                                <span>
                                                    <img src={dateIcon} alt="" className='size-4' />
                                                </span>
                                                <span className='text-xs leading-[16px] text-secondary-text-color '>{item.date}</span>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <span>
                                                    <img src={lineIcon} alt="" className='size-4'/>
                                                </span>
                                                <span className='text-xs leading-[16px] text-secondary-text-color '>{item.commentCount} comments</span>
                                            </div>
                                        </div>
                                        <div className='group flex items-center gap-x-2.5'>   
                                            <button className='text-sm font-bold text-secondary-text-color leading-[24px] '>Learn More</button>
                                            <span className='group-hover:translate-x-2 duration-300 transition-transform'><FcNext/></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home