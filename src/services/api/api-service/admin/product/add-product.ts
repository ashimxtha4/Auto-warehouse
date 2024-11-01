import { TAddProductSchemaProps } from '@/hooks/admin/product/add-product.hooks'
import httpClient from '@/services/api/axios-service'
import { api } from '@/services/endpoints/api.endpoints'
import { useMutation } from '@tanstack/react-query'

const postAddProduct = async (data: Partial<TAddProductSchemaProps>) => {
  return await httpClient.post(api.cart.post, data)
}

export const usePostAddProduct = () => {
  return useMutation({
    mutationKey: ['post' + api.cart.post],
    mutationFn: postAddProduct,
    onSuccess: data => data.data
  })
}
