import { useMutation } from '@tanstack/react-query'
import httpClient from '../../axios-service'
import { api } from '@/services/endpoints/api.endpoints'

export interface userOrderProps {
  data: orderDataProps[]
  links: Links
  meta: Meta
}

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

export interface Links {
  first: string
  last: string
  prev: number | string
  next: number | string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  active: boolean
}

const postOrders = async (data: {
  uid: string
  customer_id: number
}): Promise<{
  data: userOrderProps
}> => {
  return await httpClient.post(api.order.post, data)
}

export const usePostOrders = () => {
  return useMutation({
    mutationKey: ['post' + api.order.post],
    mutationFn: postOrders,
    onSuccess: data => data.data
  })
}
