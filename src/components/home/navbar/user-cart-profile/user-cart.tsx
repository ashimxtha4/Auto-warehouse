import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { FaShoppingCart } from 'react-icons/fa'

const UserCart = () => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger>
        <button type='button' className='relative text-base md:text-2xl'>
          <FaShoppingCart />
          <span className='absolute -right-[10px] -top-[10px] rounded-full bg-black/90 px-1 text-xs text-white md:-right-4 md:-top-4 md:px-2 md:text-base'>
            0
          </span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent className='absolute -left-[150px] mt-2 rounded-sm bg-white/90 px-2 py-1 dark:bg-gray-800'>
        <p>No products in the cart.</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default UserCart
