import React from 'react'
import Link from 'next/link'
import { BANNER_ITEMS } from '@/constants/banner-items'
import { cn } from '@/lib/utils'

const BannerContent = () => {
  return (
    <div className='py-4 md:py-16'>
      <h2 className='text-base font-bold tracking-wide sm:text-xl md:text-4xl'>
        Honest, Quality Service{' '}
        <span className='block font-normal'>At Affordable Prices</span>
      </h2>
      <div className='flex justify-center md:my-4'>
        {BANNER_ITEMS.map(item => (
          <div key={item.id}>
            <Link
              href={item.href}
              className={cn(
                'mx-1 flex w-max items-center gap-2 rounded-sm px-2 py-1 text-xs font-medium transition-all sm:mx-2 sm:px-4 sm:py-2 md:text-2xl',
                item.id === '1'
                  ? 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'bg-primary-main text-white hover:bg-white hover:text-primary-main'
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BannerContent
