'use client'

import React, { Suspense, useEffect, useRef } from 'react'
import VehicleParts from '@/components/home/vehicle/vehicle-parts'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useScrollRef } from '@/hooks/scroll.hooks'

const Page = () => {
  const { ref } = useScrollRef(100)

  return (
    <section ref={ref} className='container my-2 md:my-4'>
      <Suspense fallback={<LoadingSpinner />}>
        <VehicleParts />
      </Suspense>
    </section>
  )
}

export default Page
