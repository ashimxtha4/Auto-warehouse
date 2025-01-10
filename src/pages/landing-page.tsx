import React from 'react'
import BannerContent from '@/components/home/banner'
import MainNavbar from '@/components/home/navbar/main-nav'
import SearchParts from '@/components/home/search-parts'

const LandingPage = () => {
  return (
    <div>
      <section className='fixed top-0 z-[9999] w-full'>
        <MainNavbar />
      </section>
      <div className='flex w-full flex-col gap-4 bg-car-ui bg-cover bg-bottom bg-no-repeat py-4 pt-[7.5rem]'>
        <aside className='container flex items-end justify-start text-center text-white sm:mb-0 sm:items-center'>
          <BannerContent />
        </aside>
        <section className='container'>
          <SearchParts />
        </section>
      </div>
    </div>
  )
}

export default LandingPage
