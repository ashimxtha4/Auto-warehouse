import { useMutation } from '@tanstack/react-query'
import httpClient from '../../axios-service'
import { api } from '@/services/endpoints/api.endpoints'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { IGenericResponse } from '@/utils/response-types/generic-data-response'

export interface orderDataProps {
  id: number
  customer_id: number
  product_id: number
  product_name: string
  product_price: string
  product_sku: string
  stock: Stock
  product_image: string
  status: string
}

export interface Stock {
  syd: number
  mel: number
}

const postOrders = async (data: {
  uid: string
  customer_id: number
}): Promise<{
  data: IGenericResponse<orderDataProps[]>
}> => {
  try {
    return await httpClient.post(api.order.post, data)
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to view your orders.')
    }
    throw error
  }
}

export const usePostOrders = () => {
  return useMutation({
    mutationKey: ['post' + api.order.post],
    mutationFn: postOrders,
    onSuccess: data => data.data
  })
}
