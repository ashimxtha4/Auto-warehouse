'use client'

import React, { Suspense } from 'react'
import SearchForm from './search-form'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const SearchParts = () => {
  return (
    <div className='relative rounded-lg border p-2'>
      <div className='mb-2 border-b pb-2'>
        <h3 className='title-text font-bold text-primary-dark'>
          Search by vehicle
        </h3>
        <span className='text-xs text-primary-dark md:text-lg'>
          Filter your results by entering your Vehicle to ensure you find the
          parts that fit.
        </span>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <SearchForm />
      </Suspense>
    </div>
  )
}

export default SearchParts
