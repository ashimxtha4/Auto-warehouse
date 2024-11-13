import React from 'react'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaUserCircle } from 'react-icons/fa'
import { PROFILE_LINKS } from '@/constants/profile-links'
import RegisterPage from '@/components/auth/register'
import LoginPage from '@/components/auth/login'
import { useAuthStore } from '@/slice/auth-state-slice'
import AuthDialog from './user-cart/auth-dialog'

const UserProfile = () => {
  const {
    isRegisterDialogOpen,
    isLoginDialogOpen,
    isHoverCardOpen,
    openRegisterDialog,
    closeRegisterDialog,
    openLoginDialog,
    closeLoginDialog,
    setHoverCardOpen
  } = useAuthStore()

  return (
    <HoverCard
      openDelay={100}
      closeDelay={100}
      open={isHoverCardOpen || isLoginDialogOpen || isRegisterDialogOpen}
      onOpenChange={setHoverCardOpen}
    >
      <HoverCardTrigger>
        <button type='button' className='text-base md:text-2xl'>
          <FaUserCircle />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        id='hover-profile-card'
        className='absolute -left-[130px] mt-2 max-w-[150px] rounded-sm bg-white px-2 py-1 dark:bg-gray-800 md:-left-[100px]'
      >
        <div className='flex flex-col'>
          {PROFILE_LINKS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='mb-1 border-b border-b-gray-600 pb-2 text-gray-900 hover:text-green-900'
            >
              {item.label}
            </Link>
          ))}
          <AuthDialog
            dialogOpen={isLoginDialogOpen}
            dialogOpenChange={open =>
              open ? openLoginDialog() : closeLoginDialog()
            }
            triggerButton='Login'
            dialogContent={<LoginPage />}
          />
          <AuthDialog
            dialogOpen={isRegisterDialogOpen}
            dialogOpenChange={open =>
              open ? openRegisterDialog() : closeRegisterDialog()
            }
            triggerButton='Register'
            dialogContent={<RegisterPage />}
          />
        </div>
        <button
          type='button'
          onClick={() => {
            openLoginDialog()
            window.localStorage.clear()
          }}
          className='mb-1 w-full border-b border-b-gray-600 pb-2 text-start text-gray-900 hover:text-green-900 disabled:cursor-not-allowed disabled:text-gray-500'
        >
          Logout
        </button>
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserProfile
