import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface postCartCheckoutProps {
  uid: string
  customer_id: number
  cart_id: number[]
}

const postCartCheckout = async (data: postCartCheckoutProps) => {
  return await httpClient.post(api.cart.checkout.post, data)
}

export const usePostCartCheckout = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['post' + api.cart.checkout.post],
    mutationFn: postCartCheckout,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [api.cart.get]
      })
    }
  })
}
