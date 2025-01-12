'use client'
import React, { Suspense } from 'react'
import { usePathname } from 'next/navigation'
// import ProfileLayout from './profile-layout'
import DefaultLayout from './default-layout'
import AuthLayout from './auth-layout'
import ProfileLayout from './profile-layout'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const AutoGlassShopLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

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
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ProfileLayout pathname={pathname}>{children}</ProfileLayout>
      </Suspense>
    )
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
