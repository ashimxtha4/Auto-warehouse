import React from 'react'
import Image from 'next/image'
import suv from '@/assets/vehicles/SUV.png'
import SuvCalloutLines from './suv-callout-lines'

const Suv = () => {
  return (
    <>
      <Image src={suv} alt='vehicle' className='object-cover' />
      <SuvCalloutLines />
    </>
  )
}

export default Suv
