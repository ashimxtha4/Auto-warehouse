import Checkout from '@/components/cart/checkout'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Checkout />
    </Suspense>
  )
}

export default Page
