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
      <button type='button' className='text-base md:text-2xl'>
        <FaUserCircle />
      </button>
    </div>
  )
}

export default UserCartProfile
