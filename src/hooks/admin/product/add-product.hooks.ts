import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
// import { usePostAddProduct } from '@/services/api/api-service/product/add-product'
import { isAxiosError } from 'axios'

const addProductSchema = z.object({
  name: z.string({ required_error: 'Please enter the product name.' }),
  description: z.string({
    required_error: 'Please enter the product description.'
  }),
  invoice_description: z.string({
    required_error: 'Please enter the invoice description.'
  }),
  sku: z.string({ required_error: 'Please enter the SKU.' }),
  price: z
    .number({ required_error: 'Please enter the price.' })
    .positive({ message: 'Price must be positive.' }),
  status: z.enum(['enabled', 'disabled'], {
    required_error: 'Please select the status.'
  }),
  syd_stock: z.string({ required_error: 'Please choose stock.' }),
  mel_stock: z.string({ required_error: 'Please choose stock.' }),
  vehicle_brand_id: z.string({
    required_error: 'Please select the vehicle brand.'
  }),
  vehicle_type_id: z.string({
    required_error: 'Please select the vehicle type.'
  }),
  vehicle_position_id: z.string({
    required_error: 'Please select the vehicle position.'
  }),
  vehicle_model_id: z.string().optional(),
  vehicle_series_id: z.string().optional(),
  size: z.string().optional(),
  color: z.string().optional(),
  image: z.array(z.string()).optional()
})

export type TAddProductSchemaProps = z.infer<typeof addProductSchema>

export const statusOptions = [
  { label: 'Enabled', value: 'enabled' },
  { label: 'Disabled', value: 'disabled' }
]

export const productStock = [
  { label: 'Yes', value: '1' },
  { label: 'No', value: '0' }
]

export const useAddProduct = () => {
  const router = useRouter()
  //   const { mutateAsync } = usePostAddProduct()

  const form = useForm<Partial<TAddProductSchemaProps>>({
    resolver: zodResolver(addProductSchema)
  })

  const onSubmit = async (data: Partial<TAddProductSchemaProps>) => {
    try {
      //   await mutateAsync(data)
      console.log(data)

      router.push('/products')
      toast.success('Product added successfully!')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      } else {
        toast.error('An error occurred. Please try again.')
      }
    }
  }

  return {
    onSubmit,
    form,
    router
  }
}
