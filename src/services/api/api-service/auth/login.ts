import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { loginSchemaProps } from '@/components/auth/login'
export interface LoginProps {
  success: boolean
  message: string
  data: LoginDataProps
}

export interface LoginDataProps {
  token: string
  data: LoginResponseProps
}

export interface LoginResponseProps {
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

const postLogin = async (
  data: loginSchemaProps
): Promise<{
  data: LoginProps
}> => {
  return await httpClient.post(api.customer.login.post, data)
}

export const useGetLogin = () => {
  return useMutation({
    mutationKey: ['post' + api.customer.login.post],
    mutationFn: postLogin,
    onSuccess: data => {
      localStorage.setItem('token', data.data.data.token)
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: data.data.data.data.id.toString(),
          uuid: data.data.data.data.uid
        })
      )
      return data.data.data
    }
  })
}
