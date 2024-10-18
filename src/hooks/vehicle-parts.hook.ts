import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useVehicleParts = () => {
  const [showFilterProduct, setShowFilterProduct] = useState(true)
  const pathname = usePathname()
  const vehicleName = pathname?.replaceAll(/[-/]/g, ' ').toUpperCase()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [listView, setListView] = useState(false)

  const viewType = searchParams?.get('view')

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

  return {
    showFilterProduct,
    setShowFilterProduct,
    vehicleName,
    viewType,
    handleSearch
  }
}
