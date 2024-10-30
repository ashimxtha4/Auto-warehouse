import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export interface productListProps {
  data: productProps[]
  links: Links
  meta: Meta
}

export interface productProps {
  id: number
  name: string
  sku: string
  price: string
  image: string
}

export interface Links {
  first: string
  last: string
  prev: string
  next: string
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

const getProductList = async (
  keyword?: string,
  brand?: number,
  type?: number,
  model?: number,
  position?: number,
  series?: number
) => {
  return await httpClient.get<productListProps>(
    api.products.list.get(keyword, brand, type, model, position, series)
  )
}
export const useGetProductList = () => {
  const params = useSearchParams()
  const keyword = params?.get('keyword') || ''
  const brand = params?.get('brand')
    ? parseInt(params.get('brand') as string)
    : undefined
  const type = params?.get('type')
    ? parseInt(params.get('type') as string)
    : undefined
  const model = params?.get('model')
    ? parseInt(params.get('model') as string)
    : undefined
  const position = params?.get('position')
    ? parseInt(params.get('position') as string)
    : undefined
  const series = params?.get('series')
    ? parseInt(params.get('series') as string)
    : undefined

  return useQuery({
    queryKey: [
      api.products.list.get,
      keyword,
      brand,
      type,
      model,
      position,
      series
    ],
    queryFn: () =>
      getProductList(keyword, brand, type, model, position, series),
    select: data => data.data
  })
}
