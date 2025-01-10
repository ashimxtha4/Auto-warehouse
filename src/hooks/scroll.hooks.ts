import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

export const useScrollRef = (topOffset: number) => {
  const ref = useRef<HTMLElement | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (ref.current) {
      //   const topOffset = 100
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [topOffset, searchParams])

  return {
    ref
  }
}
