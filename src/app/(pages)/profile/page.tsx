import UserProfile from '@/components/profile'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserProfile />
    </Suspense>
  )
}

export default Page
