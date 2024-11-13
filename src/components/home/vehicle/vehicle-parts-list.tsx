import React from 'react'
import { CiGrid41, CiCircleList } from 'react-icons/ci'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import ProductItem from './product-item'
import { productProps } from '@/services/api/api-service/product/product-list'

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
      <header className='mb-4 flex justify-between gap-2 bg-gray-100 px-2 py-1 md:gap-5'>
        <div className='flex items-center gap-1 md:gap-3'>
          <span className='text-sm font-medium text-gray-800 md:text-xl'>
            {totalNumberOfProducts ?? 0}
          </span>
          <span className='text-gray-700'>Products Found</span>
          {/* <SelectForm /> */}
        </div>
        <div className='flex items-center justify-center gap-1 rounded-md border'>
          <CiGrid41
            size={24}
            className={cn(
              'h-full cursor-pointer',
              viewType === null && 'bg-green-900 text-white'
            )}
            onClick={handleSearch}
          />
          <span className='h-full w-[2px] bg-gray-400' />
          <CiCircleList
            size={24}
            onClick={handleSearchListView}
            className={cn(
              'h-full cursor-pointer font-bold',
              viewType !== null && 'bg-green-900 text-white'
            )}
          />
        </div>
      </header>
      <div
        className={cn(
          viewType === null && 'flex flex-wrap justify-center gap-2'
        )}
      >
        {productList?.length ? (
          productList.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))
        ) : (
          <p>No Products available</p>
        )}
      </div>
    </aside>
  )
}

export default VehiclePartsList
