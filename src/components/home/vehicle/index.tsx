'use client'

import React from 'react'
import VehicleParts from './vehicle-parts'
import VehicleOverview from './vehicle-overview'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import { useScrollRef } from '@/hooks/scroll.hooks'

const Vehicle = () => {
  const { vehicle, selectedVehicleModel, selectedVehicleBody, handlePageChange } = useSearchVehicles()
  const { ref } = useScrollRef(140)
  return (
    <>
      {vehicle && (
        <>
          <section ref={ref} className='container  my-4 rounded-xl border border-[#B0B0B080] bg-white md:rounded-3xl'>
            <span className='my-3 flex w-full justify-center rounded-md px-2 text-center text-2xl font-medium text-primary-text'>
              Select Your Preferred Glass Type
            </span>
            <div className='relative my-4 mb-12 flex w-full justify-center'>
              <VehicleOverview selectedVehicleBody={selectedVehicleBody} selectedVehicleModel={selectedVehicleModel} />
            </div>
          </section>
          <div className='container my-4'>
            <VehicleParts vehicle={vehicle} handlePageChange={handlePageChange} />
          </div>
        </>
      )}
    </>
  )
}

export default Vehicle
