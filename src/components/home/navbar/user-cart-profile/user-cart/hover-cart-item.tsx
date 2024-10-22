import React from 'react'
import Image from 'next/image'
import { ImCross } from 'react-icons/im'
import type { CartDataProps } from '.'

const HoverCartItem = ({ item }: { item: CartDataProps }) => {
  return (
    <div className='flex items-center justify-between gap-1 border border-b-gray-700 py-2'>
      <Image
        loading='lazy'
        src={item.img}
        alt='cart-image'
        width={36}
        className='h-auto object-cover'
      />
      <span>{item.sku}</span>
      <span>${item.price}</span>
      <ImCross size={16} className='cursor-pointer text-red-600' />
    </div>
  )
}

export default HoverCartItem
