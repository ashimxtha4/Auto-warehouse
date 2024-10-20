import ProductPage from '@/components/product'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductPage />
    </Suspense>
  )
}

export default Page
