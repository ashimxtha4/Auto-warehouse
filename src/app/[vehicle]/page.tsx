import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import Vehicle from '@/components/home/vehicle'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Glass Type', 'Your preferred auto glass shop for all your vehicle glass replacement needs.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Vehicle />
    </Suspense>
  )
}

export default Page
