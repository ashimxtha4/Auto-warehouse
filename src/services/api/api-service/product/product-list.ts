import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { IGenericResponse } from '@/utils/response-types/generic-data-response'

export interface productProps {
  id: number
  name: string
  sku: string
  price: string
  image: string
}

const getProductList = async (data: {
  keyword?: string
  brand?: number
  type?: string
  model?: number[]
  position?: number
  series?: number
  page?: number
  specific?: string
  year?: string
}) => {
  return await httpClient.post<IGenericResponse<productProps[]>>(
    api.products.list.post,
    data
  )
}
export const useGetProductList = () => {
  return useMutation({
    mutationKey: ['post' + api.products.list.post],
    mutationFn: getProductList
  })
}
