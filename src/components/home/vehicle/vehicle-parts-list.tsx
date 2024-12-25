import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CiGrid41 } from 'react-icons/ci'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import ProductItem from './product-item'
import { productProps } from '@/services/api/api-service/product/product-list'
import { TbLayoutList } from 'react-icons/tb'

const VehiclePartsList = ({
  productList,
  totalNumberOfProducts
}: {
  productList: productProps[] | undefined
  totalNumberOfProducts: number | undefined
}) => {
  const { handleSearch, viewType, handleSearchListView } = useVehicleParts()
  return (
    <aside className='flex-[2]'>
      <header className='mb-4 flex justify-between gap-2 px-2 py-1 md:gap-5'>
        <div className='flex items-center gap-1 text-sm font-medium text-primary-text md:gap-3 md:text-2xl'>
          <span>{totalNumberOfProducts ?? 0}</span>
          <span>Products Found</span>
          {/* <SelectForm /> */}
        </div>
        <div className='flex items-center justify-center gap-1 rounded-md border text-primary-text/80'>
          <CiGrid41
            size={24}
            className={cn(
              'h-full cursor-pointer',
              viewType === null && 'text-primary-main'
            )}
            onClick={handleSearch}
          />
          {/* <span className='h-full w-[2px] bg-gray-400' /> */}
          <TbLayoutList
            size={24}
            onClick={handleSearchListView}
            className={cn(
              'h-full cursor-pointer font-bold',
              viewType !== null && 'text-primary-main'
            )}
          />
        </div>
      </header>
      <div
        className={cn(
          viewType === null &&
          'grid grid-cols-1 justify-center justify-items-center gap-2 sm:grid-cols-2 md:justify-items-stretch lg:grid-cols-4 xl:grid-cols-5'
        )}
      >
        {productList?.length ? (
          productList.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))
        ) : (
          <p className='w-full text-primary-text'>
            We couldn&apos;t find any products matching your search. <br />{' '}
            Please feel free to contact us for a{' '}
            <Link
              href='/get-a-quote'
              className='font-bold text-green-950 underline'
            >
              personalized quote.
            </Link>
          </p>
        )}
      </div>
    </aside>
  )
}

export default VehiclePartsList
