'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const UteTruckCalloutLines = () => {
  const pathname = usePathname()

  return (
    <>
      {/* WindScreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[140px]' />
        <span className='vehicle-line left-[13px] top-[100px] !h-[45px] w-[2px]' />
        <span className='vehicle-line left-[13px] top-[100px] w-[160px]' />
        <Link
          href={pathname + '?part=windscreen'}
          className='callout-line-title left-[144px] top-[86px]'
        >
          WindScreen
        </Link>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[68px] top-[185px]' />
        <span className='vehicle-line -left-[181px] top-[188px] w-[120px]' />
        <Link
          href={pathname + '?part=left-front-door'}
          className='callout-line-title -left-[260px] top-[174px]'
        >
          Left Front Door
        </Link>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[56px] top-[185px]' />
        <span className='vehicle-line left-[58px] top-[188px] w-[120px]' />
        <Link
          href={pathname + '?part=right-front-door'}
          className='callout-line-title left-[144px] top-[174px]'
        >
          Right Front Door
        </Link>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[68px] top-[233px]' />
        <span className='vehicle-line -left-[181px] top-[236px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-door'}
          className='callout-line-title -left-[257px] top-[222px]'
        >
          Left Back Door
        </Link>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[56px] top-[233px]' />
        <span className='vehicle-line left-[58px] top-[236px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-door'}
          className='callout-line-title left-[144px] top-[222px]'
        >
          Right Back Door
        </Link>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[70px] top-[273px]' />
        <span className='vehicle-line -left-[186px] top-[276px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-vent'}
          className='callout-line-title -left-[254px] top-[262px]'
        >
          Left Back Vent
        </Link>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[58px] top-[273px]' />
        <span className='vehicle-line left-[60px] top-[276px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-vent'}
          className='callout-line-title left-[144px] top-[262px]'
        >
          Right Back Vent
        </Link>
      </div>
      {/* left back quarter */}
      <div className='absolute'>
        <span className='circle-dot -left-[66px] top-[324px]' />
        <span className='vehicle-line -left-[186px] top-[326px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-quarter'}
          className='callout-line-title -left-[276px] top-[312px]'
        >
          Left Back Quarter
        </Link>
      </div>
      {/* right back quarter */}
      <div className='absolute'>
        <span className='circle-dot left-[58px] top-[324px]' />
        <span className='vehicle-line left-[60px] top-[326px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-quarter'}
          className='callout-line-title left-[144px] top-[312px]'
        >
          Right Back Quarter
        </Link>
      </div>
    </>
  )
}

export default UteTruckCalloutLines
