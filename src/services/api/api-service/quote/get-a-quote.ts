import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useMutation } from '@tanstack/react-query'
import { TGetAQuoteSchemaProps } from '@/hooks/get-a-quote'

const postGetAQuote = async (data: Partial<TGetAQuoteSchemaProps>) => {
  return await httpClient.post(api.quote.post, data)
}

export const usePostGetAQuote = () => {
  return useMutation({
    mutationKey: ['post' + api.quote.post],
    mutationFn: postGetAQuote
  })
}
