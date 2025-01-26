import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import GetAQuote from '@/components/get-a-quote'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get A Quote | Auto Glass Shop',
  description: 'Get a quote for your vehicle glass replacement.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GetAQuote />
    </Suspense>
  )
}

export default Page
