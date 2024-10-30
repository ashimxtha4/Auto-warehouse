import {
  listDataProps,
  useGetCartList
} from '@/services/api/api-service/cart/cart-list'
import { useEffect, useState } from 'react'

export const useMyCart = () => {
  const { data } = useGetCartList()

  const [products, setProducts] = useState<listDataProps[] | undefined>(
    data?.data
  )
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = products?.reduce(
      (acc, product) => acc + parseInt(product?.product_price) * 1,
      0
    )
    setTotal(newTotal as number)
  }, [products])

  const removeProduct = (id: number) => {
    setProducts(products?.filter(product => product.id !== id))
  }

  return {
    total,
    removeProduct,
    products
  }
}
