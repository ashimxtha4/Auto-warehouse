'use client'

import { useScrollRef } from '@/hooks/scroll.hooks'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import React from 'react'
import VehicleParts from '../home/vehicle/vehicle-parts'

const AutoGlassShop = () => {
    const { ref } = useScrollRef(140)
    const { vehicle, handlePageChange } = useSearchVehicles()

    return (
        <section ref={ref} className='container my-2 md:my-4'>
            <VehicleParts vehicle={vehicle} handlePageChange={handlePageChange} />
        </section>
    )
}

export default AutoGlassShop