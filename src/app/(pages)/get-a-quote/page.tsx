import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import GetAQuote from '@/components/get-a-quote'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Get A Quote', 'Request a quote for your desired auto glass products. Fill out our simple form and get pricing details tailored to your requirements.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GetAQuote />
    </Suspense>
  )
}

export default Page
