import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Checkout from '@/components/cart/checkout'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Checkout')

const Page = () => {
  return (
    <div className='container my-2 md:my-4'>
      <Suspense fallback={<LoadingSpinner />}>
        <Checkout />
      </Suspense>
    </div>
  )
}

export default Page
