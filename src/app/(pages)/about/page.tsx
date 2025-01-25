'use client'

import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Slideshow from '@/components/about/slideshow'
import Content from '@/components/about/content'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className='container mx-auto p-4'>
        <Slideshow />
        <Content />
      </div>
    </Suspense>
  )
}
export default Page
