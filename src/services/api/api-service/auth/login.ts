import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { loginSchemaProps } from '@/components/auth/login'
import Cookies from 'js-cookie'
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
      const token = data.data.data.token
      const id = data.data.data.data.id.toString()
      const uuid = data.data.data.data.uid

      Cookies.set('token', token, {
        expires: 7,
        secure: true,
        sameSite: 'strict'
      })
      Cookies.set('user', JSON.stringify({ id, uuid }), {
        expires: 7,
        secure: true,
        sameSite: 'strict'
      })

      localStorage.setItem('token', token)
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: id,
          uuid: uuid
        })
      )
      return data.data.data
    }
  })
}
