import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Vehicle from '@/components/home/vehicle'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Glass Type', 'Find the right auto glass for your vehicle by filtering by make, model, year, and more. Find exactly what you need with our advanced search filters.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Vehicle />
    </Suspense>
  )
}

export default Page
