'use client'

import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Slideshow from '@/components/about/slideshow'
import Content from '@/components/about/content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Auto Glass Shop',
  description: 'Over 20 years of experience in the auto glass industry. We are committed to providing the best service and quality products to our customers.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

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
