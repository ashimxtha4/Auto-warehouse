'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
// import ProfileLayout from './profile-layout'
import DefaultLayout from './default-layout'
import AuthLayout from './auth-layout'
import ProfileLayout from './profile-layout'

const AutoGlassShopLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  console.log('pathname', pathname);


  // if (/^\/reset_password_form\/[^/]+$/.test(pathname as string)) {
  //   return <AuthLayout>{children}</AuthLayout>
  // }

  if (
    pathname === '/profile' ||
    pathname === '/contact' ||
    pathname === '/quote' ||
    pathname === '/cart' ||
    pathname === '/cart/checkout' ||
    pathname === '/about' ||
    pathname === '/faqs' ||
    pathname === '/shop' ||
    pathname === '/get-a-quote' ||
    pathname === '/orders' ||
    pathname === '/reviews' ||
    pathname === '/product' ||
    pathname === '/search-product'
  ) {
    return <ProfileLayout pathname={pathname}>{children}</ProfileLayout>
  }

  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/forgot-password' ||
    pathname === '/otp-verification' ||
    pathname?.includes('/reset_password_form/')
  ) {
    return <AuthLayout>{children}</AuthLayout>
  }

  return <DefaultLayout>{children}</DefaultLayout>
}

export default AutoGlassShopLayout
