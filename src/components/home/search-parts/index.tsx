'use client'

import React from 'react'
import SearchForm from './search-form'

const SearchParts = () => {
  return (
    <div className='rounded-lg border p-2'>
      <div className='pb-2 mb-2 border-b'>
        <h3 className='title-text font-bold text-primary-dark'>
          Search by vehicle
        </h3>
        <span className='text-xs text-primary-dark md:text-lg'>
          Filter your results by entering your Vehicle to ensure you find the
          parts that fit.
        </span>
      </div>

      <SearchForm />
    </div>
  )
}

export default SearchParts
