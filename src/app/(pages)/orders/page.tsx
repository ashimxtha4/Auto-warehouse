import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import UserOrders from '@/components/orders/user-orders'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Orders', "Track your orders, view order history, and manage your purchases easily with our auto glass online store's user-friendly order management system.")

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserOrders />
    </Suspense>
  )
}

export default Page
