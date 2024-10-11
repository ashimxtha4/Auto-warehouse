'use client'

import React, { useState } from 'react'
// import { Menu } from '@mantine/core'
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import MobileMenuItem from './mobile-menu-item'
import { NAVBAR_ITEMS } from '@/constants/navbar-items'
import DesktopNavbar from './desktop-nav'
import SearchBar from './search-bar'
import UserCartProfile from './user-cart-profile'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../ui/dropdown-menu'
import MobileMenuItem from './mobile-menu-item'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MainNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='bg-[#7a7f7b]/75'>
      <nav className='container flex items-center justify-between py-2 font-medium text-white'>
        <h2>Logo here</h2>
        <ul className='flex items-center gap-2 md:gap-5'>
          {NAVBAR_ITEMS.map(item => (
            <DesktopNavbar key={item.key} item={item} />
          ))}
          <SearchBar />
          <UserCartProfile />
          {/* mobile menu */}
          <div className='relative flex lg:hidden'>
            <DropdownMenu
            open={openMenu}
            onOpenChange={() => setOpenMenu(prev => !prev)}
            >
              <DropdownMenuTrigger onClick={() => setOpenMenu(prev => !prev)} >
                  {openMenu ? (
                    <AiOutlineClose size={16} />
                  ) : (
                    <AiOutlineMenu size={16} />
                  )}
              </DropdownMenuTrigger> 

            <DropdownMenuContent className='mt-2 bg-black/80 flex flex-col justify-start items-center w-screen h-max'>
                {NAVBAR_ITEMS.map((item, i) => (
                  <MobileMenuItem key={item.key} item={item} index={i} />
                ))}
              </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default MainNavbar
