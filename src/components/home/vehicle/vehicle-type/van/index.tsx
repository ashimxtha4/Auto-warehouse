import React from 'react'
import Image from 'next/image'
import van from '@/assets/vehicles/Van.png'
import VanCalloutLines from './van-callout-lines'

const Van = () => {
  return (
    <>
      <Image
        src={van}
        alt='Van'
        className='max-h-[330px] max-w-[140px] object-cover md:max-h-[400px] md:max-w-[190px]'
      />
      <VanCalloutLines />
    </>
  )
}

export default Van
