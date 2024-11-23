'use client'

import React from 'react'
import Sedan from './vehicle-type/sedan'
import Ute from './vehicle-type/ute'
import UteTruck from './vehicle-type/ute-truck'
import Van from './vehicle-type/van'
import Suv from './vehicle-type/suv'
import { useSearchVehicles, VehicleMake } from '@/hooks/search-vehicle.hooks'

const VehicleOverview = () => {
  const { selectedVehicleModel } = useSearchVehicles()
  const vehicleType = selectedVehicleModel?.vehicle_type?.toUpperCase()

  switch (vehicleType) {
    case VehicleMake.VAN:
      return <Van />
    case VehicleMake.SEDAN:
      return <Sedan />
    case VehicleMake.UTE:
      return <Ute />
    case VehicleMake.HATCH:
      return <UteTruck />
    default:
      return <Suv />
  }
}

export default VehicleOverview
