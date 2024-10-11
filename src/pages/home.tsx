import React from 'react'
import BannerContent from '@/components/home/banner'
import Navbar from '@/components/home/navbar'
import Image from 'next/image'
import bannerImg from '@/assets/car.jpg'
import TrustFactors from '@/components/home/trust-factors'
import MainNavbar from '@/components/home/navbar/main-nav'
import SearchParts from '@/components/home/search-parts'

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
          <div className='sticky top-0 bg-white/50'>
          <MainNavbar />
          </div>
        </div>
        <div className='absolute inset-0 mb-2 flex items-end justify-center text-center text-white sm:mb-0 sm:items-center'>
          <BannerContent />
        </div>
      </section>
      <section className='container my-2 md:my-4'>
        <TrustFactors />
      </section>
      <section className='container my-2 md:my-4'>
        <h3>Search by vehicle</h3>
        <span>Filter your results by entering  your Vehicle to ensure you find the parts that fit.</span>
        <div className='border p-2 rounded-lg'>
        <SearchParts />
        </div>
      </section>
    </main>
  )
}

export default HomePage
