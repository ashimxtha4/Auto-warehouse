'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const UteCalloutLines = () => {
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
        <span className='circle-dot -left-[62px] top-[168px]' />
        <span className='vehicle-line -left-[174px] top-[171px] w-[120px]' />
        <Link
          href={pathname + '?part=left-front-door'}
          className='callout-line-title -left-[260px] top-[158px]'
        >
          Left Front Door
        </Link>
      </div>
      {/* Right Front door */}
      <div className='absolute'>
        <span className='circle-dot left-[54px] top-[168px]' />
        <span className='vehicle-line left-[56px] top-[171px] w-[120px]' />
        <Link
          href={pathname + '?part=right-front-door'}
          className='callout-line-title left-[144px] top-[156px]'
        >
          Right Front Door
        </Link>
      </div>
      {/* Left Back door */}
      <div className='absolute'>
        <span className='circle-dot -left-[62px] top-[220px]' />
        <span className='vehicle-line -left-[174px] top-[223px] w-[120px]' />
        <Link
          href={pathname + '?part=left-back-door'}
          className='callout-line-title -left-[257px] top-[210px]'
        >
          Left Back Door
        </Link>
      </div>
      {/* Right Back door */}
      <div className='absolute'>
        <span className='circle-dot left-[54px] top-[220px]' />
        <span className='vehicle-line left-[56px] top-[223px] w-[120px]' />
        <Link
          href={pathname + '?part=right-back-door'}
          className='callout-line-title left-[144px] top-[210px]'
        >
          Right Back Door
        </Link>
      </div>
    </>
  )
}

export default UteCalloutLines
