import React from 'react'

const FormRow = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='grid grid-cols-1 my-0 md:my-2 gap-0 md:gap-5  md:grid-cols-2'>{children}</div>
  )
}

export default FormRow