'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import VehiclePartsList from './vehicle-parts-list'
import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import AutoGlassPagination from '@/utils/autoglass-pagination'

const VehicleParts = () => {
  const { setShowFilterProduct, showFilterProduct } = useVehicleParts()
  const { data, isLoading } = useGetProductList()
  const productList = data?.data

  const {
    vehicleGroupData,
    vehicle,
    handlePageChange,
    handleSearchFilter,
    filteredVehicleBodyData
  } = useSearchVehicles()

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
                {vehicleGroupData?.map(item => (
                  <button
                    onClick={() => handleSearchFilter(item.id)}
                    key={item.id}
                    className='rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-green-700'
                  >
                    {item.name}
                  </button>
                ))}
              </CardContent>
            )}
          </Card>

          <Card className='mt-4 rounded-lg bg-white shadow-lg'>
            <CardHeader className='border-b bg-gray-100 py-2 font-medium text-green-700'>
              Categories
            </CardHeader>
            <CardContent className='flex flex-col gap-2 p-3'>
              {filteredVehicleBodyData?.map(item => (
                <Link
                  key={item.id}
                  href={`/shop?type=${item.id}`}
                  className='block rounded-md p-2 text-center text-gray-700 transition-colors hover:bg-gray-100 hover:text-green-700'
                >
                  {item.name}
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      )}

      <div className='flex-[3]'>
        <VehiclePartsList productList={productList} />
        <div className='my-4'>
          {data?.data.length ? (
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
