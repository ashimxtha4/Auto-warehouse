import React from 'react'
import Image from 'next/image'
import mobileService from '@/assets/mobile-service.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const MobileService = () => {
  return (
    <section className='grid grid-cols-1 items-start justify-between gap-5 rounded-2xl lg:grid-cols-2'>
      <aside className='h-full rounded-3xl bg-white p-5 shadow-md relative'>
        <p className='text-3xl font-normal text-primary-text'>
          We come to you! Convenient mobile glass replacement at your doorstep.
        </p>
        <p className='py-5 text-base font-normal text-primary-text/60'>
          Discover our expert services, from windshield replacements to chip{' '}
          repairs, ensuring your vehicle glass is restored to perfection.
        </p>
        <button
          type='button'
          className='flex lg:absolute md:bottom-8 min-w-[50%] items-center justify-between text-nowrap rounded-full bg-primary-text p-2 text-white'
        >
          Book a Mobile service now
          <span className='rounded-full bg-white p-2 text-primary-text'>
            <FaArrowRightLong />
          </span>
        </button>
      </aside>
      <aside>
        <Image
          src={mobileService}
          alt='mobile service'
          className='max-h-[400px] w-full lg:h-full'
        />
      </aside>
    </section>
  )
}

export default MobileService
