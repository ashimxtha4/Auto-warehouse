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
        className='max-h-[400px] max-w-[190px] object-cover'
      />
      <VanCalloutLines />
    </>
  )
}

export default Van
