import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const CompanyDetails = () => {
  return (
    <section className='lg:col-span-2'>
      <div className='flex flex-col gap-y-1 md:gap-y-2'>
        <Image
          src={logo}
          alt='logo'
          height={320}
          loading='lazy'
          className='w-32'
        />
        <p className='mt-4 h-[0.5px] w-[60%] bg-primary-text/40 md:w-[50%] lg:w-[40%]' />
        <p className='flex items-center gap-1 py-2 font-medium md:py-5'>
          <span className='flex gap-1'>
            <FaStar className='text-[#E8BA17]' />
            <FaStar className='text-[#E8BA17]' />
            <FaStar className='text-[#E8BA17]' />
            <FaStar className='text-[#E8BA17]' />
            <FaStarHalf className='text-[#E8BA17]' />
          </span>{' '}
          4.5 | 20,921 Reviews
        </p>
        <p className='h-[0.5px] w-[60%] bg-primary-text/40 md:w-[50%] lg:w-[40%]' />
        <p className='py-4 text-start text-sm font-normal text-primary-text/60'>
          Copyright © {new Date().getFullYear()} All rights reserved | Auto
          Glass Shop
        </p>
      </div>
    </section>
  )
}

export default CompanyDetails
