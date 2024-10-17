import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import utetruck from '@/assets/vehicles/Ute_and_Truck.png'
import rightLine from '@/assets/skeleton/right-b.png'

const UteTruck = () => {
  return (
    <>
      <Image src={utetruck} alt='Vte and Truck' className='object-cover' />
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

export default UteTruck
