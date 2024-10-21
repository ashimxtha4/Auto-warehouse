import React from 'react'
import Image from 'next/image'
import van from '@/assets/vehicles/Van.png'
import VanCalloutLines from './van-callout-lines'

const Van = () => {
  return (
    <>
      <Image src={van} alt='Van' className='object-cover' />
      <VanCalloutLines />
    </>
  )
}

export default Van
