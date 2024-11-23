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
        className='max-h-[330px] max-w-[140px] object-cover md:max-h-[400px] md:max-w-[170px]'
      />
      <UteCalloutLines />
    </>
  )
}

export default Ute
