'use client'

import React from 'react'
import VehiclePartsList from './vehicle-parts-list'
import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import AutoGlassPagination from '@/utils/autoglass-pagination'
import SidebarFilter from './sidebar-filter'

const VehicleParts = () => {
  const { data, isLoading } = useGetProductList()
  const productList = data?.data

  const totalNumberOfProducts = data?.meta.total

  const { vehicle, handlePageChange } = useSearchVehicles()

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      {isLoading && <LoadingSpinner />}
      {vehicle && <SidebarFilter />}

      <div className='flex-[3]'>
        <VehiclePartsList
          productList={productList}
          totalNumberOfProducts={totalNumberOfProducts}
        />
        <div className='my-4'>
          {data?.data?.length ? (
            <AutoGlassPagination
              currentPage={data?.meta?.current_page || 1}
              itemsPerPage={data?.meta.per_page as number}
              totalItems={data?.meta.total as number}
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

export default VehicleParts
