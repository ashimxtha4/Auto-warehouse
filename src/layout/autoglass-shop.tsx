'use client'
import React from 'react'
// import { usePathname } from 'next/navigation'
// import ProfileLayout from './profile-layout'
import DefaultLayout from './default-layout'
// import AuthLayout from './auth-layout'

const AutoGlassShopLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  // const pathname = usePathname()

  // if (/^\/reset_password_form\/[^/]+$/.test(pathname as string)) {
  //   return <AuthLayout>{children}</AuthLayout>
  // }

  // if (
  //   pathname === '/profile' ||
  //   pathname === '/contact' ||
  //   pathname === '/quote' ||
  //   pathname === '/cart' ||
  //   pathname === '/cart/checkout' ||
  //   pathname === '/about' ||
  //   pathname === '/faqs' ||
  //   pathname === '/shop' ||
  //   pathname === '/get-a-quote' ||
  //   pathname === '/orders' ||
  //   pathname === '/reviews' ||
  //   pathname === '/product'
  // ) {
  //   return <ProfileLayout>{children}</ProfileLayout>
  // }

  return <DefaultLayout>{children}</DefaultLayout>
}

export default AutoGlassShopLayout
