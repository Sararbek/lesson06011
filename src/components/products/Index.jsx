import React, { useEffect, useState } from 'react'
import { request } from '../../api/Index'
import { PRODUCT_COLORS } from '../../static/Index'
import { FaCheck } from "react-icons/fa";

const Products = () => {

    const [selectedColor, setSelectedColor] = useState({color: "", productId: ""})
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () =>{
            setLoading(true)
            try{
                const response = await request.get(`/products`, {
                    params: {
                        limit: 8
                    }
                })
                setProducts([...response.data])
                console.log(response.data)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

  return (
    <>
        <div className='grid grid-cols-4 gap-y-16 gap-x-[30px] max-[800px]:grid-cols-2 max-[800px]:px-16 max-sm:px-2 max-[500px]:grid-cols-1 max-[500px]:px-10 '>
             {
                products?.map(product => (
                    <div key={product.id}>
                        <div className='w-full h-[300px] p-6 max-lg:p-2'>
                            <img src={product.image} alt="" className='h-full w-full object-contain' />
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