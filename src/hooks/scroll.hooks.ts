import { useEffect, useRef } from 'react'

export const useScrollRef = (topOffset: number) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      //   const topOffset = 100
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [topOffset])

  return {
    ref
  }
}
