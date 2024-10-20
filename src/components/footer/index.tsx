'use client'

import React from 'react'
import FooterContact from './contact'
import QuickLinks from './quick-links'
import FooterInformation from './information'
import FollowUs from './follow-us'
import AutoglassAlliance from './autoglass-alliance'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  return (
    <>
      {pathname?.includes('login') || pathname?.includes('register') ? (
        <></>
      ) : (
        <footer className='w-full bg-primary-light'>
          <div className='container grid grid-cols-1 items-start justify-between gap-2 py-2 text-white md:grid-cols-3 md:gap-5 md:py-5 lg:grid-cols-5'>
            <FooterContact />
            <QuickLinks />
            <FooterInformation />
            <FollowUs />
            <AutoglassAlliance />
          </div>
          <p className='pb-1 text-center text-base font-medium text-white md:pb-2'>
            Copyright © {new Date().getFullYear()} Autoglass Shop
          </p>
        </footer>
      )}
    </>
  )
}

export default Footer
