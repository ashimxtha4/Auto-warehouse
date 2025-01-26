import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Contact from '@/components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Auto Glass Shop',
  description: 'Contact us for all your vehicle glass replacement needs.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Contact />
    </Suspense>
  )
}

export default Page
