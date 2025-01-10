import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { IGenericResponse } from '@/utils/response-types/generic-data-response'

export interface listDataProps {
  id: number
  customer_id: number
  product_id: number
  product_name: string
  product_price: string
  product_sku: string
  product_image: string
  stock: {
    syd: boolean
    mel: boolean
  }
}

const getCartList = async (uid: string, customer_id: number) => {
  try {
    return await httpClient.get<IGenericResponse<listDataProps[]>>(
      api.cart.get(uid, customer_id)
    )
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to view cart list.')
    }
  }
}

export const useGetCartList = (uid: string, customer_id: number) => {
  return useQuery({
    queryKey: [api.cart.get, api.cart.get.length, 'get'],
    queryFn: () => getCartList(uid, customer_id),
    select: data => data,
    enabled: !!uid && customer_id !== -1,
  })
}
