import React, { useState } from 'react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { NavItemsProps } from '@/constants/navbar-items'

type MobileMenuItemProps = {
  item: NavItemsProps
  index: number
}

const MobileMenuItem = ({ item, index }: MobileMenuItemProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  return (
    <Link
      href={!item.links.length ? item.href : ''}
      className={cn(
        'pb-2 text-center font-medium text-white',
        openItem === index && 'flex-col items-center justify-center text-center'
      )}
      onClick={() => {
        setOpenItem(openItem === index ? null : index)
      }}
    >
      <span className='flex items-center justify-center gap-2'>
        {item.label}
        {item.links.length ? <FaChevronDown /> : ''}
      </span>
      {openItem === index && item.links.length > 0 ? (
        <div className='w-full'>
          {item.links.map(inner => (
            <Link
              key={inner.label}
              href={inner.href}
              className='block w-full border-b pb-1 text-white'
            >
              {inner.label}
            </Link>
          ))}
        </div>
      ) : (
        ''
      )}
    </Link>
  )
}

export default MobileMenuItem
