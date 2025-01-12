'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from '../ui/card'
import Link from 'next/link'
import defaultImage from '@/assets/default.png'
import { SectionHeader } from '@/utils/section-header'
import { cn } from '@/lib/utils'
import { useScrollRef } from '@/hooks/scroll.hooks'
import { useMyCart } from '@/hooks/cart.hooks'

const UserOrders = () => {
  const { ref } = useScrollRef(140);
  const { ordersList } = useMyCart()

  return (
    <section ref={ref} className='mx-auto max-w-4xl p-6'>
      <SectionHeader>My Orders</SectionHeader>
      <div className='space-y-6'>
        {ordersList?.length ? (
          ordersList.map(order => (
            <Card
              key={order.id}
              className='flex flex-col items-start space-y-4 p-4 shadow-lg md:flex-row md:space-x-4 md:space-y-0'
            >
              {/* Order Image */}
              <Image
                src={defaultImage || order.product_image}
                alt={order.product_name}
                width={200}
                className='h-auto rounded-md object-cover md:w-32'
              />

              {/* Order Info */}
              <div className='flex-grow'>
                <h2 className='text-xl font-semibold'>{order.product_name}</h2>
                <p className='mt-2 text-lg font-bold text-gray-700'>
                  Price: ${order.product_price}
                </p>
                <p className='mt-1 text-lg'>SKU: {order.product_sku}</p>

                {/* Order Status */}
                <p className='mt-4'>
                  <span className='font-semibold'>Status:</span>{' '}
                  <span
                    className={cn(
                      'rounded-md px-2 py-1 text-white',
                      order.status.includes('Cancelled') && 'bg-red-500',
                      order.status.includes('Ordered') && 'bg-primary-main',
                      order.status.includes('Dispatched') && 'bg-blue-700'
                    )}
                  >
                    {order.status}
                  </span>
                </p>
              </div>
            </Card>
          ))
        ) : (
          <div className='container flex h-72 flex-col items-center justify-center gap-y-5'>
            <h2 className='text-base font-semibold text-primary-main md:text-2xl'>
              You don&apos;t have any orders currently.
            </h2>
            <Link
              href='/shop'
              className='rounded-md bg-primary-main px-2 py-1 text-white hover:bg-primary-dark'
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default UserOrders
