'use client'

import React from 'react'
import MyCart from './my-cart'
import { useMyCart } from '@/hooks/cart.hooks'
import OrderSummary from './order-summary'
import { LoadingSpinner } from '../ui/loading-spinner'
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
  const { total, isPending, isLoading, ...rest } = useMyCart()
  const { ref } = useScrollRef(140)

  return (
    <section ref={ref} className='container my-2 flex flex-col gap-2 md:gap-5'>
      {(isLoading || isPending) && <LoadingSpinner />}
      <MyCart {...rest} total={total} />
      <OrderSummary total={total} />
    </section>
  )
}

export default CartPage
