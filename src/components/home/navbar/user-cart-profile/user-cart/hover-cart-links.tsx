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
          className='rounded-md bg-primary-main px-2 py-1 text-white hover:bg-primary-dark'
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default HoverCartLinks
