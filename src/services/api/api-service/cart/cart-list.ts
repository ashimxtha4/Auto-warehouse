import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

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
  const [user, setUser] = useState({
    id: -1,
    uuid: ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUser = localStorage.getItem('user')
      if (currentUser) {
        const currentUserString = JSON.parse(currentUser)
        const userId = currentUserString.id
        const userUuid = currentUserString.uuid
        setUser({ id: userId, uuid: userUuid })
      }
    }
  }, [])

  return useQuery({
    queryKey: [api.cart.get],
    queryFn: () => getCartList(user.uuid, user.id),
    select: data => data.data,
    enabled: !!user && user.id !== -1
  })
}
