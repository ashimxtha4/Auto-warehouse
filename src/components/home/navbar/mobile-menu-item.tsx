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
        'pb-2 text-center font-medium text-primary-text',
        openItem === index && 'flex-col items-center justify-center text-center'
      )}
      onClick={() => {
        setOpenItem(openItem === index ? null : index)
      }}
    >
      <span className={cn('flex border-primary-text/50 items-center hover:bg-[#D3F2D0] w-[250px] hover:border-primary-main justify-center gap-2 border p-2 rounded-full', openItem === index && item.links.length > 0 && 'bg-[#D3F2D0] border-primary-main')}>
        {item.label}
        {item.links.length ? <FaChevronDown /> : ''}
      </span>
      {openItem === index && item.links.length > 0 ? (
        <div className='w-full rounded-3xl border my-1'>
          {item.links.map(inner => (
            <Link
              key={inner.label}
              href={inner.href}
              className='block w-full border-b border-b-[#B0B0B080]/50 p-2 hover:bg-[#D3F2D0] hover:border-primary-main rounded-full text-primary-text/90 hover:text-primary-text'
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
