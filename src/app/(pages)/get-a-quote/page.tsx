import GetAQuote from '@/components/get-a-quote'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GetAQuote />
    </Suspense>
  )
}

export default Page
