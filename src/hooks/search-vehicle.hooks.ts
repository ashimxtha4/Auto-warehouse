import { useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { VEHICLE_MAKE } from '@/constants/vehicle-make'
import { useGetVehicleMake } from '@/services/api/api-service/vehicle/vehicle-make'
import { useGetVehicleModel } from '@/services/api/api-service/vehicle/vehicle-model'
import { useGetVehicleSeries } from '@/services/api/api-service/vehicle/vehicle-series'
import { useGetVehicleBody } from '@/services/api/api-service/vehicle/vehicle-body'
import { useGetVehicleGroup } from '@/services/api/api-service/vehicle/vehicle-group'

const searchPartsSchema = z.object({
  make: z.string({ required_error: 'Vehicle Brand is required.' }),
  model: z.string().optional(),
  group: z.string().optional(),
  body: z.string().optional(),
  year: z.string().optional(),
  series: z.string().optional()
})

export enum VehicleMake {
  SUV = 'suv',
  SEDAN = 'sedan',
  UTE = 'ute',
  UTE_TRUCK = 'ute-truck',
  VAN = 'van'
}

export type TSearchPartsProps = z.infer<typeof searchPartsSchema>

export const useSearchVehicles = () => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const vehicle = params?.vehicle as string | undefined

  const vehicleMake = VEHICLE_MAKE.find(item => item.value === vehicle)

  const { data: vehicleMakeData, mutateAsync: mutateVehicleMake } =
    useGetVehicleMake()

  const { data: vehicleModelData, mutateAsync: mutateVehicleModel } =
    useGetVehicleModel()

  const { data: vehicleSeriesData, mutateAsync: mutateVehicleSeries } =
    useGetVehicleSeries()

  const { data: vehicleBodyData, mutateAsync: mutateVehicleBody } =
    useGetVehicleBody()

  const { data: vehicleGroupData, mutateAsync: mutateVehicleGroup } =
    useGetVehicleGroup()

  useEffect(() => {
    mutateVehicleMake()
    mutateVehicleModel()
    mutateVehicleSeries()
    mutateVehicleBody()
    mutateVehicleGroup()
  }, [
    mutateVehicleMake,
    mutateVehicleModel,
    mutateVehicleSeries,
    mutateVehicleBody,
    mutateVehicleGroup
  ])

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
  }, [searchParams, form, vehicle])

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
    router,
    vehicleMake,
    vehicle,
    vehicleMakeData: vehicleMakeData?.data?.data,
    vehicleModelData: vehicleModelData?.data?.data,
    vehicleSeriesData: vehicleSeriesData?.data?.data,
    vehicleBodyData: vehicleBodyData?.data?.data,
    vehicleGroupData: vehicleGroupData?.data?.data
  }
}
