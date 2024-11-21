import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { registerSchemaProps } from '@/components/auth/register'
import { useUserStore } from '@/slice/user-slice'

export interface RegisterResponseProps {
  success: boolean
  message: string
  data: RegisterResponseData[]
}

export interface RegisterResponseData {
  id: number
  first_name: string
  middle_name: string | null
  last_name: string
  email: string
  password: string
  phone: string | null
  address: string | null
  otp: string
  status: string
  password_text: string
  uid: string
  deleted_at: string | null
  created_at: string
  updated_at: string
  social_id: string | null
}

const postRegisterUser = async (
  data: registerSchemaProps
): Promise<{
  data: { data: RegisterResponseProps }
}> => {
  return await httpClient.post(api.customer.register.post, data)
}

export const useGetRegisterUser = () => {
  const { setNewUserData } = useUserStore()
  return useMutation({
    mutationKey: ['post' + api.customer.register.post],
    mutationFn: postRegisterUser,
    onSuccess: async data => {
      await setNewUserData(data?.data?.data?.data[0])
    }
  })
}
