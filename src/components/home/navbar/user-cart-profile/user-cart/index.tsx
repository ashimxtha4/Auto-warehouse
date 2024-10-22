import React from 'react'
import { StaticImageData } from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaShoppingCart } from 'react-icons/fa'
import cartImg from '@/assets/default.png'
import HoverCartItem from './hover-cart-item'
import HoverCartLinks from './hover-cart-links'

export type CartDataProps = {
  id: string
  img: StaticImageData
  sku: string
  price: string
}

const UserCart = () => {
  const cartData = [
    {
      id: '1',
      img: cartImg,
      sku: 'MR12',
      price: '49'
    },
    {
      id: '2',
      img: cartImg,
      sku: 'MR13',
      price: '59'
    }
  ]

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <button type='button' className='relative text-base md:text-2xl'>
          <FaShoppingCart />
          <span className='absolute -right-[10px] -top-[10px] rounded-full bg-black/90 px-1 text-xs text-white md:-right-4 md:-top-4 md:px-2 md:text-base'>
            {cartData.length}
          </span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent className='absolute -left-[180px] mt-2 rounded-sm bg-white/90 px-2 py-1 dark:bg-gray-800'>
        {cartData?.length ? (
          cartData.map(item => <HoverCartItem item={item} key={item.id} />)
        ) : (
          <p>No products in the cart.</p>
        )}
        <HoverCartLinks />
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserCart
