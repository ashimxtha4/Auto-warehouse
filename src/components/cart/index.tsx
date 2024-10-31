'use client'

import React from 'react'
import MyCart from './my-cart'
import { useMyCart } from '@/hooks/cart.hooks'
import OrderSummary from './order-summary'
import { LoadingSpinner } from '../ui/loading-spinner'
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
  const { total, isLoading, ...rest } = useMyCart()

  return (
    <section className='container my-2 flex flex-col gap-2 md:gap-5'>
      {isLoading && <LoadingSpinner />}
      <MyCart {...rest} total={total} />
      <OrderSummary total={total} />
    </section>
  )
}

export default CartPage
