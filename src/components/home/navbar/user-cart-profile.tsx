import React from 'react'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const UserCartProfile = () => {
  return (
    <div className='flex gap-3 md:gap-5'>
      <button type='button' className='relative text-base md:text-2xl'>
        <FaShoppingCart />
        <span className='absolute -right-4 -top-4 rounded-full bg-black px-2 text-base text-white'>
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
