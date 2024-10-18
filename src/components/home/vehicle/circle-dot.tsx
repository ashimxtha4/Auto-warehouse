import { cn } from '@/lib/utils'

const Circledot = ({ className }: { className?: string }) => {
  return (
    <span
      className={
        (cn('absolute h-2 w-2 rounded-full bg-primary-main'), className)
      }
    />
  )
}

export default Circledot
