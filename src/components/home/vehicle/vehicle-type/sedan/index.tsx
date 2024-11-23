import React from 'react'
import Image from 'next/image'
import sedan from '@/assets/vehicles/Sedan.png'
import SedanCallOutLines from './sedan-callout-lines'

const Sedan = () => {
  return (
    <>
      <Image
        src={sedan}
        alt='sedan'
        className='max-h-[300px] max-w-[140px] object-cover md:max-h-[400px] md:max-w-[190px]'
      />
      <SedanCallOutLines />
    </>
  )
}

export default Sedan
