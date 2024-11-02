import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const OrderSummary = ({ total }: { total: number }) => {
  return (
    <aside className='max-w-[500px] rounded-md border p-4'>
      <h2 className='py-2 text-base font-bold md:text-xl'>Order Summary</h2>
      <div className='mb-6'>
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

      {total ? (
        <Link
          href='/cart/checkout'
          className={cn(
            'rounded-lg border border-primary-main bg-primary-main px-2 py-2 text-white hover:bg-primary-dark'
          )}
        >
          Checkout
        </Link>
      ) : (
        <Button
          disabled
          className='rounded-lg border border-primary-main bg-primary-main px-2 py-2 text-white hover:bg-primary-dark'
        >
          Checkout
        </Button>
      )}
    </aside>
  )
}

export default OrderSummary
