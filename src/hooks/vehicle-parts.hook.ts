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

  return {
    showFilterProduct,
    setShowFilterProduct,
    viewType,
    handleSearch,
    handleSearchListView,
    vehicle,
    router
  }
}
