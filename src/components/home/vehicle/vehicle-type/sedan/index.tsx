import React from 'react'
import Image from 'next/image'
import sedan from '@/assets/vehicles/Sedan.png'
import SedanCallOutLines from './sedan-callout-lines'

const Sedan = () => {
  return (
    <>
      <Image src={sedan} alt='sedan' className='object-cover' />
      <SedanCallOutLines />
    </>
  )
}

export default Sedan
