'use client'

import React from 'react'
import MyCart from './my-cart'
import { useMyCart } from '@/hooks/cart.hooks'
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
    <section className='container my-2 flex flex-col gap-2 md:gap-5 lg:flex-row'>
      <MyCart {...rest} total={total} />
      {/* Checkout Section */}
      <aside className='flex-1 border p-4 lg:ml-4'>
        <h2 className='py-2 text-base font-bold md:text-xl'>Checkout</h2>

        {/* Order Summary */}
        <div className='mb-6'>
          {/* <h3 className='mb-2 text-lg font-medium'>Order Summary</h3> */}
          <div className='flex justify-between'>
            <p>Items Total:</p>
            <p>${total}</p>
          </div>
          <div className='flex justify-between'>
            <p>Shipping:</p>
            <p>$0.00</p>
          </div>
          <div className='flex justify-between font-bold'>
            <p>Total:</p>
            <p>${total}</p>
          </div>
        </div>

        {/* Place Order Button */}
        <button className='w-max rounded-md bg-primary-main px-2 py-2 text-white hover:bg-primary-dark'>
          Checkout
        </button>
      </aside>
    </section>
  )
}

export default CartPage
