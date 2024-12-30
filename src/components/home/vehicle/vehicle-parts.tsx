'use client'

import React from 'react'
import VehiclePartsList from './vehicle-parts-list'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import AutoGlassPagination from '@/utils/autoglass-pagination'
import SidebarFilter from './sidebar-filter'
import { useProductList } from '@/hooks/product-list.hook'

const VehicleParts = () => {
  const { productList, totalNumberOfProducts, isPending, productMeta } = useProductList()
  const { vehicle, handlePageChange } = useSearchVehicles()

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      {isPending && <LoadingSpinner />}
      {vehicle && <SidebarFilter />}

      <div className='flex-[3]'>
        <VehiclePartsList
          productList={productList}
          totalNumberOfProducts={totalNumberOfProducts}
        />
        <div className='my-4'>
          {productList?.length ? (
            <AutoGlassPagination
              currentPage={productMeta?.current_page || 1}
              itemsPerPage={productMeta?.per_page as number}
              totalItems={productMeta?.total as number}
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
