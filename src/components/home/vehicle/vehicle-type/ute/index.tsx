import React from 'react'
import Image from 'next/image'
import ute from '@/assets/vehicles/Ute.png'
import UteCalloutLines from './ute-callout-lines'

const Ute = () => {
  return (
    <>
      <Image src={ute} alt='Ute' className='object-cover' />
      <UteCalloutLines />
    </>
  )
}

export default Ute
