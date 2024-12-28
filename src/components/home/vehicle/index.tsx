'use client'

import React from 'react'
import VehicleParts from './vehicle-parts'
import VehicleOverview from './vehicle-overview'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import { useScrollRef } from '@/hooks/scroll.hooks'

const Vehicle = () => {
  const { vehicle } = useSearchVehicles()
  const { ref } = useScrollRef(100)
  return (
    <>
      {vehicle && (
        <>
          <section ref={ref} className='container  my-4 rounded-xl border border-[#B0B0B080] bg-white md:rounded-3xl'>
            <span className='my-3 flex w-full justify-center rounded-md px-2 text-center text-2xl font-medium text-primary-text'>
              Select Your Preferred Glass Type
            </span>
            <div className='relative my-4 mb-12 flex w-full justify-center'>
              <VehicleOverview />
            </div>
          </section>
          <div className='container my-4'>
            <VehicleParts />
          </div>
        </>
      )}
    </>
  )
}

export default Vehicle
