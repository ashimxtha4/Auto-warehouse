import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

interface postAddToCartProps {
  uid: string
  customer_id: number
  product_id: number
  quantity: number
}

const postAddToCart = async (data: postAddToCartProps) => {
  try {
    return await httpClient.post(api.cart.post, data)
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to add product to cart.')
    }
    throw error
  }
}

export const usePostAddToCart = () => {
  return useMutation({
    mutationKey: ['post' + api.cart.post],
    mutationFn: postAddToCart,
    onSuccess: data => data?.data
  })
}
