import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

const getAQuoteSchema = z.object({
  name: z.string({ required_error: 'Please enter your name.' }),
  email: z
    .string({ required_error: 'Please enter your email.' })
    .email({ message: 'Invalid email.' }),
  phone: z.string({ required_error: 'Please enter your phone number.' }),
  address: z.string({ required_error: 'Please enter your address.' }),
  make: z.string({ required_error: 'Vehicle Make is required.' }),
  model: z.string().optional(),
  year: z.string().optional(),
  comment: z.string().optional(),
  recaptcha: z.string()
})

export type TGetAQuoteSchemaProps = z.infer<typeof getAQuoteSchema>

export const useGetAQuote = () => {
  const router = useRouter()

  const form = useForm<Partial<TGetAQuoteSchemaProps>>({
    resolver: zodResolver(getAQuoteSchema)
  })

  const onSubmit = (data: Partial<TGetAQuoteSchemaProps>) => {
    console.log(data)
    if (!data.recaptcha) {
      form.setError('recaptcha', {
        type: 'manual',
        message: 'Please complete the ReCAPTCHA'
      })
      return
    }
    toast.success('Success!')
    // try {
    //   router.push('/')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return {
    onSubmit,
    form,
    router
  }
}
