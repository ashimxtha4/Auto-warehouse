'use client'

import React from 'react'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className='sticky top-0 z-[999] bg-[#F5FEFD] py-1 text-white'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div>
            <Image
              src={logo}
              alt='auto-glass-shop'
              className='w-20 cursor-pointer object-cover md:w-32'
              onClick={() => router.push('/')}
            />
          </div>
          <h1 className='flex flex-col text-nowrap text-xs text-transparent sm:block md:text-lg lg:text-2xl'>
            <span className='gradient-text font-medium'>Autoglass Shop</span>
            <Link
              href='tel:1300-002-345'
              className='flex items-center gap-1 text-purple-600 md:gap-2'
            >
              1300-002-345
            </Link>
          </h1>
        </div>
        <aside className='flex items-center gap-2 text-xs md:gap-5 md:text-xl'>
          <FaPhone className='inline-flex text-xs sm:text-2xl md:text-3xl lg:text-4xl' />
          <div className='flex items-center gap-1'>
            <div className='flex flex-col text-primary-main'>
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
