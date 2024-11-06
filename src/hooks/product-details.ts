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

  const { mutateAsync, isPending, status } = usePostAddToCart()

  const { data, isLoading } = useGetSingleProduct()
  const productData = data?.data
  // const productImages = data?.data.image

  const handleAddToCart = async () => {
    try {
      await mutateAsync({
        customer_id: id,
        uid: uuid,
        product_id: productData?.id as number,
        quantity: 1
      })
      if (status === 'success') {
        toast.success('Product Added to cart successfully!')
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
    handleAddToCart,
    productLoading: isLoading
  }
}
