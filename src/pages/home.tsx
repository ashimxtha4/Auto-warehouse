import React from 'react'
import TrustFactors from '@/components/home/trust-factors'
import SearchParts from '@/components/home/search-parts'
import StatsSection from '@/components/home/stats'

const HomePageSection = ({ children }: { children: React.ReactNode }) => {
  return <section className='container my-2 md:my-4'>{children}</section>
}

const HomePage = () => {
  return (
    <main>
      <HomePageSection>
        <TrustFactors />
      </HomePageSection>
      <div className='bg-gray-100'>
        <HomePageSection>
          <SearchParts />
        </HomePageSection>
      </div>
      <HomePageSection>
        <StatsSection />
      </HomePageSection>
    </main>
  )
}

export default HomePage
