import React, { Suspense } from 'react'
import DevelopmentPage from '@/components/development'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DevelopmentPage />
    </Suspense>
  )
}

export default Page
