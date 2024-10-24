import React from 'react'
import Image from 'next/image'
import bannerImg from '@/assets/car.jpg'
import Navbar from '@/components/home/navbar'
import MainNavbar from '@/components/home/navbar/main-nav'
import BannerContent from '@/components/home/banner'

const HomeLayout = () => {
  return (
    <section className='relative'>
      <div className='z-0 opacity-85'>
        <Image
          loading='lazy'
          src={bannerImg}
          alt='auto-glass'
          className='z-0 h-full w-full object-cover'
        />
      </div>
      <div className='absolute inset-0 z-10 w-full'>
        <Navbar />
        <div style={{ background: '#7eeda1', opacity: '80%' }}>
          <MainNavbar />
        </div>
        <div className='mb-2 flex items-end justify-center text-center text-white sm:mb-0 sm:items-center'>
          <BannerContent />
        </div>
      </div>
    </section>
  )
}

export default HomeLayout
