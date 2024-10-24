'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SuvCalloutLines = () => {
  const pathname = usePathname()

  return (
    <>
      {/* right mirror */}
      <div className='absolute'>
        <span className='circle-dot left-[70px] top-[133px]' />
        <span className='vehicle-line left-[73px] top-[136px] w-[90px]' />
        <Link
          href={pathname + '?part=right-mirror'}
          className='callout-line-title left-[144px] top-[122px]'
        >
          Right Mirror
        </Link>
      </div>
      {/* left mirror */}
      <div className='absolute'>
        <span className='circle-dot -left-[83px] top-[133px]' />
        <span className='vehicle-line -left-[170px] top-[136px] w-[90px]' />
        <Link
          href={pathname + '?part=left-mirror'}
          className='callout-line-title -left-[230px] top-[123px]'
        >
          Left Mirror
        </Link>
      </div>
      {/* WindScreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[140px]' />
        <span className='vehicle-line left-[13px] top-[100px] !h-[50px] w-[2px]' />
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
        <span className='circle-dot left-[55px] top-[185px]' />
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
        <span className='circle-dot -left-[64px] top-[244px]' />
        <span className='vehicle-line -left-[181px] top-[247px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-door'}
          className='callout-line-title -left-[257px] top-[234px]'
        >
          Left Back Door
        </Link>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[55px] top-[244px]' />
        <span className='vehicle-line left-[58px] top-[247px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-door'}
          className='callout-line-title left-[144px] top-[232px]'
        >
          Right Back Door
        </Link>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[64px] top-[285px]' />
        <span className='vehicle-line -left-[181px] top-[288px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-vent'}
          className='callout-line-title -left-[254px] top-[274px]'
        >
          Left Back Vent
        </Link>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[55px] top-[285px]' />
        <span className='vehicle-line left-[58px] top-[288px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-vent'}
          className='callout-line-title left-[144px] top-[274px]'
        >
          Right Back Vent
        </Link>
      </div>
    </>
  )
}

export default SuvCalloutLines
