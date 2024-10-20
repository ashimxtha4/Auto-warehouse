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
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const MainNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  const admin = false

  return (
    <nav className='container flex items-center justify-between py-2 font-medium text-primary-dark'>
      <div>
        <Image
          src={logo}
          alt='auto-glass-shop'
          className='h-fit w-10 cursor-pointer md:w-14'
          onClick={() => router.push('/')}
        />
      </div>
      <ul className='flex items-center gap-2 md:gap-5'>
        {NAVBAR_ITEMS.map(item => (
          <DesktopNavbar key={item.key} item={item} />
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
