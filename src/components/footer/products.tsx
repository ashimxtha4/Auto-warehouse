import React from 'react'
import Link from 'next/link'
import { CATEGORY_ITEMS } from '@/constants/vehicle-parts-category'

const Products = () => {
  return (
    <section>
      <h6 className='footer-heading'>PRODUCTS</h6>
      <div className='flex flex-col gap-y-1 md:gap-y-2'>
        {CATEGORY_ITEMS.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className='text-primary-text/60 hover:text-primary-text/70'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products
