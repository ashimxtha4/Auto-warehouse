'use client'

import React from 'react'
import MyCart from './my-cart'
import OrderSummary from './order-summary'
import { useScrollRef } from '@/hooks/scroll.hooks'

export type CartProductsProps = {
  id: number
  name: string
  price: number
  quantity: number
  stock: {
    syd: boolean
    mel: boolean
  }
}

const CartPage = () => {
  const { ref } = useScrollRef(140)

  return (
    <section ref={ref} className='container my-2 flex flex-col gap-2 md:gap-5'>
      <MyCart />
      <OrderSummary />
    </section>
  )
}

export default CartPage
