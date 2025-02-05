'use client'

import React from 'react'
import TrustFactors from '@/components/home/trust-factors'
import MobileService from '@/components/home/mobile-service'
import CoverageArea from '@/components/home/coverage-area'
// import UserReview from '@/components/home/review'
import Contact from '@/components/home/contact'

const HomePageSection = ({ children }: { children: React.ReactNode }) => {
  return <section className='container my-2 md:my-4'>{children}</section>
}

const HomePage = () => {
  return (
    <>
      <HomePageSection>
        <TrustFactors />
      </HomePageSection>
      <HomePageSection>
        <MobileService />
      </HomePageSection>
      <HomePageSection>
        <CoverageArea />
      </HomePageSection>
      {/* <HomePageSection>
        <UserReview />
      </HomePageSection> */}
      <HomePageSection>
        <Contact />
      </HomePageSection>
    </>
  )
}

export default HomePage
