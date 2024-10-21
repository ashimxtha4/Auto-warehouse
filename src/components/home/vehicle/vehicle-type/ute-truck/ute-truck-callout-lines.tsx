'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const UteTruckCalloutLines = () => {
  const pathname = usePathname()

  return (
    <>
      {/* right mirror */}
      <div className='absolute'>
        <span className='circle-dot left-[135px] top-[250px]' />
        <span className='vehicle-line left-[137px] top-[253px] w-[153px]' />
        <Link
          href={pathname + '?part=right-mirror'}
          className='absolute left-[18rem] top-[14.7rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Mirror
        </Link>
      </div>
      {/* left mirror */}
      <div className='absolute'>
        <span className='circle-dot -left-[150px] top-[250px]' />
        <span className='vehicle-line -left-[300px] top-[253px] w-[153px]' />
        <Link
          href={pathname + '?part=left-mirror'}
          className='absolute -left-[19rem] top-[14.7rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Left Mirror
        </Link>
      </div>
      {/* Front windshield */}
      <div className='absolute'>
        <span className='circle-dot left-[70px] top-[250px]' />
        <span className='vehicle-line left-[73px] top-[178px] !h-[80px] w-[2px]' />
        <span className='vehicle-line left-[73px] top-[176px] w-[210px]' />
        <Link
          href={pathname + '?part=front-windshield'}
          className='absolute left-[17.5rem] top-[10rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Front WindShield
        </Link>
      </div>
      {/* left headlight */}
      <div className='absolute'>
        <span className='circle-dot -left-[120px] top-[95px]' />
        <span className='vehicle-line -left-[299px] top-[97px] w-[180px]' />
        <Link
          href={pathname + '?part=left-headlight'}
          className='absolute -left-[20.8rem] top-[5.2rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Left Headlight
        </Link>
      </div>
      {/* right headlight */}
      <div className='absolute'>
        <span className='circle-dot left-[105px] top-[95px]' />
        <span className='vehicle-line left-[112px] top-[97px] w-[180px]' />
        <Link
          href={pathname + '?part=right-headlight'}
          className='absolute left-[18rem] top-[5.1rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Right Headlight
        </Link>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[120px] top-[322px]' />
        <span className='vehicle-line -left-[288px] top-[325px] w-[170px]' />
        <Link
          href={pathname + '?part=front-left-door'}
          className='absolute -left-[20.6rem] top-[19.4rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Front Left Door
        </Link>
      </div>
      {/* Front Right door */}
      <div className='absolute'>
        <span className='circle-dot left-[106px] top-[322px]' />
        <span className='vehicle-line left-[112px] top-[325px] w-[170px]' />
        <Link
          href={pathname + '?part=front-right-door'}
          className='absolute left-[17.6rem] top-[19.4rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Front Right Door
        </Link>
      </div>
      {/* Back Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[116px] top-[428px]' />
        <span className='vehicle-line -left-[264px] top-[430px] w-[150px]' />
        <Link
          href={pathname + '?part=back-left-door'}
          className='absolute -left-[20.6rem] top-[25.9rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Back Left Door
        </Link>
      </div>
      {/* Back Right door */}
      <div className='absolute'>
        <span className='circle-dot left-[102px] top-[428px]' />
        <span className='vehicle-line left-[108px] top-[430px] w-[170px]' />
        <Link
          href={pathname + '?part=back-right-door'}
          className='absolute left-[17rem] top-[25.8rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Back Right Door
        </Link>
      </div>
      {/* Back left vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[116px] top-[528px]' />
        <span className='vehicle-line -left-[264px] top-[530px] w-[150px]' />
        <Link
          href={pathname + '?part=back-left-vent'}
          className='absolute -left-[20.6rem] top-[32.2rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Back left vent
        </Link>
      </div>
      {/* Back right vent */}
      <div className='absolute'>
        <span className='circle-dot left-[102px] top-[528px]' />
        <span className='vehicle-line left-[108px] top-[530px] w-[170px]' />
        <Link
          href={pathname + '?part=back-right-vent'}
          className='absolute left-[17rem] top-[32.2rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Back right vent
        </Link>
      </div>
      {/* Back windshield */}
      <div className='absolute'>
        <span className='circle-dot left-0 top-[648px]' />
        <span className='vehicle-line left-[3px] top-[650px] !h-[58px] w-[2px]' />
        <span className='vehicle-line left-[5px] top-[706px] w-[270px]' />
        <Link
          href={pathname + '?part=back-windshield'}
          className='absolute left-[16.8rem] top-[43rem] flex items-center text-nowrap rounded-md border-primary-desaturate bg-primary-dark px-2 py-1 text-white hover:bg-primary-main'
        >
          Back WindShield
        </Link>
      </div>
    </>
  )
}

export default UteTruckCalloutLines
