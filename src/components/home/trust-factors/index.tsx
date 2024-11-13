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
            className='mb-1 flex flex-col items-center gap-1 rounded-lg bg-white p-2 shadow-lg md:mx-2 md:my-2 md:p-4'
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
            <div className='rounded-full bg-green-100 p-2 text-green-600 md:p-4'>
              {item.icon}
            </div>
            <p className='text-nowrap text-base font-medium text-gray-800 md:text-lg'>
              {item.label}
            </p>
            <p className='text-nowrap text-sm font-normal text-gray-600'>
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TrustFactors
