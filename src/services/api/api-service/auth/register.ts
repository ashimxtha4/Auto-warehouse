import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { registerSchemaProps } from '@/components/auth/register'
import toast from 'react-hot-toast'

export interface RegisterDataProps {
  success: boolean
  message: string
  data: RegisterResponseProps[]
}

export interface RegisterResponseProps {
  id: number
  first_name: string
  middle_name: string
  last_name: string
  email: string
  password: string
  password_text: string
  uid: string
  deleted_at: string
  created_at: string
  updated_at: string
}

const postRegisterUser = async (
  data: registerSchemaProps
): Promise<{
  data: { data: RegisterDataProps }
}> => {
  return await httpClient.post(api.customer.register.post, data)
}

export const useGetRegisterUser = () => {
  return useMutation({
    mutationKey: ['post' + api.customer.register.post],
    mutationFn: postRegisterUser,
    onSuccess: data => {
      toast.success(data.data.data.message)
    }
  })
}
