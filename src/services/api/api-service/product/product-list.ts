import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { IGenericResponse } from '@/utils/response-types/generic-data-response'

export interface productProps {
  id: number
  name: string
  sku: string
  price: string
  image: string
}

const getProductList = async (
  keyword?: string,
  brand?: number,
  type?: number,
  model?: number,
  position?: number,
  series?: number,
  page?: number
) => {
  return await httpClient.get<IGenericResponse<productProps[]>>(
    api.products.list.get(keyword, brand, type, model, position, series, page)
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

  const page = parseInt(params?.get('page') || '1')

  return useQuery({
    queryKey: [
      api.products.list.get,
      keyword,
      brand,
      type,
      model,
      position,
      series,
      page
    ],
    queryFn: () =>
      getProductList(keyword, brand, type, model, position, series, page),
    select: data => data.data
  })
}
