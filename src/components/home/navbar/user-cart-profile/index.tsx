import React, { useEffect, useState } from 'react'
import UserCart from './user-cart'
import UserProfile from './user-profile'
import Link from 'next/link'

const UserCartProfile = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  return (
    <div className='flex items-center gap-3 text-gray-900 md:gap-5'>
      <UserCart />
      {isLoggedIn ?
        <UserProfile /> : <Link href='/login' className='text-base text-primary-text'>
          LOGIN/REGISTER
        </Link>
      }
    </div>
  )
}

export default UserCartProfile
