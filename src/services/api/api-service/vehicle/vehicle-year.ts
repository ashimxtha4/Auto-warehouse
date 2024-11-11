import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'

export interface VehicleYearProps {
  date: string
}

const getVehicleYear = async ({
  vehicle_brand_id,
  vehicle_model_id
}: {
  vehicle_brand_id: number
  vehicle_model_id?: number
}): Promise<{
  data: { data: VehicleYearProps[] }
}> => {
  return await httpClient.post(api.vehicle.year.post, {
    vehicle_brand_id,
    vehicle_model_id
  })
}

export const useGetVehicleYear = () => {
  return useMutation({
    mutationKey: ['post' + api.vehicle.year.post],
    mutationFn: getVehicleYear
  })
}
