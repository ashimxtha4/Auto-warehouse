import React from 'react'
import { TRUST_ITEMS } from '@/constants/trust-factor-items'

const TrustFactors = () => {
  return (
    <div className='flex flex-col flex-wrap lg:flex-nowrap md:flex-row md:justify-between'>
      {TRUST_ITEMS.map(item => (
        <div
          key={item.id}
          className='mb-1 flex items-start gap-2 rounded-md bg-primary-light px-2 py-1 text-white/90 md:mx-2 md:my-2 md:min-w-[18rem] md:max-w-[18rem] md:text-nowrap'
        >
          <div className='p-1'>{item.icon}</div>
          <p className='flex flex-col'>
            <span className='text-base font-medium md:text-xl'>
              {item.label}
            </span>
            <span className='text-xs font-normal md:text-base'>
              {item.content}
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default TrustFactors
