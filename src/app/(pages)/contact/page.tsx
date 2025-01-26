import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Contact from '@/components/contact'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Contact Us', 'Contact us for all your vehicle glass replacement needs.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Contact />
    </Suspense>
  )
}

export default Page
