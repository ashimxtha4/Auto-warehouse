import React, { Suspense } from 'react'
import CartPage from '@/components/cart'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CartPage />
    </Suspense>
  )
}

export default Page
