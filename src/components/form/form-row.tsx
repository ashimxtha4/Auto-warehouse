import React from 'react'

const FormRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='my-1 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
      {children}
    </div>
  )
}

export default FormRow
