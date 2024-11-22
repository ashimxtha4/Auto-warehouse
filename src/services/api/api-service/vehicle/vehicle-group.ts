import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'

export interface VehicleGroupProps {
  id: number
  name: string
  status: string
}

const getVehicleGroup = async ({
  vehicle_brand_id,
  vehicle_model_id,
  vehicle_type_id
}: {
  vehicle_brand_id: number
  vehicle_model_id?: number
  vehicle_type_id?: number
}): Promise<{
  data: { data: VehicleGroupProps[] }
}> => {
  return await httpClient.post(api.vehicle.group.post, {
    vehicle_brand_id,
    vehicle_model_id,
    vehicle_type_id
  })
}

export const useGetVehicleGroup = () => {
  return useMutation({
    mutationKey: ['post' + api.vehicle.group.post],
    mutationFn: getVehicleGroup
  })
}
