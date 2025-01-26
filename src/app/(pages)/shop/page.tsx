import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { PageMetadata } from '@/utils/meta-data'
import AutoGlassShop from '@/components/shop'

export const metadata: Metadata = PageMetadata('Shop', 'Shop for all your vehicle glass replacement needs.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AutoGlassShop />
    </Suspense>
  )
}

export default Page
