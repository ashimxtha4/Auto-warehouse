import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import type { VehicleBodyProps } from './vehicle-body'

const getVehicleYear = async (data: {
  vehicle_brand_id: number
  vehicle_model_id?: number
}): Promise<{
  data: VehicleBodyProps
}> => {
  return await httpClient.post(api.vehicle.year.post, data)
}

export const useGetVehicleYear = () => {
  return useMutation({
    mutationKey: ['post' + api.vehicle.year.post],
    mutationFn: getVehicleYear
  })
}
