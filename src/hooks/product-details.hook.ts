import { usePostAddToCart } from '@/services/api/api-service/cart/add-to-cart'
import { useGetSingleProduct } from '@/services/api/api-service/product/single-product'
import { useUserStore } from '@/slice/user-slice'
import { isAxiosError } from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useGetProductDetails = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const [zoomStyle, setZoomStyle] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = ((clientX - left) / width) * 100
    const y = ((clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(3)'
    })
  }

  const handleMouseLeave = () => {
    setZoomStyle({})
  }

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  const { mutateAsync, isPending, status } = usePostAddToCart()

  const { data, isLoading } = useGetSingleProduct()
  const productData = data?.data
  const productImages = data?.image

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
    productLoading: isLoading,
    zoomStyle,
    setIsModalOpen,
    isModalOpen,
    handleMouseLeave,
    handleMouseMove,
    productImages
  }
}
