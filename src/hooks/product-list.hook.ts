import { useGetProductList } from '@/services/api/api-service/product/product-list'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export const useProductList = () => {
  const { data, mutateAsync, isPending } = useGetProductList()
  const productList = data?.data?.data
  const productMeta = data?.data?.meta

  const totalNumberOfProducts = data?.data?.meta?.total

  const [selectedArray, setSelectedArray] = useState<number[] | undefined>()
  const params = useSearchParams()
  const keyword = params?.get('keyword') || ''
  const brand = params?.get('brand')
    ? parseInt(params.get('brand') as string)
    : undefined
  const type = params?.get('type') || ''
  const specific = params?.get('specific') || ''
  const modelParam = params?.get('model')
  let modelArray: number[]

  const position = params?.get('position')
    ? parseInt(params.get('position') as string)
    : undefined
  const series = params?.get('series')
    ? parseInt(params.get('series') as string)
    : undefined

  const page = parseInt(params?.get('page') || '1')

  useEffect(() => {
    if (modelParam) {
      modelArray = modelParam.split(',').map(Number)
      setSelectedArray(modelArray)
    }
  }, [modelParam])

  useEffect(() => {
    mutateAsync({
      keyword,
      brand,
      type,
      model: selectedArray,
      position,
      series,
      page,
      specific
    })
  }, [keyword, brand, type, selectedArray, position, series, page, specific])

  return {
    productList,
    isPending,
    productMeta,
    totalNumberOfProducts
  }
}
