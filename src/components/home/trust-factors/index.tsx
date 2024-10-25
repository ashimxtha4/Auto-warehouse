'use client'

import React, { useEffect } from 'react'
import { TRUST_ITEMS } from '@/constants/trust-factor-items'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/utils/section-header'

const TrustFactors = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div ref={ref}>
      <SectionHeader>Why Choose Us</SectionHeader>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
        {TRUST_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            className='mb-1 flex items-center gap-2 rounded-md bg-primary-main px-2 py-1 text-white shadow-lg md:mx-2 md:my-2'
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 }
              }
            }}
          >
            <div className='p-1'>{item.icon}</div>
            <p className='flex flex-col'>
              <span className='text-nowrap text-base font-medium md:text-xl'>
                {item.label}
              </span>
              <span className='text-nowrap text-xs font-normal md:text-base'>
                {item.content}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TrustFactors
