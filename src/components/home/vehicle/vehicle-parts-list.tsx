import React from 'react'
import { CiGrid41, CiCircleList } from 'react-icons/ci'
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
  },
  {
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    sku: '1233',
    price: '5243'
  }
]

const VehiclePartsList = () => {
  const { handleSearch, viewType } = useVehicleParts()
  return (
    <aside className='flex-[2]'>
      <header className='mb-4 flex justify-between gap-2 md:justify-start md:gap-5'>
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
          <span className='text-sm font-medium md:text-xl'>Sort</span>
          <SelectForm />
        </div>
      </header>
      <div
        className={cn(
          viewType === null &&
            'flex flex-wrap justify-center gap-2 md:justify-start'
        )}
      >
        {products.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </aside>
  )
}

export default VehiclePartsList
