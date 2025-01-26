import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import ProductPage from '@/components/product'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Our Product', 'Explore our extensive range of high-quality auto glass products, including windscreen, flat lam, and more. Find the perfect fit for your vehicle.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductPage />
    </Suspense>
  )
}

export default Page
