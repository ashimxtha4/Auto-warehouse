import React, { Suspense } from 'react'
import { LoadingSpinner } from '../ui/loading-spinner'

const DevelopmentPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className='container flex h-72 items-center justify-center'>
        <h2 className='text-base font-semibold text-primary-main md:text-2xl'>
          Development is in process
        </h2>
      </div>
    </Suspense>
  )
}

export default DevelopmentPage
