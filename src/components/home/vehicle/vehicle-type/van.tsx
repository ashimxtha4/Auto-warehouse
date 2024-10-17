import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import van from '@/assets/vehicles/Van.png'
import rightLine from '@/assets/skeleton/right-b.png'

const Van = () => {
  return (
    <>
      <Image src={van} alt='Van' className='object-cover' />
      <div className='absolute'>
        <Link
          href='/mirror'
          className='absolute left-10 top-44 flex items-center'
        >
          <Image src={rightLine} alt='image' className='h-1 w-[200px]' />
          <span>Mirror</span>
        </Link>
      </div>
    </>
  )
}

export default Van
