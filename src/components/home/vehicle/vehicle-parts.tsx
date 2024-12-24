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
          <Card className='rounded-3xl bg-white shadow-lg'>
            <CardHeader
              className='text-nowrap border-b py-2 font-medium text-primary-text transition-colors'
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
                        'rounded-full border bg-[#3232470F] bg-opacity-[6%] p-2 text-primary-text/80 transition-colors hover:border-primary-main',
                        item === specificPart
                          ? 'border-primary-main font-semibold text-primary-text'
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
