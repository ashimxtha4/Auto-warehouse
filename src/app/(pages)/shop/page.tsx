import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { PageMetadata } from '@/utils/meta-data'
import AutoGlassShop from '@/components/shop'

export const metadata: Metadata = PageMetadata('Shop', 'Browse and shop from our wide selection of premium auto glass products. Secure checkout and fast delivery options available.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AutoGlassShop />
    </Suspense>
  )
}

export default Page
