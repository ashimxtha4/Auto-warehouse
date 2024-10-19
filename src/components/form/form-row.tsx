import React from 'react'

const FormRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='my-1 flex flex-wrap justify-normal gap-0 sm:justify-between sm:gap-2 md:my-2 md:gap-x-7 lg:justify-start lg:gap-x-14'>
      {children}
    </div>
  )
}

export default FormRow
