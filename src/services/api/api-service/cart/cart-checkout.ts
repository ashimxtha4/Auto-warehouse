import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

interface postCartCheckoutProps {
  uid: string
  customer_id: number
  cart_id: number[]
}

const postCartCheckout = async (data: postCartCheckoutProps) => {
  try {
    return await httpClient.post(api.cart.checkout.post, data)
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to checkout your products.')
    }
  }
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
