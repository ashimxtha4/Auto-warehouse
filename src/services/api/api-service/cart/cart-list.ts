import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

export interface cartListProps {
  data: listDataProps[]
  links: Links
  meta: Meta
}

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

export interface Links {
  first: string
  last: string
  prev: string | number
  next: string | number
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

const getCartList = async (uid: string, customer_id: number) => {
  try {
    return await httpClient.get<cartListProps>(api.cart.get(uid, customer_id))
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to view cart list.')
    }
  }
}

export const useGetCartList = (uid: string, customer_id: number) => {
  return useQuery({
    queryKey: [api.cart.get],
    queryFn: () => getCartList(uid, customer_id),
    select: data => data,
    enabled: !!uid && customer_id !== -1
  })
}
