import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export const useProductList = () => {
  const { data, mutateAsync, isPending } = useGetProductList()
  const productList = data?.data?.data
  const productMeta = data?.data?.meta

  const totalNumberOfProducts = data?.data?.meta?.total

  const [selectedArrayModel, setSelectedArrayModel] = useState<
    number[] | undefined
  >()
  const [selectedArraySeries, setSelectedArraySeries] = useState<
    number[] | undefined
  >()

  const params = useSearchParams()
  const keyword = params?.get('keyword') || ''
  const brand = params?.get('brand')
    ? parseInt(params.get('brand') as string)
    : undefined
  const type = params?.get('type') || ''
  const specific = params?.get('specific') || ''
  const modelParam = params?.get('model')
  const seriesParam = params?.get('series')

  const position = params?.get('position')
    ? parseInt(params.get('position') as string)
    : undefined
  const year = params?.get('year')
    ? parseInt(params.get('year') as string)
    : undefined

  const page = parseInt(params?.get('page') || '1')

  useEffect(() => {
    let modelArray: number[]
    if (modelParam) {
      modelArray = modelParam.split(',').map(Number)
      setSelectedArrayModel(modelArray)
    }
  }, [modelParam])

  useEffect(() => {
    let seriesArray: number[]
    if (seriesParam) {
      seriesArray = seriesParam.split(',').map(Number)
      setSelectedArraySeries(seriesArray)
    }
  }, [seriesParam])

  useEffect(() => {
    ;(async () => {
      await mutateAsync({
        keyword,
        brand,
        type,
        model: selectedArrayModel,
        position,
        series: selectedArraySeries,
        page,
        specific,
        year
      })
    })()
  }, [
    keyword,
    brand,
    type,
    selectedArrayModel,
    position,
    selectedArraySeries,
    page,
    specific,
    year,
    mutateAsync
  ])

  return {
    productList,
    isPending,
    productMeta,
    totalNumberOfProducts
  }
}
