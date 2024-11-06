import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { usePostGetAQuote } from '@/services/api/api-service/quote/get-a-quote'
import { isAxiosError } from 'axios'

const getAQuoteSchema = z.object({
  name: z.string({ required_error: 'Please enter your name.' }),
  email: z
    .string({ required_error: 'Please enter your email.' })
    .email({ message: 'Invalid email.' }),
  phone: z.string({ required_error: 'Please enter your phone number.' }),
  post_code: z.string({ required_error: 'Postal Code is required.' }),
  address: z.string({ required_error: 'Please enter your address.' }),
  preferred_type: z.string({
    required_error: 'Please choose your preference.'
  }),
  make: z.string({ required_error: 'Vehicle Make is required.' }),
  model: z.string().optional(),
  year: z.string().optional(),
  body_type: z.string().optional(),
  damage_details: z.string({ required_error: 'Damage details is required.' }),
  additional_comments: z.string({
    required_error: 'Additional Message is required.'
  }),
  recaptcha: z.string()
})

export type TGetAQuoteSchemaProps = z.infer<typeof getAQuoteSchema>

export const preferredType = [
  {
    label: 'Email',
    value: 'email'
  },
  {
    label: 'Phone',
    value: 'phone'
  }
]

export const useGetAQuote = () => {
  const router = useRouter()
  const { mutateAsync } = usePostGetAQuote()

  const form = useForm<Partial<TGetAQuoteSchemaProps>>({
    resolver: zodResolver(getAQuoteSchema)
  })

  const onSubmit = async (data: Partial<TGetAQuoteSchemaProps>) => {
    if (!data.recaptcha) {
      form.setError('recaptcha', {
        type: 'manual',
        message: 'Please complete the ReCAPTCHA'
      })
      return
    }
    try {
      await mutateAsync(data)
      router.push('/')
      toast.success('Thankyou for reaching out!! We will get to you soon.')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later')
    }
  }

  return {
    onSubmit,
    form,
    router
  }
}
