import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='container flex h-72 flex-col items-center justify-center gap-y-5'>
      <h2 className='text-base font-semibold text-primary-main md:text-2xl'>
        You don&apos;t have any orders currently.
      </h2>
      <Link
        href='/shop'
        className='rounded-md bg-primary-main px-2 py-1 text-white hover:bg-primary-dark'
      >
        Shop Now
      </Link>
    </div>
  )
}

export default Page
