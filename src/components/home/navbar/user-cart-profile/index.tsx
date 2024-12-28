import React from 'react'
import UserCart from './user-cart'
import UserProfile from './user-profile'

const UserCartProfile = () => {
  return (
    <div className='flex items-center gap-3 text-gray-900 md:gap-5'>
      <UserCart />
      <UserProfile />
    </div>
  )
}

export default UserCartProfile
