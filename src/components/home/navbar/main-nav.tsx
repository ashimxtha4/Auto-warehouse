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

const searchUserCartVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

const MainNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const { ref: searchRef, inView: searchInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.nav className='!bg-white' ref={ref}>
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

              <DropdownMenuContent className='mt-3 flex h-max w-screen flex-col items-center justify-start bg-gray-900'>
                {NAVBAR_ITEMS.map((item, i) => (
                  <MobileMenuItem key={item.key} item={item} index={i} />
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
        </ul>
        <motion.ul
          className='flex items-center gap-2 md:gap-5'
          ref={searchRef}
          initial='hidden'
          animate={searchInView ? 'visible' : 'hidden'}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <motion.div variants={searchUserCartVariants}>
              <SearchBar />
            </motion.div>
          </Suspense>
          <motion.div variants={searchUserCartVariants}>
            <UserCartProfile />
          </motion.div>
        </motion.ul>
      </header>
    </motion.nav>
  )
}

export default MainNavbar
