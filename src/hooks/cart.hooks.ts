// import { useState } from 'react'
import {
  // listDataProps,
  useGetCartList
} from '@/services/api/api-service/cart/cart-list'
import { useEffect, useState } from 'react'

export const useMyCart = () => {
  const { data, isLoading, isSuccess } = useGetCartList()

  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (data?.data.data) {
      const newTotal = data.data.data.reduce(
        (acc, product) => acc + parseInt(product?.product_price) * 1,
        0
      )
      setTotal(newTotal as number)
    }
  }, [data?.data?.data, isSuccess])

  // useEffect(() => {
  //   const newTotal = products?.reduce(
  //     (acc, product) => acc + parseInt(product?.product_price) * 1,
  //     0
  //   )
  //   setTotal(newTotal as number)
  // }, [products])

  // const removeProduct = (id: number) => {
  //   setProducts(products?.filter(product => product.id !== id))
  // }

  return {
    total,
    // removeProduct,
    products: data?.data.data,
    isLoading
  }
}
