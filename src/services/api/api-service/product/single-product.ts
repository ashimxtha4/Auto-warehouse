import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export interface singleProductProps {
  success: boolean
  message: string
  data: DataProps
}

export interface DataProps {
  id: number
  name: string
  description: string
  invoice_description: string
  sku: string
  price: string
  position: string
  size: string
  color: string
  status: string
  syd_stock: number
  mel_stock: number
  image: Image[]
  vehicle_brand: string
  vehicle_type: string
  vehicle_model: string
  vehicle_series: string
}

export interface Image {
  id: number
  product_id: number
  image: string
  created_at: string
  updated_at: string
}

const getSingleProduct = async (id: number) => {
  return await httpClient.get<singleProductProps>(api.products.product.get(id))
}

export const useGetSingleProduct = () => {
  const params = useSearchParams()
  const id = parseInt(params?.get('id') as string)
  return useQuery({
    queryKey: [api.products.product.get],
    queryFn: () => getSingleProduct(id),
    select: data => data.data,
    enabled: !!id
  })
}
