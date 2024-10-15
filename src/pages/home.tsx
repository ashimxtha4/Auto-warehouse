import React from 'react'
import TrustFactors from '@/components/home/trust-factors'
import SearchParts from '@/components/home/search-parts'

const HomePage = () => {
  return (
    <main>
      <section className='container my-2 md:my-4'>
        <TrustFactors />
      </section>
      <section className='container my-2 md:my-4'>
        <SearchParts />
      </section>
    </main>
  )
}

export default HomePage
