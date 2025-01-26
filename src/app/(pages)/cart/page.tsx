import React, { Suspense } from 'react'
import CartPage from '@/components/cart'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Cart', 'View and manage your selected auto glass products. Adjust quantities, remove items, and proceed to a seamless checkout experience with secure payment options.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CartPage />
    </Suspense>
  )
}

export default Page
