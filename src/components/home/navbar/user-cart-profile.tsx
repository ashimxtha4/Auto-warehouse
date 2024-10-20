import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const UserCartProfile = () => {
  return (
    <div className='flex gap-3 md:gap-5'>
      <button type='button' className='relative text-base md:text-2xl'>
        <FaShoppingCart />
        <span className='absolute -right-[10px] -top-[10px] rounded-full bg-black/90 px-1 text-xs text-white md:-right-4 md:-top-4 md:px-2 md:text-base'>
          0
        </span>
      </button>

      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger>
          <button type='button' className='text-base md:text-2xl'>
            <FaUserCircle />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className='absolute -left-[100px] mt-2 rounded-sm bg-white/90 px-2 py-1 dark:bg-gray-800'>
          <div className='flex flex-col'>
            <Link
              href='/profile'
              className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
            >
              Profile
            </Link>
            <Link
              href='/orders'
              className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
            >
              My Orders
            </Link>
            <Link
              href='/favourites'
              className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
            >
              Favourites
            </Link>
            <Link
              href='/wishlists'
              className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
            >
              Wishlists
            </Link>
            <Link
              href='/auth/login'
              className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
            >
              Login
            </Link>
            <Link
              href='/auth/register'
              className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
            >
              Register
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default UserCartProfile
