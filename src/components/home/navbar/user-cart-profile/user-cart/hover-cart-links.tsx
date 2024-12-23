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
          className='rounded-lg border bg-white px-2 py-1 text-primary-text/60 transition-all hover:border-[#6EB031] hover:bg-[#D3F2D0] hover:text-primary-text/80'
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default HoverCartLinks
