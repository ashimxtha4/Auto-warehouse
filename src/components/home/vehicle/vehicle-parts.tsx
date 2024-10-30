'use client'

import React from 'react'
import Link from 'next/link'
import { CheckboxGroup } from '@/components/form/checkbox-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PRODUCT_FILTER_ITEMS } from '@/constants/filter-products-items'
import { CATEGORY_ITEMS } from '@/constants/vehicle-parts-category'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import VehiclePartsList from './vehicle-parts-list'
import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const VehicleParts = () => {
  const { setShowFilterProduct, showFilterProduct } = useVehicleParts()
  const { data, isLoading } = useGetProductList()

  const productList = data?.data

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      {isLoading && <LoadingSpinner />}
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
      <VehiclePartsList productList={productList} />
    </section>
  )
}

export default VehicleParts
