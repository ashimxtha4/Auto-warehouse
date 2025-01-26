import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Contact from '@/components/contact'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Contact Us', 'Get in touch with us for any inquiries about auto glass products, orders, or support. Our team is ready to assist you with expert advice and quick responses.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Contact />
    </Suspense>
  )
}

export default Page
