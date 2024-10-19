import React from 'react'
import Image from 'next/image'
import footerImage from '@/assets/aaa.png'

const AutoglassAlliance = () => {
  return (
    <section className='hidden md:block'>
      <Image
        src={footerImage}
        alt='Australian AutoGlass Industry Alliance'
        className='object-cover'
      />
    </section>
  )
}

export default AutoglassAlliance
