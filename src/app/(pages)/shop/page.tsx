import React, { Suspense } from 'react'
import VehicleParts from '@/components/home/vehicle/vehicle-parts'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <section className='container my-2 md:my-4'>
      <Suspense fallback={<LoadingSpinner />}>
        <VehicleParts />
      </Suspense>
    </section>
  )
}

export default Page
