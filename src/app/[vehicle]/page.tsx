import React, { Suspense } from 'react'
import Vehicle from '@/components/home/vehicle'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Type | Auto Glass Shop',
  description: 'Your preferred auto glass shop for all your vehicle glass replacement needs.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Vehicle />
    </Suspense>
  )
}

export default Page
