'use client'

import React from 'react'
import TrustFactors from '@/components/home/trust-factors'
import SearchParts from '@/components/home/search-parts'
import StatsSection from '@/components/home/stats'
import ImageCarousel from '@/components/home/image-carousel'
import BannerContent from '@/components/home/banner'

const HomePageSection = ({ children }: { children: React.ReactNode }) => {
  return <section className='container my-2 md:my-4'>{children}</section>
}

const HomePage = () => {
  return (
    <main>
      <div className='gradient-bg py-4'>
        <div className='container'>
          <SearchParts />
        </div>
        <div className='flex items-end justify-center text-center text-white sm:mb-0 sm:items-center'>
          <BannerContent />
        </div>
      </div>
      <HomePageSection>
        <ImageCarousel />
      </HomePageSection>
      <HomePageSection>
        <TrustFactors />
      </HomePageSection>
      <HomePageSection>
        <StatsSection />
      </HomePageSection>
    </main>
  )
}

export default HomePage
