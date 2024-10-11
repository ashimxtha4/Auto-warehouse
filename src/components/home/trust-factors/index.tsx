import React from 'react'
import { TRUST_ITEMS } from '@/constants/trust-factor-items'

const TrustFactors = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between'>
      {TRUST_ITEMS.map(item => (
        <div
          key={item.id}
          className='bg-primary-light mb-1 flex items-start gap-2 rounded-md px-2 py-1 text-white/90 md:mx-2 md:my-2 md:min-w-[18rem] md:max-w-[18rem] md:text-nowrap'
        >
          <div className='p-1'>{item.icon}</div>
          <p className='flex flex-col'>
            <span className='text-base md:text-xl font-medium'>{item.label}</span>
            <span className='text-xs md:text-base font-normal'>{item.content}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default TrustFactors
