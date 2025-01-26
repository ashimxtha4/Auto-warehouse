import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Slideshow from '@/components/about/slideshow'
import Content from '@/components/about/content'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata(
  'About Us',
  'Over 20 years of experience in the auto glass industry. We are committed to providing the best service and quality products to our customers.'
)


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
