'use client'

import React, { useEffect, useState } from 'react'
import { NavItemsProps } from '@/constants/navbar-items'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '../../ui/hover-card'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const DesktopNavbar = ({ item }: { item: NavItemsProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === item.href

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <li className='hidden text-gray-700 lg:block'>
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger>
          <Link
            href={item.href}
            className={cn(
              'flex items-center gap-1 text-nowrap text-base font-medium transition-all hover:scale-x-100 hover:border-b-2 hover:border-green-900 hover:text-gray-950',
              isActive
                ? 'border-b-2 border-primary-main transition-all duration-300'
                : ''
            )}
          >
            {item.label}
            {item.links.length ? <FaChevronDown /> : ''}
          </Link>
        </HoverCardTrigger>
        {item?.links?.length ? (
          <HoverCardContent className='absolute -left-[100px] mt-2 max-h-80 overflow-auto rounded-sm bg-white px-2 py-1 dark:bg-gray-800'>
            <div className='flex flex-col gap-y-1'>
              {item?.links?.map(({ href, label }) => (
                <Link
                  href={href}
                  key={label}
                  className='rounded-lg border bg-white px-2 py-1 text-primary-text/60 transition-all hover:border-[#6EB031] hover:bg-[#D3F2D0] hover:text-primary-text/80'
                >
                  {label}
                </Link>
              ))}
            </div>
          </HoverCardContent>
        ) : (
          ''
        )}
      </HoverCard>
    </li>
  )
}

export default DesktopNavbar
