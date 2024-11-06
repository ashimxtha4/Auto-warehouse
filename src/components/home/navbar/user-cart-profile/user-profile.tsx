import React from 'react'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaUserCircle } from 'react-icons/fa'
import { PROFILE_LINKS } from '@/constants/profile-links'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LoginPage from '@/components/auth/login'
import RegisterPage from '@/components/auth/register'

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
          <Dialog>
            <DialogTrigger asChild>
              <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-blue-600 hover:text-blue-800'>
                Login
              </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <LoginPage />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-blue-600 hover:text-blue-800'>
                Register
              </button>
            </DialogTrigger>
            <DialogContent
              style={{ zIndex: '9999' }}
              className='sm:max-w-[425px]'
            >
              <RegisterPage />
            </DialogContent>
          </Dialog>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserProfile
