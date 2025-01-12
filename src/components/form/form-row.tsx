import React from 'react'
import { cn } from '@/lib/utils'

const FormRow = ({
  children,
  className,
  isFormEmpty
}: {
  children: React.ReactNode
  className?: string
  isFormEmpty?: boolean
}) => {
  const childrenArray = React.Children.toArray(children)
  const lastChildIndex = childrenArray.length - 1
  return (
    <div
      className={cn(
        'grid grid-cols-2 items-center justify-around md:justify-center gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
        isFormEmpty ? 'xl:grid-cols-6' : 'xl:grid-cols-7',
        className
      )}
    >
      {childrenArray.map((child, index) =>
        index === lastChildIndex ? (
          <div
            key={index}
            className={cn(isFormEmpty ? 'col-span-1' : 'col-span-2')}
          >
            {child}
          </div>
        ) : (
          <div key={index}>{child}</div>
        )
      )}
    </div>
  )
}

export default FormRow
