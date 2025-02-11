import React from 'react'
import { useContextValue } from '../../context/Index'
import Products from '../../components/products/Index'

import wishlistImg from "../../assets/013.png"

const Wishlist = () => {

  const {state, dispatch} = useContextValue()

  return (
<div className='pb-20 pt-10'>
<div className='container'>
      {
        state.wishlist.length ?
        <Products productsData={state.wishlist}/>
        : <div className='flex flex-col items-center gap-y-5  '>
            <div className='max-w-[300px] '>
              <img src={wishlistImg} alt="" className='w-full'/>
            </div>
            <div className='text-center space-y-2'>
              <h3 className='heading__h3 text-text-color'>You haven't added anything yet.</h3>
              <p className='font-medium text-secondary-text-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita sit est magni atque consectetur.</p>
            </div>
        </div>
      }
    </div>
</div>
  )
}

export default Wishlist