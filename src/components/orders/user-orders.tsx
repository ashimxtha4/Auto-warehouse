'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Card } from '../ui/card'
import Link from 'next/link'
import { SectionHeader } from '@/utils/section-header'
import { cn } from '@/lib/utils'
import { useScrollRef } from '@/hooks/scroll.hooks'
import { useUserStore } from '@/slice/user-slice'
import { usePostOrders } from '@/services/api/api-service/order/user-order'
import { IMAGE_BASE_URL } from '@/utils/image-base-url'
import AutoGlassPagination from '@/utils/autoglass-pagination'
import { DEFAULT_IMAGE } from '@/utils/default-image-url'

const UserOrders = () => {
  const { ref } = useScrollRef(140);

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  const { data: orders, mutateAsync: ordersMutateAsync } = usePostOrders()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  useEffect(() => {
    if (id !== -1 && uuid !== '') {
      ordersMutateAsync({ uid: uuid, customer_id: id })
    }
  }, [ordersMutateAsync, id, uuid])

  const ordersList = orders?.data.data
  const ordersMeta = orders?.data.meta

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set(key, value)
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newUrl)
  }

  const handlePageChange = (page: number) => {
    updateQueryParams('page', page.toString())
  }


  return (
    <section ref={ref} className='mx-auto p-6'>
      <SectionHeader>My Orders</SectionHeader>
      <div className='space-y-6'>
        {ordersList?.length ? (
          ordersList.map(order => (
            <Card
              key={order.id}
              className='flex flex-col items-start space-y-4 p-4 shadow-lg rounded-3xl md:flex-row md:space-x-4 md:space-y-0'
            >
              {/* Order Image */}
              <Image
                src={IMAGE_BASE_URL + order.product_image || DEFAULT_IMAGE}
                alt={order.product_name}
                width={200}
                height={100}
                className='h-auto rounded-md object-cover md:w-32'
              />

              {/* Order Info */}
              <div className='flex-grow'>
                <h2 className='text-xl font-semibold'>{order.product_name}</h2>
                <p className='mt-2 text-lg text-gray-700'>
                  Price:{' '}
                  <span className='font-bold'>
                    ${order.product_price}
                  </span>
                </p>
                <p className='mt-1 text-lg text-gray-700'>
                  SKU:{' '}
                  <span className='font-bold'>
                    {order.product_sku}
                  </span>
                </p>
                <p className='mt-1 text-lg text-gray-700'>
                  Quantity:{' '}
                  <span className='font-bold'>
                    {order.quantity}
                  </span>
                </p>

                {/* Order Status */}
                <p className='mt-4 text-lg text-gray-700'>
                  Status:{' '}
                  <span
                    className={cn(
                      'rounded-full font-bold text-xl tracking-wide px-4 py-2 text-white',
                      order.status.includes('Cancelled') && 'bg-red-500',
                      order.status.includes('Returned') && 'bg-red-500',
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
        <div className='my-4'>
          {ordersList?.length ? (
            <AutoGlassPagination
              currentPage={ordersMeta?.current_page || 1}
              itemsPerPage={ordersMeta?.per_page as number}
              totalItems={ordersMeta?.total as number}
              onPageChange={handlePageChange}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  )
}

export default UserOrders
