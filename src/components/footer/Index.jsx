import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { FOOTER_LINKS } from '../../static/Index'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-light-color-1'>
        <div className='container'>
            <div className='py-10'>
                <div className='py-[13px] flex items-center justify-between'>
                    <div>
                        <h3 className='heading__h3'>Bandage</h3>
                    </div>
                    <div className='flex items-center gap-5 text-primary-text-color'>
                        <button className='cursor-pointer'><FaFacebook className='size-6'/></button>
                        <button className='cursor-pointer'><FaInstagram className='size-6'/></button>
                        <button className='cursor-pointer'><FaTwitter className='size-6'/></button>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-[50px] bg-white'>
            <div className='container'>
                <div className='flex items-start justify-between flex-wrap gap-[30px] text-text-color'>
                    {
                        FOOTER_LINKS?.map((arr, inx) => (
                            <ul key={inx} className='space-y-2.5'>
                                <li className='heading__h5 mb-5'>{arr.title}</li>
                                {
                                    arr.links?.map((arrLink, inx) => (
                                        <li key={inx} className='link text-secondary-text-color'>
                                            <Link>{arrLink}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                    <div className='space-y-5'>
                        <p className='heading__h5'>Get In Touch</p>
                        <div>
                            <form onSubmit={e => e.preventDefault()} action="" className='h-[58px] text-sm leading-[28px] flex items-center pl-5 border border-[#E6E6E6] 
                            bg-[#F9F9F9] gap-5 rounded-[5px]'>
                                <input type="text" placeholder='Your Email' 
                                className='outline-none tracking-[0.2px] text-secondary-text-color'/>
                                <button className='text-white bg-primary-text-color h-full px-[22.5px]
                                cursor-pointer rounded-r-[5px] tracking-[0.2px] duration-200 hover:bg-blue-500 active:bg-primary-text-color/60'>Subscribe</button>
                            </form>
                            <p className='tracking-[0.2px] leading-7 text-xs text-secondary-text-color'>Lore imp sum dolor Amit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='py-[25px]'>
                <p className='heading__h6 text-secondary-text-color'>
                    Made With Love By Finland All Right Reserved 
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer