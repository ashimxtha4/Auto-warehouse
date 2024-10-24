import React from 'react'
import Image from 'next/image'
import ute from '@/assets/vehicles/Ute.png'
import UteCalloutLines from './ute-callout-lines'

const Ute = () => {
  return (
    <>
      <Image
        src={ute}
        alt='Ute'
        className='max-h-[400px] max-w-[170px] object-cover'
      />
      <UteCalloutLines />
    </>
  )
}

export default Ute
