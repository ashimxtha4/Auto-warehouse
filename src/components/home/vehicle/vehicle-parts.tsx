'use client'

import React from 'react'
import { CheckboxGroup } from '@/components/form/checkbox-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PRODUCT_FILTER_ITEMS } from '@/constants/filter-products-items'
import { CiGrid41, CiCircleList } from 'react-icons/ci'
import Link from 'next/link'
import { CATEGORY_ITEMS } from '@/constants/vehicle-parts-category'
import Image from 'next/image'
import defaultImage from '@/assets/default.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'

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
                className='text-white hover:bg-primary-saturate'
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
                'cursor-pointer',
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
          <div>
            Sort
            {/* <select>
              <option value='default'>Default</option>
              <option value='popular'>Most Popular</option>
              <option value='name'>Name</option>
              <option value='sku'>SKU</option>
              <option value='lowest'>Lowest Price</option>
              <option value='highest'>Highest Price</option>
            </select> */}
          </div>
        </header>
        <div className={cn('flex flex-wrap justify-between gap-2')}>
          <Card
            className={cn(viewType === null ? 'max-w-[300px]' : 'flex w-full')}
          >
            <CardHeader>
              <Image
                src={defaultImage}
                alt='default-image'
                className='object-cover'
              />
            </CardHeader>
            <CardContent>
              <span className='block py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam alias mollitia deserunt harum, provident sunt!
              </span>
              <span className='block py-1'>sku: 12435</span>
              <span className='block py-1'>Price: $15.98</span>
              <div
                className={cn(
                  viewType === null
                    ? 'flex justify-between gap-2'
                    : 'flex justify-start gap-5'
                )}
              >
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  Add to Cart
                </Button>
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card
            className={cn(viewType === null ? 'max-w-[300px]' : 'flex w-full')}
          >
            <CardHeader>
              <Image
                src={defaultImage}
                alt='default-image'
                className='object-cover'
              />
            </CardHeader>
            <CardContent>
              <span className='block py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam alias mollitia deserunt harum, provident sunt!
              </span>
              <span className='block py-1'>sku: 12435</span>
              <span className='block py-1'>Price: $15.98</span>
              <div
                className={cn(
                  viewType === null
                    ? 'flex justify-between gap-2'
                    : 'flex justify-start gap-5'
                )}
              >
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  Add to Cart
                </Button>
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card
            className={cn(viewType === null ? 'max-w-[300px]' : 'flex w-full')}
          >
            <CardHeader>
              <Image
                src={defaultImage}
                alt='default-image'
                className='object-cover'
              />
            </CardHeader>
            <CardContent>
              <span className='block py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam alias mollitia deserunt harum, provident sunt!
              </span>
              <span className='block py-1'>sku: 12435</span>
              <span className='block py-1'>Price: $15.98</span>
              <div
                className={cn(
                  viewType === null
                    ? 'flex justify-between gap-2'
                    : 'flex justify-start gap-5'
                )}
              >
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  Add to Cart
                </Button>
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card
            className={cn(viewType === null ? 'max-w-[300px]' : 'flex w-full')}
          >
            <CardHeader>
              <Image
                src={defaultImage}
                alt='default-image'
                className='object-cover'
              />
            </CardHeader>
            <CardContent>
              <span className='block py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam alias mollitia deserunt harum, provident sunt!
              </span>
              <span className='block py-1'>sku: 12435</span>
              <span className='block py-1'>Price: $15.98</span>
              <div
                className={cn(
                  viewType === null
                    ? 'flex justify-between gap-2'
                    : 'flex justify-start gap-5'
                )}
              >
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  Add to Cart
                </Button>
                <Button className='bg-primary-main hover:bg-primary-dark'>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>
    </section>
  )
}

export default VehicleParts
