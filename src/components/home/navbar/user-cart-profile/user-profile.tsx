import React from 'react'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaUserCircle } from 'react-icons/fa'
import { PROFILE_LINKS } from '@/constants/profile-links'
import LoginModal from './login-modal'
import RegisterModal from './register-modal'

const UserProfile = () => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <button type='button' className='text-base md:text-2xl'>
          <FaUserCircle />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className='absolute -left-[120px] mt-2 rounded-sm bg-white px-2 py-1 dark:bg-gray-800'>
        <div className='flex flex-col'>
          {PROFILE_LINKS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='mb-1 border-b border-b-gray-600 pb-2 text-blue-600 hover:text-blue-800'
            >
              {item.label}
            </Link>
          ))}
          <LoginModal />
          <RegisterModal />
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserProfile
