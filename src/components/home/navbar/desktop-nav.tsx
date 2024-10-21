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

const DesktopNavbar = ({ item }: { item: NavItemsProps }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <li className='hidden lg:block'>
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger>
          <Link
            href={item.href}
            className='flex items-center gap-1 text-nowrap hover:text-primary-main'
          >
            {item.label}
            {item.links.length ? <FaChevronDown /> : ''}
          </Link>
        </HoverCardTrigger>
        {item?.links?.length ? (
          <HoverCardContent className='absolute -left-[100px] mt-2 max-h-60 overflow-auto rounded-sm bg-white/90 px-2 py-1 dark:bg-gray-800'>
            <div className='flex flex-col'>
              {item?.links?.map(({ href, label }) => (
                <Link
                  href={href}
                  key={label}
                  className='mb-1 border-b border-b-gray-600 pb-2 text-primary-main hover:bg-gray-700 hover:bg-opacity-20 hover:text-primary-dark'
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
