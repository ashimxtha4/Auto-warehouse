import httpClient from '@/services/api/axios-service'
import { api } from '@/services/endpoints/api.endpoints'
import { useMutation } from '@tanstack/react-query'

interface postAddToCartProps {
  uid: string
  customer_id: number
  product_id: number
  quantity: number
}

const postAddToCart = async (data: postAddToCartProps) => {
  return await httpClient.post(api.cart.post, data)
}

export const usePostAddToCart = () => {
  return useMutation({
    mutationKey: ['post' + api.cart.post],
    mutationFn: postAddToCart,
    onSuccess: data => data.data
  })
}
