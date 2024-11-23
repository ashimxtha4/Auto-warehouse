import React from 'react'
import Image from 'next/image'
import utetruck from '@/assets/vehicles/Ute_and_Truck.png'
import UteTruckCalloutLines from './ute-truck-callout-lines'

const UteTruck = () => {
  return (
    <>
      <Image
        src={utetruck}
        alt='Vte and Truck'
        className='max-h-[300px] max-w-[140px] object-cover md:max-h-[400px] md:max-w-[190px]'
      />
      <UteTruckCalloutLines />
    </>
  )
}

export default UteTruck
