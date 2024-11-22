import React from 'react'
import { StaticImageData } from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaShoppingCart } from 'react-icons/fa'
import HoverCartLinks from './hover-cart-links'
import { useMyCart } from '@/hooks/cart.hooks'

export type CartDataProps = {
  id: string
  img: StaticImageData
  sku: string
  price: string
}

const UserCart = () => {
  const { products: cartProducts } = useMyCart()
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <button type='button' className='relative text-base md:text-2xl'>
          <FaShoppingCart />
          <span className='absolute -right-[10px] -top-[8px] rounded-full bg-primary-main px-1 text-xs text-white md:-right-4 md:-top-[14px] md:px-2 md:text-base'>
            {cartProducts?.length ?? 0}
          </span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent className='absolute -left-[210px] mt-2 rounded-sm bg-white px-2 py-1 dark:bg-gray-800 md:-left-[100px]'>
        <HoverCartLinks />
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserCart
