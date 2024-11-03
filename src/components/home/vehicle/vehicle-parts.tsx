'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import VehiclePartsList from './vehicle-parts-list'
import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import AutoGlassPagination from '@/utils/autoglass-pagination'

const VehicleParts = () => {
  const { setShowFilterProduct, showFilterProduct } = useVehicleParts()
  const { data, isLoading } = useGetProductList()
  const productList = data?.data

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { vehicleBodyData, vehicleGroupData } = useSearchVehicles()
  const filteredVehicleBodyData = vehicleBodyData?.filter(
    item => item.name !== '#N/A'
  )

  const handleSearchFilter = (id: number) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('position', id.toString())

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set(key, value)
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newUrl)
  }

  const handlePageChange = (page: number) => {
    updateQueryParams('page', page.toString())
  }

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      {isLoading && <LoadingSpinner />}
      <aside className='hidden max-w-[250px] flex-1 md:block'>
        <Card>
          <CardHeader
            className='gradient-bg cursor-pointer text-nowrap border-b py-1 font-medium text-white'
            onClick={() => setShowFilterProduct(prev => !prev)}
          >
            Filter Products
          </CardHeader>
          {showFilterProduct && (
            <CardContent className='flex flex-col gap-1 bg-blue-600'>
              {vehicleGroupData?.map(item => (
                <button
                  onClick={() => handleSearchFilter(item.id)}
                  key={item.id}
                  className='bg-none text-white hover:bg-green-600'
                >
                  {item.name}
                </button>
              ))}
            </CardContent>
          )}
        </Card>
        <Card className='mt-4'>
          <CardHeader className='gradient-bg cursor-pointer border-b py-1 font-medium text-white'>
            Categories
          </CardHeader>
          <CardContent className='flex flex-col bg-blue-600'>
            {filteredVehicleBodyData?.map(item => (
              <Link
                key={item.id}
                href={`/shop?type=${item.id}`}
                className='p-1 text-center text-white hover:bg-green-600'
              >
                {item.name}
              </Link>
            ))}
          </CardContent>
        </Card>
      </aside>
      <div>
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
