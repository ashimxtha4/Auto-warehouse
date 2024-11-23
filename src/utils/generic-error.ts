import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'

export const GenericError = (error: any) => {
  if (isAxiosError(error)) {
    if (error.response?.data?.message) {
      return toast.error(error.response?.data.message)
    }
    return toast.error(error.message)
  }
  return toast.error('Something went wrong!')
}
