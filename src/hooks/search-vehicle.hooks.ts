import { useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetVehicleMake } from '@/services/api/api-service/vehicle/vehicle-make'
import { useGetVehicleModel } from '@/services/api/api-service/vehicle/vehicle-model'
import { useGetVehicleSeries } from '@/services/api/api-service/vehicle/vehicle-series'
import { useGetVehicleBody } from '@/services/api/api-service/vehicle/vehicle-body'
import { useGetVehicleGroup } from '@/services/api/api-service/vehicle/vehicle-group'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useGetVehicleYear } from '@/services/api/api-service/vehicle/vehicle-year'

const searchPartsSchema = z.object({
  make: z.string({ required_error: 'Vehicle Brand is required.' }),
  model: z.string({ required_error: 'Vehicle Model is required.' }),
  position: z.string().optional(),
  type: z.string().optional(),
  year: z.string().optional(),
  series: z.string().optional()
})

export enum VehicleMake {
  SUV = 'SUV',
  SEDAN = 'SEDAN',
  UTE = 'UTE',
  HATCH = 'HATCH',
  VAN = 'VAN'
}

export type TSearchPartsProps = z.infer<typeof searchPartsSchema>

export const useSearchVehicles = () => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const vehicle = params?.vehicle as string | undefined

  const { data: vehicleMakeData, mutateAsync: mutateVehicleMake } =
    useGetVehicleMake()

  const { data: vehicleModelData, mutateAsync: mutateVehicleModel } =
    useGetVehicleModel()

  const { data: vehicleSeriesData, mutateAsync: mutateVehicleSeries } =
    useGetVehicleSeries()

  const { data: vehicleBodyData, mutateAsync: mutateVehicleBody } =
    useGetVehicleBody()

  const { data: vehicleYearData, mutateAsync: mutateVehicleYear } =
    useGetVehicleYear()

  const { data: vehicleGroupData, mutateAsync: mutateVehicleGroup } =
    useGetVehicleGroup()

  // const vehicleMake = vehicleMakeData?.data?.data?.find(item => item.id === vehicle)

  const form = useForm<Partial<TSearchPartsProps>>({
    resolver: zodResolver(searchPartsSchema)
  })

  const vehicle_brand_id = form.watch('make')
  const vehicle_model_id = form.watch('model')
  const vehicle_series_id = form.watch('series')

  useEffect(() => {
    mutateVehicleMake()
    mutateVehicleGroup()
  }, [mutateVehicleMake, mutateVehicleGroup])

  useEffect(() => {
    if (vehicle_brand_id) {
      mutateVehicleModel(parseInt(vehicle_brand_id))
    }

    if (vehicle_model_id) {
      mutateVehicleSeries(parseInt(vehicle_model_id))
    }
  }, [
    vehicle_brand_id,
    mutateVehicleModel,
    vehicle_model_id,
    mutateVehicleSeries,
    mutateVehicleBody
  ])

  useEffect(() => {
    if (vehicle_brand_id || vehicle_model_id) {
      mutateVehicleBody({
        vehicle_brand_id: parseInt(vehicle_brand_id as string),
        vehicle_model_id: parseInt(vehicle_model_id as string)
      })
    }
  }, [vehicle_brand_id, vehicle_model_id, mutateVehicleBody])

  useEffect(() => {
    if (vehicle_brand_id || vehicle_series_id) {
      mutateVehicleYear({
        vehicle_brand_id: parseInt(vehicle_brand_id as string),
        vehicle_series_id: parseInt(vehicle_series_id as string)
      })
    }
  }, [vehicle_brand_id, vehicle_series_id, mutateVehicleYear])

  const selectedVehicleModel = vehicleModelData?.data?.data?.find(
    model => model.id?.toString() === vehicle_model_id
  )

  useEffect(() => {
    const model = searchParams?.get('model')
    const group = searchParams?.get('position')
    const body = searchParams?.get('type')
    const year = searchParams?.get('year')
    const series = searchParams?.get('series')

    form.setValue('make', vehicle)
    form.setValue('model', model || '')
    form.setValue('position', group || '')
    form.setValue('type', body || '')
    form.setValue('year', year || '')
    form.setValue('series', series || '')
  }, [searchParams, form, vehicle])

  const onSubmit = (data: Partial<TSearchPartsProps>) => {
    try {
      const queryParams = new URLSearchParams()

      if (data.make) queryParams.append('brand', data.make)
      if (data.model) queryParams.append('model', data.model)
      if (data.position) queryParams.append('position', data.position)
      if (data.type) queryParams.append('type', data.type)
      if (data.year) queryParams.append('year', data.year)
      if (data.series) queryParams.append('series', data.series)

      const queryString = queryParams.toString()
      const url = queryString ? `${data.make}?${queryString}` : `${data.make}`

      router.push(url)
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      } else {
        toast.error('Something went wrong!')
      }
    }
  }

  return {
    onSubmit,
    form,
    router,
    vehicle,
    vehicleMakeData: vehicleMakeData?.data?.data,
    vehicleModelData: vehicleModelData?.data?.data,
    vehicleSeriesData: vehicleSeriesData?.data?.data,
    vehicleBodyData: vehicleBodyData?.data?.data,
    vehicleGroupData: vehicleGroupData?.data?.data,
    vehicleYearData: vehicleYearData?.data?.data,
    selectedVehicleModel
  }
}
