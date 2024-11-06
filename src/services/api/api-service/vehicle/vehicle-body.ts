import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'

export interface VehicleBodyProps {
  id: number
  name: string
  image: string
  status: string
}

const getVehicleBody = async ({
  vehicle_brand_id,
  vehicle_model_id
}: {
  vehicle_brand_id: number
  vehicle_model_id?: number
}): Promise<{
  data: { data: VehicleBodyProps[] }
}> => {
  return await httpClient.post(api.vehicle.body.post, {
    vehicle_brand_id,
    vehicle_model_id
  })
}

export const useGetVehicleBody = () => {
  return useMutation({
    mutationKey: ['post' + api.vehicle.body.post],
    mutationFn: getVehicleBody
  })
}
