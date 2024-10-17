import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sedan from '@/assets/vehicles/Sedan.png'
import rightLine from '@/assets/skeleton/right-b.png'

const Sedan = () => {
  return (
    <>
      <Image src={sedan} alt='sedan' className='object-cover' />
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

export default Sedan
