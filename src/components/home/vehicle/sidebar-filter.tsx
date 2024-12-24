import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import { cn } from '@/lib/utils'

const SidebarFilter = () => {
  const { setShowFilterProduct, showFilterProduct } = useVehicleParts()

  const { handleSearchFilter, sidebarData, sidebarDataPending, searchParams } =
    useSearchVehicles()

  const specificPart = searchParams?.get('specific')

  return (
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
  )
}

export default SidebarFilter
