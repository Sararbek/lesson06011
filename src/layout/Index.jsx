import React from 'react'
import Header from '../components/header/Index'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Index'

const Layout = () => {
  return (
    <>
        {/* Header */}
        <Header/>
        {/* Main */}
        <main>
            <Outlet/>
        </main>
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Layout