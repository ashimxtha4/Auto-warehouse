import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BANNER_ITEMS } from '@/constants/banner-items'

const BannerContent = () => {
  return (
    <div className='sm:mt-12'>
      <h2 className='text-base font-normal tracking-wide sm:text-xl md:text-6xl'>
        Honest, Quality Service{' '}
        <span className='block font-bold'>At Affordable Prices</span>
      </h2>
      <div className='flex justify-center md:my-4'>
        {BANNER_ITEMS.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className='mx-1 flex w-max items-center gap-2 rounded-full border-primary-main bg-primary-main px-2 py-1 text-xs font-medium text-white transition-all hover:bg-white hover:text-primary-main sm:mx-2 sm:px-4 sm:py-2 md:text-2xl'
          >
            {item.label}
            <AiOutlineArrowRight />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default BannerContent
