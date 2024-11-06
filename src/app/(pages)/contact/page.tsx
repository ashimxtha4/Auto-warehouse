import React, { Suspense } from 'react'
import Contact from '@/components/contact'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Contact />
    </Suspense>
  )
}

export default Page
