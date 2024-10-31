import { usePostAddToCart } from '@/services/api/api-service/cart/add-to-cart'
import { useGetSingleProduct } from '@/services/api/api-service/product/single-product'
import { useUserStore } from '@/slice/user-slice'
import { isAxiosError } from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useGetProductDetails = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  const { mutateAsync, isPending } = usePostAddToCart()

  const { data } = useGetSingleProduct()
  const productData = data?.data
  // const productImages = data?.data.image

  const handleAddToCart = async () => {
    try {
      if (productData?.id) {
        await mutateAsync({
          customer_id: id,
          uid: uuid,
          product_id: productData.id,
          quantity: 1
        })
        toast.success('Product Added to cart successfully!')
      } else {
        toast.error('Something went wrong! Try again later!')
      }
    } catch (error) {
      if (!id || !uuid) {
        toast.error('Please login to add product to cart.')
      }
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later!')
    }
  }

  return {
    selectedImageIndex,
    setSelectedImageIndex,
    isPending,
    productData,
    handleAddToCart
  }
}
