import { useCallback, useEffect, useState } from 'react'
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
import { usePathname } from 'next/navigation'
import { useGetSidebar } from '@/services/api/api-service/sidebar/get-sidebar'

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
  const pathname = usePathname()
  const vehicle = params?.vehicle as string | undefined
  const [modelArray, setModelArray] = useState<
    string[] | number[] | undefined
  >()

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

  const {
    data: sidebarData,
    mutateAsync: mutateSidebar,
    isPending: sidebarDataPending
  } = useGetSidebar()

  const form = useForm<Partial<TSearchPartsProps>>({
    resolver: zodResolver(searchPartsSchema)
  })

  const modelValue = form.getValues('model')

  useEffect(() => {
    if (modelValue) {
      let modelArrayString = Array.isArray(modelValue)
        ? modelValue
        : [modelValue]

      // Convert string array to number array
      modelArrayString = modelArrayString.flatMap(value =>
        typeof value === 'string' ? value.split(',').map(Number) : [value]
      )

      setModelArray(modelArrayString)
    }
  }, [modelValue])

  const vehicle_brand_id = form.watch('make')
  // const vehicle_model_id = modelArray
  const vehicle_series_id = form.watch('series')
  const vehicle_type_id = form.watch('type')
  const vehicle_year_id = form.watch('year')

  const parseId = (id: string | undefined) => (id ? parseInt(id) : undefined)

  // const vehicleBrand = vehicleMakeData?.data?.data?.find(
  //   item => item.id === parseId(vehicle_brand_id)
  // )

  const handleSearchFilter = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchParams?.toString())
      params.set('specific', id)

      router.push(`${pathname}?${params.toString()}`)
    },
    [searchParams, router, pathname]
  )

  useEffect(() => {
    mutateVehicleMake()
  }, [mutateVehicleMake])

  useEffect(() => {
    const fetchData = async () => {
      if (vehicle_brand_id) {
        await mutateVehicleModel(parseInt(vehicle_brand_id))
        await mutateSidebar(parseInt(vehicle_brand_id))
      }

      if (vehicle_brand_id || modelArray || vehicle_year_id) {
        await mutateVehicleSeries({
          vehicle_brand_id: parseInt(vehicle_brand_id as string),
          vehicle_model_id: modelArray?.map(val => parseInt(val as string)),
          vehicle_year_id: vehicle_year_id
        })
      }

      if (vehicle_brand_id || modelArray || vehicle_type_id) {
        await mutateVehicleGroup({
          vehicle_brand_id: parseInt(vehicle_brand_id as string),
          vehicle_model_id: modelArray?.map(val => parseInt(val as string)),
          vehicle_type_id: parseId(vehicle_type_id)
        })
      }

      if (vehicle_brand_id || modelArray) {
        await mutateVehicleYear({
          vehicle_brand_id: parseInt(vehicle_brand_id as string),
          vehicle_model_id: modelArray?.map(val => parseInt(val as string))
        })
        await mutateVehicleBody({
          vehicle_brand_id: parseInt(vehicle_brand_id as string),
          vehicle_model_id: modelArray?.map(val => parseInt(val as string))
        })
      }
    }

    fetchData()
  }, [
    mutateSidebar,
    vehicle_brand_id,
    modelArray,
    vehicle_series_id,
    vehicle_type_id,
    vehicle_year_id,
    mutateVehicleModel,
    mutateVehicleSeries,
    mutateVehicleBody,
    mutateVehicleGroup,
    mutateVehicleYear,
    handleSearchFilter
  ])

  const selectedVehicleBody = vehicleBodyData?.data?.data
    ? Object.entries(vehicleBodyData.data.data)?.find(([, value]) => {
        return value.name === form.getValues('type')
      })?.[1].vehicle_type
    : undefined

  const selectedVehicleModel = vehicleModelData?.data
    ? Object.entries(vehicleModelData.data)?.find(([, value]) => {
        return value.ids == modelArray
      })?.[1].vehicle_type
    : undefined

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

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set(key, value)
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newUrl)
  }

  const handlePageChange = (page: number) => {
    updateQueryParams('page', page.toString())
  }

  return {
    onSubmit,
    form,
    router,
    vehicle,
    vehicleMakeData: vehicleMakeData?.data?.data,
    vehicleModelData: vehicleModelData?.data,
    vehicleSeriesData: vehicleSeriesData?.data?.data,
    vehicleBodyData: vehicleBodyData?.data?.data,
    vehicleGroupData: vehicleGroupData?.data?.data,
    vehicleYearData: vehicleYearData?.data?.data,
    selectedVehicleModel,
    handlePageChange,
    handleSearchFilter,
    sidebarData: sidebarData?.data.data,
    sidebarDataPending,
    searchParams,
    selectedVehicleBody
  }
}
