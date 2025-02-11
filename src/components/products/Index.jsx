import React, { useEffect, useState } from 'react'
import { request } from '../../api/Index'
import { PRODUCT_COLORS } from '../../static/Index'
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { MdOutlineFavoriteBorder, MdOutlineFavorite  } from "react-icons/md";
import { useContextValue } from '../../context/Index';

const Products = ({productsData}) => {

    const [selectedColor, setSelectedColor] = useState({color: "", productId: ""})
    const {state, dispatch} = useContextValue()
    const navigate = useNavigate()
    console.log(state)
  return (
    <>
        <div className='grid grid-cols-4 gap-y-16 gap-x-[30px] max-[800px]:grid-cols-2 max-[800px]:px-16 max-sm:px-2 max-[500px]:grid-cols-1 max-[500px]:px-10 '>
             {
                productsData?.map(product => (
                    <div key={product.id}>
                        <div className='w-full h-[300px] relative p-6 max-lg:p-2 overflow-hidden group'>
                            <img onClick={() => navigate(`/product/${product.id}`)} src={product.image} alt="" className='h-full w-full object-contain group-hover:scale-105 duration-300 cursor-pointer ' />
                            <button onClick={() => dispatch({type: "ADD_WISH", payload: product})} className='absolute top-3 right-3 z-10 p-3 rounded-full text-text-color '>
                                {
                                    state.wishlist.some(item => item.id === product.id )
                                    ? <MdOutlineFavorite className='size-5'/> : <MdOutlineFavoriteBorder className='size-5'/>
                                }
                            </button>
                        </div>
                        <div className='pt-[25px] pb-[35px] space-y-2.5 text-center max-lg:py-3 '>
                            <p className='line-clamp-1 text-text-color font-bold tracking-[0.1px] ' title={product.title}>{product.title}</p>
                            <p className=' text-sm font-semibold  leading-[24px] tracking-[0.2px] text-secondary-text-color '>English Department</p>
                            <p className='text-muted-text-color font-bold tracking-[0.1px] '>${product.price} <span className='ml-[5px] text-secondary-color-1 '>${product.price - Math.floor((product.price * 10) / 100 )}</span></p>
                            <div className='flex justify-center items-center gap-[6.08px]'>
                                {
                                    PRODUCT_COLORS?.map((color, inx) => (
                                        <div key={inx} className='size-4 rounded-full cursor-pointer text-white flex items-center justify-center ' style={{background: `${color}`}} onClick={() => setSelectedColor({color, productId: product.id})}>
                                            {
                                                selectedColor?.productId === product.id && selectedColor?.color === color && <FaCheck className='text-xs'/>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
             }
        </div>
    </>
  )
}

export default Products