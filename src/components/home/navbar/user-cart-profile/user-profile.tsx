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
import RegisterPage from '@/components/auth/register'
import LoginPage from '@/components/auth/login'
import { useAuthStore } from '@/slice/auth-state-slice'

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
        className='absolute -left-[120px] mt-2 rounded-sm bg-white px-2 py-1 dark:bg-gray-800'
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
          <Dialog
            open={isLoginDialogOpen}
            onOpenChange={open =>
              open ? openLoginDialog() : closeLoginDialog()
            }
          >
            <DialogTrigger asChild>
              <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-gray-900 hover:text-green-900'>
                Login
              </button>
            </DialogTrigger>
            <DialogContent
              id='login-modal'
              style={{ zIndex: '9999' }}
              className='max-w-[290px] sm:max-w-[425px]'
              onInteractOutside={e => e.preventDefault()}
            >
              <LoginPage />
            </DialogContent>
          </Dialog>
          <Dialog
            open={isRegisterDialogOpen}
            onOpenChange={open =>
              open ? openRegisterDialog() : closeRegisterDialog()
            }
          >
            <DialogTrigger asChild>
              <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-gray-900 hover:text-green-900'>
                Register
              </button>
            </DialogTrigger>
            <DialogContent
              id='register-modal'
              style={{ zIndex: '9999' }}
              className='max-w-[290px] sm:max-w-[425px]'
              onInteractOutside={e => e.preventDefault()}
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
