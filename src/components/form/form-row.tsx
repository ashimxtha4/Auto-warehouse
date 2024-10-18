import React from 'react'

const FormRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='my-1 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-2 md:my-2 md:grid-cols-3 md:gap-5'>
      {children}
    </div>
  )
}

export default FormRow
