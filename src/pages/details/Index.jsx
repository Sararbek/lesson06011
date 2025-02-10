import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GrNext, GrPrevious } from "react-icons/gr";
import { request } from '../../api/Index';
import { FaRegStar } from "react-icons/fa6";
import { PRODUCT_COLORS } from '../../static/Index';
import { BsCart } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

const Details = () => {

    const [singleProduct, setSingleProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try{
                const response = await request.get(`/products/${id}`)
                setSingleProduct(response.data)
                console.log(response)
            }catch(error){

            }finally{

            }
        }

        fetchSingleProduct()
    }, [id])

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }, [])

  return (
    <section className='bg-light-color-1 pb-[52px] '>
        <div className="container">
            <div className='py-[34px] flex items-center gap-[15px] '>
                <p className='link text-text-color'>Home</p>
                <span className='text-secondary-text-color'><GrNext/></span>
                <p className='text-secondary-text-color text-sm font-semibold leading-[24px] tracking-[0.2px] '>Shop</p>
            </div>
            <div className='flex items-start gap-[30px]'>
                <div className='space-y-5'>
                    <div className='relative w-[506px] h-[450px] bg-white p-6'>
                        <img src={singleProduct?.image} alt="" className=' w-full h-full object-contain ' />
                        <div className='absolute z-[2px] top-[50%] translate-y-[-50%] flex justify-between w-full left-0 px-4 '>
                            <button><GrPrevious className='w-6 h-11'/></button>
                            <button><GrNext className='w-6 h-11'/></button>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='h-[75px] bg-white'>
                            <img src={singleProduct?.image} alt="" className='h-full w-full object-contain' />
                        </div>
                        <div className='h-[75px] bg-white'>
                            <img src={singleProduct?.image} alt="" className='h-full w-full object-contain' />
                        </div>
                    </div>
                </div>
                <div className='p-6 pt-3 space-y-7'>
                    <div className='space-y-8 pb-7 border-b border-muted-text-color  '>
                        <div className='space-y-5'>
                        <div className='space-y-3'>
                            <h4 className='text-xl font-medium leading-[30px] tracking-[0.2px] text-text-color '>{singleProduct?.title}</h4>
                            <div className='flex items-center gap-2.5'>
                                <ul className='flex items-center gap-2.5 '>
                                    {
                                        Array(5).fill().map((_, inx) => (
                                            <li key={inx}>  
                                                <FaRegStar className='size-6 text-[#F3CD03] '/>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className='text-sm leading-[24px] font-bold tracking-[0.2px] text-secondary-text-color'>10 reviews</p>
                            </div>
                        </div>
                        <div className='space-y-[5px]'>
                            <h3 className='heading__h3 text-text-color '>${singleProduct?.price}</h3>
                            <p className=' text-sm font-bold leading-[24px] tracking-[0.2px] text-secondary-text-color '>Availability : <span className='text-primary-text-color'>In stock</span></p>
                        </div>
                        </div>
                        <div>
                            <p className='paragraph line-clamp-3 ' title={singleProduct?.description}>
                                {singleProduct?.description}
                            </p>
                        </div>
                    </div>
                    <div className='space-y-[67px]'>
                        <div className='flex items-center gap-2.5 '>
                            {
                                PRODUCT_COLORS?.map((color, inx) => (
                                    <div key={inx} className=' w-[30px] h-[30px] rounded-full cursor-pointer ' style={{background: color}} ></div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <button className='text-sm font-bold leading-[24px] tracking-[0.2px] text-light-text-color px-5 h-11 rounded-[5px] bg-primary-text-color duration-200 hover:bg-primary-text-color/60 active:bg-blue-600 '>Select Options</button>
                            <button className=' size-10 rounded-full bg-white border border-muted-text-color flex items-center justify-center '><MdFavoriteBorder className='size-5' /></button>
                            <button className=' size-10 rounded-full bg-white border border-muted-text-color flex items-center justify-center '><BsCart className='size-5' /></button>
                            <button className=' size-10 rounded-full bg-white border border-muted-text-color flex items-center justify-center '><MdVisibility className='size-5' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details