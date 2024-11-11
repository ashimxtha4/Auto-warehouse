import React from 'react'
import FooterContact from './contact'
import QuickLinks from './quick-links'
import FooterInformation from './information'
import FollowUs from './follow-us'

const Footer = () => {
  return (
    <footer className='gradient-bg w-full'>
      <div className='container grid grid-cols-1 items-start justify-between gap-2 py-2 text-white md:grid-cols-2 md:gap-4 md:py-5 lg:grid-cols-4'>
        <FooterContact />
        <QuickLinks />
        <FooterInformation />
        <FollowUs />
      </div>
      <p className='my-4 h-[1px] w-full bg-gray-600' />
      <p className='pb-1 text-center text-base font-medium text-white md:pb-2'>
        Copyright © {new Date().getFullYear()} All rights reserved | Auto Glass
        Shop
      </p>
    </footer>
  )
}

export default Footer
