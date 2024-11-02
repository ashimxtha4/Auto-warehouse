import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { usePostAddToCart } from '@/services/api/api-service/cart/add-to-cart'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import { useUserStore } from '@/slice/user-slice'

export const useVehicleParts = () => {
  const [showFilterProduct, setShowFilterProduct] = useState(true)
  const pathname = usePathname()
  const vehicleName = pathname?.replaceAll(/[-/]/g, ' ').toUpperCase()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [listView, setListView] = useState(false)

  const viewType = searchParams?.get('view')

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  const handleSearch = () => {
    setListView(prev => !prev)
    const params = new URLSearchParams()
    if (listView) {
      params.set('view', 'list')
    } else {
      params.delete('view')
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false })
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
    vehicleName,
    viewType,
    handleSearch,
    isPending,
    handleAddToCart
  }
}
