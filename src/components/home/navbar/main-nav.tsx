'use client'

import React, { Suspense, useEffect, useState } from 'react'
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
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const searchUserCartVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

const MainNavbar = () => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  const [navBG, setNavBG] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBG(true)
    } else {
      setNavBG(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  // const { ref: searchRef, inView: searchInView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.3
  // })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.nav
      ref={ref}
      className={cn(
        'container flex items-center justify-between py-2 font-medium',
        navBG ? 'bg-white' : 'bg-transparent'
      )}
    >
      {/* logo */}
      <div>
        <Image
          src={logo}
          alt='auto-glass-shop'
          className='w-20 cursor-pointer object-cover md:w-32'
          onClick={() => router.push('/')}
        />
      </div>

      {/* nav items */}
      <ul className='flex items-center gap-2 rounded-full bg-white p-4 md:gap-5'>
        {navBG && (
          <Button
            type='button'
            variant='default'
            className='rounded-full bg-primary-main p-5 text-base font-semibold text-primary-text hover:bg-primary-main'
          >
            Find Parts
          </Button>
        )}
        {NAVBAR_ITEMS.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 }
              }
            }}
          >
            <DesktopNavbar item={item} />
          </motion.div>
        ))}

        {/* cart search ant user */}
        <Suspense fallback={<LoadingSpinner />}>
          <motion.div variants={searchUserCartVariants}>
            <SearchBar />
          </motion.div>
        </Suspense>
        <motion.div variants={searchUserCartVariants}>
          <UserCartProfile />
        </motion.div>
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

            <DropdownMenuContent className='mt-3 flex h-max w-screen flex-col items-center justify-start bg-gray-900'>
              {NAVBAR_ITEMS.map((item, i) => (
                <MobileMenuItem key={item.key} item={item} index={i} />
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ul>
      {/* <motion.ul
          className='flex items-center gap-2 md:gap-5'
          ref={searchRef}
          initial='hidden'
          animate={searchInView ? 'visible' : 'hidden'}
        ></motion.ul> */}
    </motion.nav>
  )
}

export default MainNavbar
