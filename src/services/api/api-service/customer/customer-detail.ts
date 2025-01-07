import { api } from '@/services/endpoints/api.endpoints'
import httpClient from '../../axios-service'
import { useQuery } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

export interface CustomerDetailsProps {
  success: boolean
  message: string
  data: CustomerDataProps
}

export interface CustomerDataProps {
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

const getCustomerDetails = async (uid: string, customer_id: number) => {
  try {
    return await httpClient.get<CustomerDetailsProps>(
      api.customer.detail.get(customer_id, uid)
    )
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      toast.error('Please login to view your profile.')
    } else {
      toast.error('Something went wrong! Try again later')
    }
  }
}

export const useGetCustomerDetails = (uid: string, customer_id: number) => {
  return useQuery({
    queryKey: [api.cart.get],
    queryFn: () => getCustomerDetails(uid, customer_id),
    select: data => data?.data,
    enabled: !!uid && customer_id !== -1
  })
}
