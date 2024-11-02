import httpClient from '@/services/api/axios-service'
import { api } from '@/services/endpoints/api.endpoints'
import { IGenericResponse } from '@/utils/response-types/generic-data-response'
import { useQuery } from '@tanstack/react-query'

export interface ICustomerOrdersProps {
  id: number
  customer_id: number
  product_id: number
  product_name: string
  product_price: string
  product_sku: string
  product_image: string
  status: string
}

const getCustomerOrders = async () => {
  return await httpClient.get<IGenericResponse<ICustomerOrdersProps[]>>(
    api.admin.customer.orders.product.get
  )
}

export const useGetCustomerOrders = () => {
  return useQuery({
    queryKey: [api.admin.customer.orders.product.get],
    queryFn: getCustomerOrders
  })
}
