import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'

export interface VehicleSeriesProps {
  [key: string]: {
    ids: number[]
  }
}

const getVehicleSeries = async (data: {
  vehicle_brand_id: number
  vehicle_model_id?: number[]
  vehicle_year_id?: number
}): Promise<{
  data: VehicleSeriesProps[]
}> => {
  return await httpClient.post(api.vehicle.series.post, data)
}

export const useGetVehicleSeries = () => {
  return useMutation({
    mutationKey: ['post' + api.vehicle.series.post],
    mutationFn: getVehicleSeries
  })
}
