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
        className='max-h-[400px] max-w-[190px] object-cover'
      />
      <SuvCalloutLines />
    </>
  )
}

export default Suv
