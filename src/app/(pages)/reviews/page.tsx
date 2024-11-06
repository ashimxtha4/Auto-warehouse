import DevelopmentPage from '@/components/development'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DevelopmentPage />
    </Suspense>
  )
}

export default Page
