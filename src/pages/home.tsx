'use client'

import React from 'react'
import TrustFactors from '@/components/home/trust-factors'
import SearchParts from '@/components/home/search-parts'
import StatsSection from '@/components/home/stats'
import ImageCarousel from '@/components/home/image-carousel'
import BannerContent from '@/components/home/banner'
import MainNavbar from '@/components/home/navbar/main-nav'

const HomePageSection = ({ children }: { children: React.ReactNode }) => {
  return <section className='container my-2 md:my-4'>{children}</section>
}

const HomePage = () => {
  return (
    <main>
      <HomePageSection>
        <TrustFactors />
      </HomePageSection>
      <HomePageSection>
        <ImageCarousel />
      </HomePageSection>
      <HomePageSection>
        <StatsSection />
      </HomePageSection>
    </main>
  )
}

export default HomePage
