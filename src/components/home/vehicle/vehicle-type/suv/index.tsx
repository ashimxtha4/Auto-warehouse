import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import suv from '@/assets/vehicles/SUV.png'
// import rightLine from '@/assets/skeleton/right-b.png'

const Suv = () => {
  return (
    <>
      <Image src={suv} alt='vehicle' className='object-cover' />
      {/* right mirror */}
      <div className='absolute'>
        <span className='circle-dot left-[135px] top-[250px]' />
        <span className='vehicle-line left-[137px] top-[253px] w-[153px]' />
        <Link
          href='/mirror'
          className='absolute left-[18rem] top-[14.7rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Mirror
        </Link>
      </div>
      {/* left mirror */}
      <div className='absolute'>
        <span className='circle-dot -left-[150px] top-[250px]' />
        <span className='vehicle-line -left-[300px] top-[253px] w-[153px]' />
        <Link
          href='/mirror'
          className='absolute -left-[24.4rem] top-[14.7rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Left Mirror
        </Link>
      </div>
      {/* left headlight */}
      <div className='absolute'>
        <span className='circle-dot -left-[120px] top-[95px]' />
        <span className='vehicle-line -left-[299px] top-[97px] w-[180px]' />
        <Link
          href='/mirror'
          className='absolute -left-[25.8rem] top-[5.2rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Left Headlight
        </Link>
      </div>
      {/* right headlight */}
      <div className='absolute'>
        <span className='circle-dot left-[105px] top-[95px]' />
        <span className='vehicle-line left-[112px] top-[97px] w-[180px]' />
        <Link
          href='/mirror'
          className='absolute left-[18rem] top-[5.1rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Headlight
        </Link>
      </div>
      {/* right door1 */}
      <div className='absolute'>
        <span className='circle-dot -left-[350px] top-[350px]' />
        <span className='vehicle-line -left-[400px] top-[353px] w-[153px]' />
        <Link
          href='/mirror'
          className='absolute -left-[24.4rem] top-[16.7rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Door1
        </Link>
      </div>
      {/* left door1 */}
      <div className='absolute'>
        <span className='circle-dot left-[350px] top-[150px]' />
        <span className='vehicle-line left-[400px] top-[153px] w-[153px]' />
        <Link
          href='/mirror'
          className='absolute left-[24.4rem] top-[16.7rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Door1
        </Link>
      </div>
    </>
  )
}

export default Suv
