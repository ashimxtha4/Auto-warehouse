import React, { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { CiShoppingCart } from "react-icons/ci";
import HoverCartLinks from './hover-cart-links'
import { useCartStore } from '@/slice/cart-slice';

export type CartDataProps = {
  id: string
  img: StaticImageData
  sku: string
  price: string
}

const UserCart = () => {
  const { cart, loadCartFromLocalStorage } = useCartStore()

  useEffect(() => {
    loadCartFromLocalStorage()
  }, [loadCartFromLocalStorage])

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <button type='button' className='relative mt-1 text-base md:text-2xl'>
          <CiShoppingCart className='bg-white' size={20} />
          <span className='absolute -right-[16px] -top-[8px] rounded-full px-1 text-xs bg-primary-text text-white md:-right-4 md:-top-[14px] md:px-2 md:text-base'>
            {cart?.length ?? 0}
          </span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent className='absolute -left-[210px] mt-2 rounded-sm bg-white px-2 py-1 dark:bg-gray-800 lg:-left-[100px]'>
        <HoverCartLinks />
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserCart
