'use client'

import React, { Suspense } from 'react'
import VehicleParts from '@/components/home/vehicle/vehicle-parts'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useScrollRef } from '@/hooks/scroll.hooks'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop | Auto Glass Shop',
  description: 'Shop for all your vehicle glass replacement needs.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

const Page = () => {
  const { ref } = useScrollRef(140)

  const { vehicle, handlePageChange } = useSearchVehicles()

  return (
    <section ref={ref} className='container my-2 md:my-4'>
      <Suspense fallback={<LoadingSpinner />}>
        <VehicleParts vehicle={vehicle} handlePageChange={handlePageChange} />
      </Suspense>
    </section>
  )
}

export default Page
