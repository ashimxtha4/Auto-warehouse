import React from 'react'
import UserCart from './user-cart'
import UserProfile from './user-profile'

const UserCartProfile = () => {
  return (
    <div className='flex gap-3 text-blue-600 md:gap-5'>
      <UserCart />
      <UserProfile />
    </div>
  )
}

export default UserCartProfile
