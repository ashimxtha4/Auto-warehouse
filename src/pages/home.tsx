'use client'

import React from 'react'
import TrustFactors from '@/components/home/trust-factors'
import StatsSection from '@/components/home/stats'
import ImageCarousel from '@/components/home/image-carousel'
import MobileService from '@/components/home/mobile-service'

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
        <MobileService />
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
