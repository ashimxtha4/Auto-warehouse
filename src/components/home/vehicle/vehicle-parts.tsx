'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import VehiclePartsList from './vehicle-parts-list'
import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import AutoGlassPagination from '@/utils/autoglass-pagination'
import { cn } from '@/lib/utils'

const VehicleParts = () => {
  const { setShowFilterProduct, showFilterProduct } = useVehicleParts()
  const { data, isLoading } = useGetProductList()
  const productList = data?.data

  const totalNumberOfProducts = data?.meta.total

  const {
    vehicle,
    handlePageChange,
    handleSearchFilter,
    sidebarData,
    sidebarDataPending,
    searchParams
  } = useSearchVehicles()

  const specificPart = searchParams?.get('specific')

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      {isLoading && <LoadingSpinner />}
      {vehicle && (
        <aside className='hidden flex-1 md:block'>
          <Card className='rounded-lg bg-white shadow-lg'>
            <CardHeader
              className='cursor-pointer text-nowrap border-b bg-gray-100 py-2 font-medium text-green-700 transition-colors hover:bg-gray-200'
              onClick={() => setShowFilterProduct(prev => !prev)}
            >
              Filter Products
            </CardHeader>
            {showFilterProduct && (
              <CardContent className='flex flex-col gap-1 p-3'>
                {sidebarData ? (
                  Object.entries(sidebarData)?.map(([item]) => (
                    <button
                      onClick={() => handleSearchFilter(item)}
                      key={item}
                      className={cn(
                        'border-b border-b-gray-300 p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-green-700',
                        item === specificPart
                          ? 'bg-gray-100 font-medium text-green-700'
                          : ''
                      )}
                    >
                      {item}
                    </button>
                  ))
                ) : sidebarDataPending ? (
                  <div className='relative'>
                    <LoadingSpinner />
                  </div>
                ) : (
                  <>No filters</>
                )}
              </CardContent>
            )}
          </Card>
        </aside>
      )}

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
