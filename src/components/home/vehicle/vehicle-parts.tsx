'use client'

import React from 'react'
import { CheckboxGroup } from '@/components/form/checkbox-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PRODUCT_FILTER_ITEMS } from '@/constants/filter-products-items'
import { CiGrid41, CiCircleList } from 'react-icons/ci'
import Link from 'next/link'
import { CATEGORY_ITEMS } from '@/constants/vehicle-parts-category'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import SelectForm from '@/components/form/drop-down'
import ProductItem from './product-item'

const products = [
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias officiis suscipit id dolorem minus.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  }
]

const VehicleParts = () => {
  const {
    handleSearch,
    setShowFilterProduct,
    showFilterProduct,
    vehicleName,
    viewType
  } = useVehicleParts()

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      <aside className='hidden max-w-[250px] flex-1 md:block'>
        <Card>
          <CardHeader
            className='cursor-pointer border-b bg-primary-dark py-1 font-medium text-white'
            onClick={() => setShowFilterProduct(prev => !prev)}
          >
            Filter Products
          </CardHeader>
          {showFilterProduct && (
            <CardContent className='bg-primary-desaturate'>
              <CheckboxGroup items={PRODUCT_FILTER_ITEMS} />
            </CardContent>
          )}
        </Card>
        <Card className='mt-4'>
          <CardHeader className='cursor-pointer border-b bg-primary-dark py-1 font-medium text-white'>
            Categories
          </CardHeader>
          <CardContent className='flex flex-col bg-primary-desaturate'>
            {CATEGORY_ITEMS.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className='p-1 hover:bg-primary-saturate hover:text-white'
              >
                {item.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      </aside>
      <aside className='flex-[2]'>
        <h4 className='text-xl font-medium md:text-3xl'>
          Auto Glass Solutions for {vehicleName}
        </h4>
        <header className='my-4 flex justify-between border-b pb-4'>
          <div className='flex items-center justify-center gap-1 rounded-md border'>
            <CiGrid41
              size={28}
              className={cn(
                'h-full cursor-pointer',
                viewType === null && 'bg-primary-main text-white'
              )}
              onClick={handleSearch}
            />
            <CiCircleList
              size={24}
              onClick={handleSearch}
              className={cn(
                'h-full cursor-pointer font-bold',
                viewType !== null && 'bg-primary-main text-white'
              )}
            />
          </div>
          <div className='flex items-center gap-1 md:gap-3'>
            <span>Sort</span>
            <SelectForm />
          </div>
        </header>
        <div
          className={cn(
            viewType === null &&
              'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {products.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </aside>
    </section>
  )
}

export default VehicleParts
