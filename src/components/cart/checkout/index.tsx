import { Button } from '@/components/ui/button'
import React from 'react'

const Checkout = () => {
  return (
    <section className='container my-2 md:my-4'>
      <h2 className='mb-4 text-xl font-semibold'>Checkout</h2>

      {/* Shipping Information */}
      <div className='mb-6'>
        <h3 className='mb-2 text-lg font-medium'>Shipping Information</h3>
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

      {/* Payment Method */}
      <div className='mb-6'>
        <h3 className='mb-2 text-lg font-medium'>Payment Method</h3>
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

      {/* Order Summary */}
      <div className='mb-6 max-w-[500px]'>
        <h3 className='mb-2 text-lg font-medium'>Order Summary</h3>
        <div className='flex justify-between'>
          <p>Items Total:</p>
          <p>$263</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping:</p>
          <p>$5.00</p>
        </div>
        <div className='flex justify-between font-bold'>
          <p>Total:</p>
          <p>$268</p>
        </div>
      </div>

      {/* Place Order Button */}
      <Button className='bg-primary-main text-white hover:bg-primary-dark'>
        Place Order
      </Button>
    </section>
  )
}

export default Checkout
