import React from 'react'
import Image from 'next/image'
import utetruck from '@/assets/vehicles/Ute_and_Truck.png'
import UteTruckCalloutLines from './ute-truck-callout-lines'

const UteTruck = () => {
  return (
    <>
      <Image src={utetruck} alt='Vte and Truck' className='object-cover' />
      <UteTruckCalloutLines />
    </>
  )
}

export default UteTruck
