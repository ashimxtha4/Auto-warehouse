import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from './debounce.hook'

export const useSearchInput = () => {
  const router = useRouter()
  const pathname = usePathname()
  const inputRef = useRef<null | HTMLInputElement>(null)
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const debounceValue = useDebounce(search)

  useEffect(() => {
    const params = new URLSearchParams()
    if (debounceValue.trim() && debounceValue.length) {
      params?.set('keyword', debounceValue)
      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false
      })
    } else {
      params.delete('keyword')
    }
  }, [debounceValue, pathname, router])

  const handleInputClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation()
    if (!open) {
      setOpen(true)
    }
  }

  return {
    inputRef,
    handleInputClick,
    setSearch,
    search,
    setOpen,
    open,
    router,
    debounceValue
  }
}
