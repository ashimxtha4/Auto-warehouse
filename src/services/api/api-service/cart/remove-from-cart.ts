import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface postAddToCartProps {
  uid: string
  customer_id: number
  product_id: number
  quantity: number
  cart_id: number
  status: string
}

const postRemoveFromCart = async (data: postAddToCartProps) => {
  return await httpClient.post(api.cart.delete, data)
}

export const usePostRemoveFromCart = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['post' + api.cart.delete],
    mutationFn: postRemoveFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [api.cart.get]
      })
    }
  })
}
