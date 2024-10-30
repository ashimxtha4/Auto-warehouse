'use client'

import React from 'react'
import MyCart from './my-cart'
import { useMyCart } from '@/hooks/cart.hooks'
import OrderSummary from './order-summary'
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
  const { total, ...rest } = useMyCart()

  return (
    <section className='container my-2 flex flex-col gap-2 md:gap-5'>
      <MyCart {...rest} total={total} />
      <OrderSummary total={total} />
    </section>
  )
}

export default CartPage
