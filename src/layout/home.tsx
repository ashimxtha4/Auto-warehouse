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
          src={bannerImg}
          alt='auto-glass'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute left-0 top-0 z-10 w-full'>
        <Navbar />
        <div className='sticky top-0 z-10 w-full bg-white/65'>
          <MainNavbar />
        </div>
      </div>
      <div className='absolute inset-0 mb-2 flex items-end justify-center text-center text-white sm:mb-0 sm:items-center'>
        <BannerContent />
      </div>
    </section>
  )
}

export default HomeLayout
