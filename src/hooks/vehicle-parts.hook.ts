import { useState } from 'react'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation'

export const useVehicleParts = () => {
  const [showFilterProduct, setShowFilterProduct] = useState(true)
  const searchParams = useSearchParams()
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const viewType = searchParams?.get('view')
  const vehicle = params?.vehicle as string | undefined

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
