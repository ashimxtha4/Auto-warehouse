import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const useCallOutLines = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCallOutLines = (line: string) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('specific', line)

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    handleCallOutLines
  }
}
