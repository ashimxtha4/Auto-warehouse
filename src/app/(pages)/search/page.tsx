import React, { Suspense } from 'react'
import SearchProduct from '@/components/search-product'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import type { Metadata } from 'next'
import { PageMetadata } from '@/utils/meta-data'

export const metadata: Metadata = PageMetadata('Search Product', 'Search product for all your vehicle glass replacement needs.')

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