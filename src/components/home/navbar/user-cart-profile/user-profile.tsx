import React from 'react'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaUserCircle } from 'react-icons/fa'
import { PROFILE_LINKS } from '@/constants/profile-links'
// import RegisterPage from '@/components/auth/register'
// import LoginPage from '@/components/auth/login'
import { useAuthStore } from '@/slice/auth-state-slice'
import { useRouter } from 'next/navigation'
// import AuthDialog from './auth-dialog'
// import OTPDialog from './otp-dialog'
// import ForgotPasswordDialog from './forgot-password-dialog'

const UserProfile = () => {
  const {
    isRegisterDialogOpen,
    isLoginDialogOpen,
    isHoverCardOpen,
    // openRegisterDialog,
    // closeRegisterDialog,
    // openLoginDialog,
    // closeLoginDialog,
    setHoverCardOpen
    // closeAll
  } = useAuthStore()

  const router = useRouter()

  return (
    <HoverCard
      openDelay={100}
      closeDelay={100}
      open={isHoverCardOpen || isLoginDialogOpen || isRegisterDialogOpen}
      onOpenChange={setHoverCardOpen}
    >
      <HoverCardTrigger>
        <button
          type='button'
          className='rounded-full bg-primary-text p-1 text-base md:text-2xl'
        >
          <FaUserCircle
            size={18}
            className='rounded-full border border-white bg-white'
          />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        id='hover-profile-card'
        className='absolute -left-[238px] mt-2 rounded-sm bg-white px-2 py-1 dark:bg-gray-800 lg:-left-[130px]'
      >
        <div className='flex flex-col gap-y-1'>
          {PROFILE_LINKS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-lg border bg-white px-2 py-1 text-primary-text/60 transition-all hover:border-[#6EB031] hover:bg-[#D3F2D0] hover:text-primary-text/80'
            >
              {item.label}
            </Link>
          ))}
          <button
            type='button'
            onClick={() => {
              window.localStorage.clear()
              router.push('/')
            }}
            className='w-full rounded-lg text-start border bg-white px-2 py-1 text-primary-text/60 transition-all hover:border-[#6EB031] hover:bg-[#D3F2D0] hover:text-primary-text/80 disabled:cursor-not-allowed disabled:text-gray-500'
          >
            Logout
          </button>
          {/* {!isLoggedIn ? (
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
              <OTPDialog />
              <ForgotPasswordDialog />
            </>
          ) : (
            <button
              type='button'
              onClick={() => {
                closeAll()
                window.localStorage.clear()
                setIsLoggedIn(false)
              }}
              className='w-full rounded-lg border bg-white px-2 py-1 text-primary-text/60 transition-all hover:border-[#6EB031] hover:bg-[#D3F2D0] hover:text-primary-text/80 disabled:cursor-not-allowed disabled:text-gray-500'
            >
              Logout
            </button>
          )} */}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserProfile
