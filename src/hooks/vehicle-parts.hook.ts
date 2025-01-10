import { useEffect, useState } from 'react'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation'
import { usePostAddToCart } from '@/services/api/api-service/cart/add-to-cart'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import { useUserStore } from '@/slice/user-slice'

export const useVehicleParts = () => {
  const [showFilterProduct, setShowFilterProduct] = useState(true)
  const searchParams = useSearchParams()
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const viewType = searchParams?.get('view')
  const vehicle = params?.vehicle as string | undefined

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams?.toString())
    params.delete('view')

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleSearchListView = () => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('view', 'list')

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const { mutateAsync, isPending } = usePostAddToCart()

  const handleAddToCart = async (productId: number) => {
    try {
      if (productId) {
        await mutateAsync({
          customer_id: id,
          uid: uuid,
          product_id: productId,
          quantity: 1
        })
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
    showFilterProduct,
    setShowFilterProduct,
    viewType,
    handleSearch,
    isPending,
    handleAddToCart,
    handleSearchListView,
    vehicle,
    router
  }
}
