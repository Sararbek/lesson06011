import React, { memo, useEffect, useRef, useState } from 'react'
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { HEADER_LINKS } from '../../static/Index';
import { useContextValue } from '../../context/Index';


const Header = () => {

    const header = useRef(null)
    const [toggleNavbar, setToggleNavbar] = useState(false)
    const {setHeaderHeight} = useContextValue()
    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth > 764){
                setToggleNavbar(true)
            }
        }

        window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

    }, [])

    useEffect(() => {
        setHeaderHeight(header.current?.offsetHeight)
    }, [])

  return (
    <header ref={header} className='max-md:relative'>
        <div className='pt-[9px] pb-[3px] bg-dark-background-color text-light-text-color max-lg:hidden'>
            <div className='header__container'>
                <div className='flex items-center justify-between py-[10px]'>
                    <div className='flex items-center gap-x-2.5 heading__h6'>
                        <div className='flex items-center gap-[5px] px-[10px]'>
                            <BsTelephone className='size-4'/>
                            <span>(225) 555-0118</span>
                        </div>
                        <div className='flex items-center gap-[5px] px-[10px]'>
                            <TfiEmail className='size-4'/>
                            <span>michelle.rivera@example.com</span>
                        </div>
                    </div>
                    <div>
                        <p className='heading__h6 font-bold'>Follow Us  and get a chance to win 80% off</p>
                    </div>
                    <div className='flex items-center px-[10px] gap-2.5'>
                        <div className='heading__h6'>
                            <p>Follow Us  :</p>
                        </div>
                        <ul className='flex items-center gap-2.5 px-[5px]'>
                            <li>
                                <Link><FaInstagram className='size-4'/></Link>
                            </li>
                            <li>
                                <Link><FaYoutube className='size-4'/></Link>
                            </li>
                            <li>
                                <Link><FaFacebook className='size-4'/></Link>
                            </li>
                            <li>
                                <Link><FaTwitter className='size-4'/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-light-text-color pt-3 pb-2 '>
            <div className="header__container ">
                <div className='flex items-center justify-between py-[13px] gap-10 px-[10px] max-sm:px-0'>
                    <div className='max-w-[187px] w-full max-lg:w-auto'>
                         <h3 className='heading__h3'>Bandage</h3>
                    </div>
                    <div className='flex-1 flex items-center justify-between max-md:justify-end  '>
                        <ul className={`flex items-center gap-4 max-md:flex-col max-md:absolute max-md:z-[2] max-md:w-full max-md:bg-white max-md:opacity-0
                        max-md:top-[100%] max-md:right-[0] max-md:py-24 max-md:duration-400 max-sm:py-16 max-md:translate-x-[100%] ${toggleNavbar && 'max-md:opacity-100 max-md:right-[100%] max-md:translate-x-[0] '} `}>
                            {
                                HEADER_LINKS?.map((link, inx) => (
                                   <li key={inx} className={ `${link.name.toLowerCase() === "shop" && "flex items-center gap-2.5"} cursor-pointer link text-secondary-text-color ` }>
                                        <NavLink to={link.pathName}>{link.name}</NavLink>
                                        {
                                            link.name.toLowerCase() === "shop" && <span className='max-md:hidden'><IoIosArrowDown/></span>
                                        }
                                   </li>
                                ))
                            }
                        </ul>
                        <div className='text-primary-text-color flex items-center gap-3 max-md:text-text-color'>
                            <div className='flex items-center gap-[5px] px-4 max-lg:p-1'>
                                <span><FaRegUser className='size-3 max-lg:size-4'/></span>
                                <NavLink className={"link max-lg:hidden"}>Login / Register</NavLink>
                            </div>
                            <div className='flex items-center gap-6 max-lg:gap-4'>
                                <button className=' cursor-pointer'><IoSearchOutline className='size-4'/></button>
                                <button className='flex items-center gap-[5px] cursor-pointer'><BsCart className='size-4'/> <sup>1</sup></button>
                                <button className='flex items-center gap-[5px] cursor-pointer'><GrFavorite className='size-4'/> <sup>1</sup></button>
                                <button onClick={() => setToggleNavbar(prev => !prev)} className='cursor-pointer'><BiMenuAltRight className='hidden size-6 max-md:block'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default memo(Header)