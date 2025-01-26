import React, { Suspense } from 'react'
import SearchProduct from '@/components/search-product'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Search Product', 'Search for auto glass products by make, model, year, and more. Find exactly what you need with our advanced search filters.')

const Page = () => {
  return (
    <div className='container my-2 md:my-4'>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchProduct />
      </Suspense>
    </div>
  )
}

export default Page