'use client'

import React from 'react'
import { useMyCart } from '@/hooks/cart.hooks'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import ButtonLoader from '@/utils/button-loader'
import { useCartStore } from '@/slice/cart-slice'
import { useScrollRef } from '@/hooks/scroll.hooks'
import { SectionHeader } from '@/utils/section-header'
import { FormRowHeader, Separator } from '@/components/get-a-quote/get-a-quote-form'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaArrowRightLong } from 'react-icons/fa6'

const OrderSummaryText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex mb-2 justify-between text-primary-text/60 border-b border-b-primary-text/30'>
      {children}
    </div>
  )
}

const Checkout = () => {
  const { isLoading, handleCartCheckout, checkoutPending, router } =
    useMyCart()
  const shippingCost = 5

  const { ref } = useScrollRef(140)

  const { cartTotal, cart } = useCartStore()


  return (
    <section ref={ref} className='bg-white p-2 md:p-6 rounded-3xl shadow-lg'>
      {isLoading && <LoadingSpinner />}
      <SectionHeader className='text-start'>CHECKOUT</SectionHeader>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <aside>
          <FormRowHeader>BILLING DETAILS</FormRowHeader>
          <Separator />
          <div className='mb-6'>
            <div className='flex flex-col space-y-2'>
              <input
                type='text'
                placeholder='Full Name'
                className='rounded-md border border-gray-300 p-2'
              />
              <input
                type='text'
                placeholder='Address'
                className='rounded-md border border-gray-300 p-2'
              />
              <input
                type='text'
                placeholder='City'
                className='rounded-md border border-gray-300 p-2'
              />
              <input
                type='text'
                placeholder='Postal Code'
                className='rounded-md border border-gray-300 p-2'
              />
              <input
                type='text'
                placeholder='Phone Number'
                className='rounded-md border border-gray-300 p-2'
              />
            </div>
          </div>
        </aside>
        <aside>
          <FormRowHeader>PAYMENT DETAILS</FormRowHeader>
          <Separator />
          <div className='mb-6'>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <input
                  type='radio'
                  name='payment'
                  id='credit-card'
                  className='mr-2'
                />
                <label htmlFor='credit-card'>Credit Card</label>
              </div>
              <div className='flex items-center'>
                <input type='radio' name='payment' id='paypal' className='mr-2' />
                <label htmlFor='paypal'>PayPal</label>
              </div>
              <div className='flex items-center'>
                <input type='radio' name='payment' id='cash' className='mr-2' />
                <label htmlFor='cash'>Cash on Delivery</label>
              </div>
            </div>
          </div>
        </aside>
      </div>
      {/* #region SHipping Details and Order Summary */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <aside>
          <FormRowHeader>SHIPPING DETAILS</FormRowHeader>
          <Separator />
        </aside>
        <aside className='bg-[#d3f2d0] p-4 md:p-6 rounded-3xl '>
          <FormRowHeader>ORDER SUMMARY</FormRowHeader>
          <Separator />
          <OrderSummaryText>
            <p>Total no. of Items:</p>
            <p>{cart?.length ?? '0'}</p>
          </OrderSummaryText>
          <OrderSummaryText>
            <p>Subtotal:</p>
            <p>AUD ${cartTotal}</p>
          </OrderSummaryText>
          <OrderSummaryText>
            <p>Shipping:</p>
            <p>AUD ${shippingCost}</p>
          </OrderSummaryText>
          <OrderSummaryText>
            <p>Total:</p>
            <p>AUD ${cartTotal + shippingCost}</p>
          </OrderSummaryText>
          <p className='text-primary-text text-base'>By continuing, you accept to our <Link href='/terms-of-use' className='text-primary-main underline'>Terms And Conditions.</Link> Please note that payments are non-refundable.</p>

          {/* Place Order Button */}
          <div className='flex gap-2'>
            <button type='button' onClick={() => router.push('/search-product')} className='bg-white flex-1 border border-primary-main text-primary-text text-center my-2 mt-4 rounded-full text-base font-medium'>
              SHOP MORE PRODUCTS
            </button>
            <button
              type='button'
              className={cn(
                'w-full flex-1 my-2 mt-4 p-2 pl-5 bg-primary-main font-medium flex justify-between items-center rounded-full text-primary-text hover:bg-primary-main'
              )}
              disabled={checkoutPending}
              onClick={handleCartCheckout}
            >{checkoutPending ? <ButtonLoader /> : 'PROCEED WITH PAYMENT'}
              <span className='bg-primary-text p-2 rounded-full flex justify-between items-center text-primary-main'>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Checkout
