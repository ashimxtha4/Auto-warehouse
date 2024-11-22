'use client'

import React from 'react'
import FooterContact from './contact'
import QuickLinks from './quick-links'
import FooterInformation from './information'
import FollowUs from './follow-us'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
}

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.footer
      className='gradient-bg w-full'
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={footerVariants}
    >
      <motion.div
        className='container grid grid-cols-1 items-start justify-between gap-y-5 py-2 text-white md:grid-cols-2 md:gap-4 md:py-5 lg:grid-cols-4'
        variants={footerVariants}
      >
        <FooterContact />
        <QuickLinks />
        <FooterInformation />
        <FollowUs />
      </motion.div>
      <motion.p
        className='h-[1px] w-full bg-gray-600'
        variants={footerVariants}
      />
      <motion.p
        className='py-4 text-center text-base font-medium text-white'
        variants={footerVariants}
      >
        Copyright © {new Date().getFullYear()} All rights reserved | Auto Glass
        Shop
      </motion.p>
    </motion.footer>
  )
}

export default Footer
