import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchParts from '../search-parts'
import car from '@/assets/auto-glass-car.png'
import VehicleParts from './vehicle-parts'

const Vehicle = () => {
  return (
    <>
      <section className='container my-2 md:my-4'>
        <SearchParts />
      </section>
      <section className='container'>
        <span className='my-2 flex w-full justify-center rounded-md bg-primary-desaturate px-2 text-center text-2xl font-medium text-white'>
          Select Your Preferred Glass Type
        </span>
        <div className='relative my-4 flex w-full justify-center'>
          <Image src={car} alt='vehicle' className='h-fit w-fit object-cover' />
          <div className='absolute'>
            <Link href='/mirror' className='absolute h-[1.4px] w-14 bg-black'>
              Mirror
            </Link>
          </div>
        </div>
        <VehicleParts />
      </section>
    </>
  )
}

export default Vehicle
