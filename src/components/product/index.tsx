'use client'

import React from 'react'
import defaultImage from '@/assets/default.png'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const ProductPage = () => {
  const params = useSearchParams()
  const sku = params?.get('sku')

  return (
    <section className='container'>
      <Card className={cn('mb-2 flex w-full items-center')}>
        <CardHeader className='justify-center p-1 md:p-0'>
          <Image
            src={defaultImage}
            alt='default-image'
            className={cn('max-w-[100px] object-cover md:max-w-[350px]')}
          />
        </CardHeader>
        <CardContent className={cn('p-4')}>
          <span className='block py-2 text-sm font-medium md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem,
            maiores ut porro animi quibusdam distinctio tempore commodi minus
            assumenda.
          </span>
          <span className='block py-1 text-sm font-medium md:text-xl'>
            <span className='text-primary-dark'>SKU:</span> {sku ?? ''}
          </span>
          <span className='block py-1 text-sm font-medium md:text-xl'>
            <span className='text-primary-dark'>Price:</span> $ 12345
          </span>
          <div className={cn('flex justify-start gap-2')}>
            <Button className='rounded-md border border-primary-dark bg-primary-main px-2 py-1 text-xs font-medium text-white hover:bg-primary-dark md:text-sm'>
              Add to Cart
            </Button>
            <Link
              href={`/checkout?sku=${sku}`}
              className='flex items-center justify-center rounded-md border border-primary-dark bg-primary-main px-2 py-1 text-xs font-medium text-white hover:bg-primary-dark md:text-sm'
            >
              Buy Now
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ProductPage
