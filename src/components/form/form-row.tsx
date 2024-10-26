import { cn } from '@/lib/utils'
import React from 'react'

const FormRow = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'my-1 grid grid-cols-1 justify-center gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export default FormRow
