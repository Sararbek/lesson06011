import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Index'
import Home from '../pages/home/Index'
import About from '../pages/about/Index'
import Blog from '../pages/blog/Index'
import Cart from '../pages/cart/Index'
import Contact from '../pages/contact/Index'
import Pages from '../pages/pages/Index'
import Shop from '../pages/shop/Index'
import Wishlist from '../pages/wishlist/Index'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/pages' element={<Pages/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default Router