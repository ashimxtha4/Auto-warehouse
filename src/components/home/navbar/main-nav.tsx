'use client'

import React, { Suspense, useState } from 'react'
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
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const MainNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='!bg-white'>
      <header className='container flex items-center justify-between py-2 font-medium'>
        <ul className='flex items-start gap-2 md:gap-5'>
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
          {NAVBAR_ITEMS.map(item => (
            <div key={item.key}>
              <DesktopNavbar item={item} />
            </div>
          ))}
        </ul>
        <ul className='flex items-center gap-2 md:gap-5'>
          <Suspense fallback={<LoadingSpinner />}>
            <SearchBar />
          </Suspense>
          <UserCartProfile />
        </ul>
      </header>
    </nav>
  )
}

export default MainNavbar
