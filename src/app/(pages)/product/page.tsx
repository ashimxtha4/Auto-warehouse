import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import ProductPage from '@/components/product'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Product | Auto Glass Shop',
  description: 'Our product for all your vehicle glass replacement needs.',
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
}

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductPage  />
    </Suspense>
  )
}

export default Page
