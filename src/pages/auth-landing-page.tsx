import React from 'react'
import BannerContent from '@/components/home/banner'
import MainNavbar from '@/components/home/navbar/main-nav'
import LoginPage from '@/components/auth/login'
import { usePathname } from 'next/navigation'
import RegisterPage from '@/components/auth/register'
import ForgotPasswordPage from '@/components/auth/forgot-password'
import ResetPasswordForm from '@/components/auth/reset-password-form'
import path from 'path'
import OtpVerification from '@/components/auth/otp-verification'

const AuthLandingPage = () => {
  const pathname = usePathname()

  return (
    <div>
      <section className='fixed top-0 z-[9999] w-full'>
        <MainNavbar />
      </section>
      <div className='flex w-full flex-col items-start justify-start gap-4 bg-car-ui bg-cover bg-bottom bg-no-repeat py-4 pt-[6.5rem] md:gap-10 lg:flex-row'>
        <aside className='container flex items-end justify-center text-center text-white sm:mb-0 sm:items-center lg:justify-start'>
          <BannerContent />
        </aside>
        <aside className='container'>
          {(pathname === '/login' && <LoginPage />) ||
            (pathname === '/register' && <RegisterPage />) ||
            (pathname === '/forgot-password' && <ForgotPasswordPage />) ||
            (pathname === '/reset-password' && <ResetPasswordForm />) ||
            (pathname === '/otp-verification' && <OtpVerification />)}
        </aside>
      </div>
    </div>
  )
}

export default AuthLandingPage
