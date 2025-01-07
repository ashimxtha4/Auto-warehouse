import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { TContactUsSchemaProps } from '@/components/home/contact/get-in-touch'

const postContactUs = async (data: TContactUsSchemaProps) => {
  return await httpClient.post(api.contact.post, data)
}

export const usePostContactUs = () => {
  return useMutation({
    mutationKey: ['post' + api.contact.post],
    mutationFn: postContactUs
  })
}
