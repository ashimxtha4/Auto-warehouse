import { useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchPartsSchema = z.object({
  make: z.string({ required_error: 'Vehicle Brand is required.' }),
  model: z.string().optional(),
  group: z.string().optional(),
  body: z.string().optional(),
  year: z.string().optional(),
  series: z.string().optional()
})

export type TSearchPartsProps = z.infer<typeof searchPartsSchema>

export const useSearchVehicles = () => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   @ts-expect-error
  const { vehicle } = params

  const form = useForm<Partial<TSearchPartsProps>>({
    resolver: zodResolver(searchPartsSchema)
  })

  useEffect(() => {
    const model = searchParams?.get('model')
    const group = searchParams?.get('group')
    const body = searchParams?.get('body')
    const year = searchParams?.get('year')
    const series = searchParams?.get('series')

    form.setValue('make', vehicle)
    form.setValue('model', model || '')
    form.setValue('group', group || '')
    form.setValue('body', body || '')
    form.setValue('year', year || '')
    form.setValue('series', series || '')
  }, [searchParams, form])

  const onSubmit = (data: Partial<TSearchPartsProps>) => {
    console.log(data)
    try {
      const queryParams = new URLSearchParams()

      if (data.model) queryParams.append('model', data.model)
      if (data.group) queryParams.append('group', data.group)
      if (data.body) queryParams.append('body', data.body)
      if (data.year) queryParams.append('year', data.year)
      if (data.series) queryParams.append('series', data.series)

      const queryString = queryParams.toString()
      const url = queryString ? `${data.make}?${queryString}` : `${data.make}`

      router.push(url)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    onSubmit,
    form,
    router
  }
}
