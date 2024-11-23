import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { UserVerifyProps } from './verify'

const postForgotPassword = async (data: {
  email: string
}): Promise<{
  data: UserVerifyProps
}> => {
  return await httpClient.post(api.customer.forgotPassword.post, data)
}

export const usePostForgotPassword = () => {
  return useMutation({
    mutationKey: ['post' + api.customer.forgotPassword.post],
    mutationFn: postForgotPassword,
    onSuccess: data => data.data
  })
}
