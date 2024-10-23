import VehicleParts from '@/components/home/vehicle/vehicle-parts'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <div className='container'>
      <Suspense fallback={<LoadingSpinner />}>
        <VehicleParts />
      </Suspense>
    </div>
  )
}

export default Page
