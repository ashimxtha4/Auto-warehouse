import React, { Suspense } from 'react'
import HomePage from '@/pages/home'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  )
}

export default Page
