import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { loginSchemaProps } from '@/components/auth/login'
export interface LoginProps {
  success: boolean
  message: string
}

const postOTPVerify = async (data: {
  customer_id: number
  otp: number
  email: string
}): Promise<{
  data: LoginProps
}> => {
  return await httpClient.post(api.customer.register.verify.post, data)
}

export const useGetOTPVerify = () => {
  return useMutation({
    mutationKey: ['post' + api.customer.register.verify.post],
    mutationFn: postOTPVerify,
    onSuccess: data => data.data
  })
}
