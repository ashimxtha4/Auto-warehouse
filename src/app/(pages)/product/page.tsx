import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import ProductPage from '@/components/product'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Our Product', 'Our product for all your vehicle glass replacement needs.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductPage />
    </Suspense>
  )
}

export default Page
