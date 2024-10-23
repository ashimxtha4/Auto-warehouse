'use client'

import React from 'react'
import Sedan from './vehicle-type/sedan'
import Ute from './vehicle-type/ute'
import UteTruck from './vehicle-type/ute-truck'
import Van from './vehicle-type/van'
import Suv from './vehicle-type/suv'
import { useSearchVehicles, VehicleMake } from '@/hooks/search-vehicle.hooks'

const VehicleOverview = () => {
  const { vehicleMake } = useSearchVehicles()

  if (vehicleMake?.type === VehicleMake.SUV) return <Suv />
  if (vehicleMake?.type === VehicleMake.SEDAN) return <Sedan />
  if (vehicleMake?.type === VehicleMake.UTE) return <Ute />
  if (vehicleMake?.type === VehicleMake.UTE_TRUCK) return <UteTruck />
  return <Van />
}

export default VehicleOverview
