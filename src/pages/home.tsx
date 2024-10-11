import React from 'react'
import BannerContent from '@/components/banner'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import bannerImg from '@/assets/car.jpg'
import TrustFactors from '@/components/trust-factors'
import MainNavbar from '@/components/navbar/main-nav'

const HomePage = () => {
  return (
    <main>
      <section className='relative'>
        <div className='opacity-85 z-0'>
          <Image
            src={bannerImg}
            alt='auto-glass'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute left-0 top-0 w-full z-10'>
          <Navbar />
          <MainNavbar />
        </div>
        <div className='absolute inset-0 mb-2 flex items-end justify-center text-center text-white sm:mb-0 sm:items-center'>
          <BannerContent />
        </div>
      </section>
      <section className='container my-2 md:my-4'>
        <TrustFactors />
      </section>
    </main>
  )
}

export default HomePage
