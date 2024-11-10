import React from 'react'
import Link from 'next/link'

const HoverCartLinks = () => {
  const cartLinks = [
    { href: '/cart', label: 'My Cart' },
    { href: '/orders', label: 'My Orders' }
  ]

  return (
    <div className='flex flex-col justify-start gap-2 py-2'>
      {cartLinks.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className='rounded-md bg-gray-800 px-2 py-1 text-white transition-all hover:bg-gray-900'
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default HoverCartLinks
