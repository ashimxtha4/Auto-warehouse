import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { resetPasswordSchemaProps } from '@/components/auth/reset-password-form'

export interface ResetPasswordProps {
  success: boolean
  message: string
}

interface newResetPasswordSchemaProps extends resetPasswordSchemaProps {
  token: string
}

const getResetPassword = async (
  data: newResetPasswordSchemaProps
): Promise<{
  data: ResetPasswordProps
}> => {
  return await httpClient.post(api.customer.resetPassword.get, data)
}

export const useGetResetPassword = () => {
  return useMutation({
    mutationKey: ['get' + api.customer.resetPassword.get],
    mutationFn: getResetPassword,
    onSuccess: data => data.data
  })
}
