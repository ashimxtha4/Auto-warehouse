import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

interface postAddToCartProps {
  uid: string
  customer_id: number
  product_id: number
  quantity: number
  cart_id: number
  status: string
}

const postRemoveFromCart = async (data: postAddToCartProps) => {
  try {
    return await httpClient.post(api.cart.delete, data)
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to remove product from cart.')
    }
  }
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
