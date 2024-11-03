'use client'

import React, { useState } from 'react'
import { NAVBAR_ITEMS } from '@/constants/navbar-items'
import DesktopNavbar from './desktop-nav'
import SearchBar from './search-bar'
import UserCartProfile from './user-cart-profile'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '../../ui/dropdown-menu'
import MobileMenuItem from './mobile-menu-item'
import {
  // AiOutlineArrowRight,
  AiOutlineClose,
  AiOutlineMenu
} from 'react-icons/ai'
import Link from 'next/link'

const MainNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const admin = false

  return (
    <nav className='container flex items-center justify-between py-2 font-medium text-primary-main'>
      <Link
        href='/'
        className='flex w-max items-center gap-2 rounded-full px-2 py-1 text-xs font-medium text-primary-main transition-all hover:bg-primary-dark hover:text-white md:text-xl'
      >
        Home
      </Link>
      <ul className='flex items-center gap-2 md:gap-5'>
        {NAVBAR_ITEMS.map(item => (
          <div key={item.key}>
            <DesktopNavbar item={item} />
          </div>
        ))}
        {admin && (
          <Link href='/admin' className='bg-primary-main text-white'>
            ADMIN
          </Link>
        )}
        <SearchBar />
        <UserCartProfile />
        {/* mobile menu */}
        <div className='relative flex lg:hidden'>
          <DropdownMenu
            open={openMenu}
            onOpenChange={() => setOpenMenu(prev => !prev)}
          >
            <DropdownMenuTrigger onClick={() => setOpenMenu(prev => !prev)}>
              {openMenu ? (
                <AiOutlineClose size={16} />
              ) : (
                <AiOutlineMenu size={16} />
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent className='mt-3 flex h-max w-screen flex-col items-center justify-start bg-primary-main/90'>
              {NAVBAR_ITEMS.map((item, i) => (
                <MobileMenuItem key={item.key} item={item} index={i} />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ul>
    </nav>
  )
}

export default MainNavbar
