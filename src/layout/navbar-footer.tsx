'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import HomeLayout from './home'
import Footer from '@/components/footer'
import DesktopNavbar from '@/components/home/navbar/desktop-nav'
import { NAVBAR_ITEMS } from '@/constants/navbar-items'

const NavbarFooterLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  console.log(pathname, 'pathname')

  return (
    <>
      {pathname === '/auth/login' || pathname === '/auth/register' ? (
        <>{children}</>
      ) : pathname === '/profile' ? (
        <>
          {NAVBAR_ITEMS.map(item => (
            <DesktopNavbar key={item.key} item={item} />
          ))}
          {children}
        </>
      ) : (
        <>
          <HomeLayout />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default NavbarFooterLayout
