'use client'

import React from 'react'
import SearchParts from '../search-parts'
import VehicleParts from './vehicle-parts'
import VehicleOverview from './vehicle-overview'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'

const Vehicle = () => {
  const { vehicle } = useSearchVehicles()
  return (
    <>
      <div className='container my-2 md:my-4'>
        <SearchParts />
      </div>
      {vehicle && (
        <>
          <div className='container'>
            <span className='gradient-bg my-2 hidden w-full justify-center rounded-md px-2 text-center text-2xl font-medium text-white md:flex'>
              Select Your Preferred Glass Type
            </span>
            <div className='relative my-4 mb-12 flex w-full justify-center'>
              <VehicleOverview />
            </div>
            <VehicleParts />
          </div>
        </>
      )}
    </>
  )
}

export default Vehicle
