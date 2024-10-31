import React, { Suspense } from 'react'
import UserOrders from '@/components/orders/user-orders'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserOrders />
    </Suspense>
  )
}

export default Page
