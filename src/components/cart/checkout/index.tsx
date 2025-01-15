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
import { Input } from '@/components/ui/input'
import { IconVisaLine } from '@/assets/icon/visa-line'
import { IconPaypal } from '@/assets/icon/paypal'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'

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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 md:mb-6'>
        <aside>
          <FormRowHeader>BILLING DETAILS</FormRowHeader>
          <Separator />
          <div>
            <div className='flex flex-col space-y-2'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                  <Label>Full Name</Label>
                  <Input
                    type='text'
                    placeholder='Full Name'
                    className='rounded-full'
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type='email'
                    placeholder='Email'
                    className='rounded-full'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2'>
                <div>
                  <Label>Address</Label>
                  <Input
                    type='text'
                    placeholder='Address'
                    className='rounded-full'
                  />
                </div>
                <div>
                  <Label>City</Label>
                  <Input
                    type='text'
                    placeholder='City'
                    className='rounded-full'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2'>
                <div>
                  <Label>Postal Code</Label>
                  <Input
                    type='text'
                    placeholder='Postal Code'
                    className='rounded-full'
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    type='text'
                    placeholder='Phone Number'
                    className='rounded-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside>
          <FormRowHeader>PAYMENT DETAILS</FormRowHeader>
          <Separator />
          <div className='grid grid-cols-2 gap-2 my-2'>
            <div className='grid grid-cols-4 items-center gap-2 border border-primary-text/20 p-2 rounded-xl'>
              <Input
                type='radio'
                className='rounded-full'
              />
              <label className='text-primary-text col-span-2 text-base'>Credit Card</label>
              <div className='flex justify-center items-center p-2 border font-medium border-primary-text/20 rounded-2xl'>
                <IconVisaLine className='w-[60px]' />
              </div>
            </div>
            <div className='grid grid-cols-4 items-center gap-2 border border-primary-text/20 p-2 rounded-xl'>
              <Input
                type='radio'
                className='rounded-full'
              />
              <label className='text-primary-text col-span-2 font-medium text-base'>Paypal</label>
              <div className='flex justify-center items-center p-2 border border-primary-text/20 rounded-2xl'>
                <IconPaypal className='w-[60px]' />
              </div>
            </div>
          </div>
          {/* Card Details */}
          <div>
            <Label>Card Number</Label>
            <Input
              type='text'
              placeholder='Card Number'
              className='rounded-full'
            />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 my-2'>
              <div className='col-span-2'>
                <Label>Card Holder Name</Label>
                <Input
                  type='text'
                  placeholder='Card Holder'
                  className='rounded-full'
                />
              </div>
              <div>
                <Label>Expiry Date</Label>
                <Input
                  type='text'
                  placeholder='Expiry Date'
                  className='rounded-full'
                />
              </div>
              <div>
                <Label>CVV</Label>
                <Input
                  type='text'
                  placeholder='CVV'
                  className='rounded-full'
                />
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
          <div className='flex gap-2 justify-start items-center my-2'>
            <Checkbox />
            <p>Ship to a different Address?</p>
          </div>
          <Label className='text-base'>Order Notes (Optional)</Label>
          <Textarea rows={5} placeholder='Notes about your order, special notes for delivery' className='rounded-2xl' />
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
