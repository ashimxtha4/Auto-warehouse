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
}

const CartPage = () => {
  const cartProducts = [
    { id: 1, name: 'MRR123', price: 1234, quantity: 1 },
    { id: 2, name: 'MRR124', price: 124, quantity: 1 }
  ]

  const { total, ...rest } = useMyCart(cartProducts)

  return (
    <section className='container my-2 flex flex-col gap-2 md:gap-5'>
      <MyCart {...rest} total={total} />
      <OrderSummary total={total} />
    </section>
  )
}

export default CartPage
