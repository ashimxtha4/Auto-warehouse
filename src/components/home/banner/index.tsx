import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BANNER_ITEMS } from '@/constants/banner-items'
import { motion } from 'framer-motion'

const BannerContent = () => {
  return (
    <div className='sm:mt-12'>
      <motion.h2
        className='text-base font-normal tracking-wide sm:text-xl md:text-6xl'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Honest, Quality Service{' '}
        <span className='block font-bold'>At Affordable Prices</span>
      </motion.h2>
      <div className='flex justify-center md:my-4'>
        {BANNER_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className='mx-1 flex w-max items-center gap-2 rounded-full border-primary-main bg-primary-main px-2 py-1 text-xs font-medium text-white transition-all hover:bg-white hover:text-primary-main sm:mx-2 sm:px-4 sm:py-2 md:text-2xl'
            >
              {item.label}
              <AiOutlineArrowRight />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default BannerContent
