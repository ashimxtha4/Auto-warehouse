'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import ProfileLayout from './profile-layout'
import DefaultLayout from './default-layout'
import AuthLayout from './auth-layout'

const AutoGlassShopLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  if (pathname === '/auth/login' || pathname === '/auth/register') {
    return <AuthLayout>{children}</AuthLayout>
  }

  if (
    pathname === '/profile' ||
    pathname === '/contact' ||
    pathname === '/quote' ||
    pathname === '/cart' ||
    pathname === '/cart/checkout'
  ) {
    return <ProfileLayout>{children}</ProfileLayout>
  }

  return <DefaultLayout>{children}</DefaultLayout>
}

export default AutoGlassShopLayout
