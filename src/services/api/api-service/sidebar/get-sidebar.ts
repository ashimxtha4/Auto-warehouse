import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'

export interface VehicleSidebarProps {
  success: boolean
  message: string
  data: {
    [key: string]: string
  }
}

const getSidebar = async (
  vehicle_brand_id: number
): Promise<{
  data: VehicleSidebarProps
}> => {
  return await httpClient.post(api.sidebar.post, {
    vehicle_brand_id
  })
}

export const useGetSidebar = () => {
  return useMutation({
    mutationKey: ['post' + api.sidebar.post],
    mutationFn: getSidebar
  })
}
