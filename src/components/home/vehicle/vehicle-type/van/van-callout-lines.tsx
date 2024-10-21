'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { vanCallouts } from './van-callout-data'
import { cn } from '@/lib/utils'

const VanCalloutLines = () => {
  const pathname = usePathname()

  return (
    <>
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
    </>
  )
}

export default VanCalloutLines
