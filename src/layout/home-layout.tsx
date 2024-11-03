import React from 'react'
import Navbar from '@/components/home/navbar'
import MainNavbar from '@/components/home/navbar/main-nav'
import BannerContent from '@/components/home/banner'

const HomeLayout = () => {
  return (
    <section className=''>
      <div className='z-10 w-full'>
        <Navbar />
        <div style={{ background: '#FFFFF0', opacity: '25' }}>
          <MainNavbar />
        </div>
        <div className='gradient-bg mb-2 flex items-end justify-center text-center text-white sm:mb-0 sm:items-center'>
          <BannerContent />
        </div>
      </div>
    </section>
  )
}

export default HomeLayout
