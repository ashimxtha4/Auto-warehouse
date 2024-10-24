import React from 'react'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='bg-gray-500 bg-opacity-45 py-1 text-white'>
      <div className='container flex items-center justify-between'>
        <h1 className='flex flex-col text-nowrap text-sm sm:block md:text-lg lg:text-2xl'>
          Welcome to Autoglass Shop
          <Link
            href='tel:1300-002-345'
            className='flex items-center gap-1 md:gap-2'
          >
            <div className='relative'>
              <div className='absolute h-4 w-4 animate-ping rounded-full bg-red-500'></div>
              <div className='h-4 w-4 rounded-full bg-red-500'></div>
            </div>{' '}
            1300-002-345
          </Link>
        </h1>
        <aside className='flex items-center gap-2 text-xs md:gap-5 md:text-xl'>
          <FaPhone className='text-sm sm:text-2xl md:text-3xl lg:text-4xl' />
          <div className='flex items-center gap-1'>
            <div className='flex flex-col'>
              <Link href='tel:03 9357 5904'>SYD: 02 9756 6887</Link>
              <Link href='tel:03 9357 5904'>MEL: 03 9357 5904</Link>
            </div>
          </div>
        </aside>
      </div>
    </nav>
  )
}

export default Navbar
