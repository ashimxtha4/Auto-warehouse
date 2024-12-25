import SearchProduct from '@/components/search-product'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import React, { Suspense } from 'react'

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