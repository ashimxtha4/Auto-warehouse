import React from 'react'
import Image from 'next/image'
import suv from '@/assets/vehicles/SUV.png'
import SuvCalloutLines from './suv-callout-lines'

const Suv = () => {
  return (
    <>
      <Image
        src={suv}
        alt='vehicle'
        className='max-h-[300px] max-w-[140px] object-cover md:max-h-[400px] md:max-w-[190px]'
      />
      <SuvCalloutLines />
    </>
  )
}

export default Suv
