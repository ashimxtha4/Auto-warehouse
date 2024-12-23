import React from 'react'
import BannerContent from '@/components/home/banner'
import MainNavbar from '@/components/home/navbar/main-nav'
import LoginPage from '@/components/auth/login'
import { usePathname } from 'next/navigation'
import RegisterPage from '@/components/auth/register'

const AuthLandingPage = () => {
  const pathname = usePathname()

  return (
    <div>
      <section className='fixed top-0 z-[9999] w-full'>
        <MainNavbar />
      </section>
      <div className='container flex w-full flex-col items-start justify-start gap-4 bg-car-ui bg-cover bg-bottom bg-no-repeat py-4 pt-[6.5rem] md:gap-10 lg:flex-row'>
        <BannerContent />
        {(pathname === '/login' && <LoginPage />) ||
          (pathname === '/register' && <RegisterPage />)}
      </div>
    </div>
  )
}

export default AuthLandingPage
