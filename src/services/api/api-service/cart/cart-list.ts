import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useUserStore } from '@/slice/user-slice'

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
  return await httpClient.get<cartListProps>(api.cart.get(uid, customer_id))
}

export const useGetCartList = () => {
  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  return useQuery({
    queryKey: [api.cart.get],
    queryFn: () => getCartList(uuid, id),
    select: data => data,
    enabled: !!uuid && id !== -1
  })
}
