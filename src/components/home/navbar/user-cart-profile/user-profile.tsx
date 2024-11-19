import React, { useEffect, useState } from 'react'
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
import AuthDialog from './auth-dialog'

const UserProfile = () => {
  const {
    isRegisterDialogOpen,
    isLoginDialogOpen,
    isHoverCardOpen,
    openRegisterDialog,
    closeRegisterDialog,
    openLoginDialog,
    closeLoginDialog,
    setHoverCardOpen,
    closeAll
  } = useAuthStore()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

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
        className='absolute -left-[130px] mt-2 rounded-sm bg-white px-2 py-1 dark:bg-gray-800'
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
          {!isLoggedIn ? (
            <>
              {' '}
              <AuthDialog
                dialogOpen={isLoginDialogOpen}
                dialogOpenChange={open =>
                  open ? openLoginDialog() : closeLoginDialog()
                }
                triggerButton='Login'
                dialogContent={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
              />
              <AuthDialog
                dialogOpen={isRegisterDialogOpen}
                dialogOpenChange={open =>
                  open ? openRegisterDialog() : closeRegisterDialog()
                }
                triggerButton='Register'
                dialogContent={<RegisterPage />}
              />
            </>
          ) : (
            <button
              type='button'
              onClick={() => {
                closeAll()
                window.localStorage.clear()
                setIsLoggedIn(false)
              }}
              className='mb-1 w-full border-b border-b-gray-600 pb-2 text-start text-gray-900 hover:text-green-900 disabled:cursor-not-allowed disabled:text-gray-500'
            >
              Logout
            </button>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserProfile
