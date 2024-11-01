'use client'

import React from 'react'
import SearchParts from '../search-parts'
import VehicleParts from './vehicle-parts'
import VehicleOverview from './vehicle-overview'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import AutoGlassPagination from '@/utils/autoglass-pagination'

const Vehicle = () => {
  const { vehicle } = useSearchVehicles()
  return (
    <>
      <section className='bg-gray-100'>
        <div className='container my-2 md:my-4'>
          <SearchParts />
        </div>
      </section>
      {vehicle && (
        <>
          <div className='container'>
            <span className='my-2 hidden w-full justify-center rounded-md bg-primary-desaturate px-2 text-center text-2xl font-medium text-white md:flex'>
              Select Your Preferred Glass Type
            </span>
            <div className='relative my-4 mb-12 flex w-full justify-center'>
              <VehicleOverview />
            </div>
            <VehicleParts />
            <AutoGlassPagination
              currentPage={1}
              itemsPerPage={10}
              onPageChange={() => {}}
              totalItems={100}
            />
          </div>
        </>
      )}
    </>
  )
}

export default Vehicle
