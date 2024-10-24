'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
// import { vanCallouts } from './van-callout-data'
// import { cn } from '@/lib/utils'

const VanCalloutLines = () => {
  const pathname = usePathname()

  return (
    <>
      {/* WindScreen */}
      <div className='absolute'>
        <span className='circle-dot left-[10px] top-[97px]' />
        <span className='vehicle-line left-[13px] top-[55px] !h-[45px] w-[2px]' />
        <span className='vehicle-line left-[13px] top-[56px] w-[160px]' />
        <Link
          href={pathname + '?part=windscreen'}
          className='callout-line-title left-[144px] top-[42px]'
        >
          WindScreen
        </Link>
      </div>
      {/* Front Left door */}
      <div className='absolute'>
        <span className='circle-dot -left-[76px] top-[120px]' />
        <span className='vehicle-line -left-[195px] top-[123px] w-[120px]' />
        <Link
          href={pathname + '?part=left-front-door'}
          className='callout-line-title -left-[260px] top-[115px]'
        >
          Left Front Door
        </Link>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[66px] top-[120px]' />
        <span className='vehicle-line left-[68px] top-[123px] w-[120px]' />
        <Link
          href={pathname + '?part=right-front-door'}
          className='callout-line-title left-[144px] top-[115px]'
        >
          Right Front Door
        </Link>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[74px] top-[158px]' />
        <span className='vehicle-line -left-[192px] top-[161px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-door'}
          className='callout-line-title -left-[257px] top-[148px]'
        >
          Left Back Door
        </Link>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[66px] top-[158px]' />
        <span className='vehicle-line left-[68px] top-[161px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-door'}
          className='callout-line-title left-[144px] top-[148px]'
        >
          Right Back Door
        </Link>
      </div>
      {/* left back vent */}
      <div className='absolute'>
        <span className='circle-dot -left-[74px] top-[238px]' />
        <span className='vehicle-line -left-[192px] top-[241px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-vent'}
          className='callout-line-title -left-[254px] top-[226px]'
        >
          Left Back Vent
        </Link>
      </div>
      {/* right back vent */}
      <div className='absolute'>
        <span className='circle-dot left-[67px] top-[238px]' />
        <span className='vehicle-line left-[69px] top-[241px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-vent'}
          className='callout-line-title left-[144px] top-[226px]'
        >
          Right Back Vent
        </Link>
      </div>
      {/* left back quarter */}
      <div className='absolute'>
        <span className='circle-dot -left-[75px] top-[310px]' />
        <span className='vehicle-line -left-[190px] top-[313px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-quarter'}
          className='callout-line-title -left-[276px] top-[298px]'
        >
          Left Back Quarter
        </Link>
      </div>
      {/* right back quarter */}
      <div className='absolute'>
        <span className='circle-dot left-[66px] top-[310px]' />
        <span className='vehicle-line left-[68px] top-[313px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-quarter'}
          className='callout-line-title left-[144px] top-[298px]'
        >
          Right Back Quarter
        </Link>
      </div>
    </>
  )
}

export default VanCalloutLines

{
  /* <>
      {vanCallouts.map(item => (
        <div className='absolute' key={item.href}>
          <span className={cn('circle-dot', item.circleDotClass)} />
          {item?.verticleLineClass && (
            <span className={cn('vehicle-line', item.verticleLineClass)} />
          )}
          <span className={cn('vehicle-line', item.horizontalLineClass)} />
          <Link
            href={pathname + `?part=${item.href}`}
            className={cn('callout-line-title', item.linkClass)}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </>*/
}
