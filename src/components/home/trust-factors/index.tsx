'use client'

import React, { useEffect } from 'react'
import { TRUST_ITEMS } from '@/constants/trust-factor-items'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/utils/section-header'

const TrustFactors = () => {
  const controls = useAnimation()
  const headerControls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9
  })

  useEffect(() => {
    if (inView) {
      headerControls.start('visible')
      controls.start('visible')
    }
  }, [inView, headerControls, controls])

  return (
    <div ref={ref} className='my-10'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={headerControls}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: 'easeOut' }
          }
        }}
      >
        <SectionHeader>Why Choose Us</SectionHeader>
      </motion.div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {TRUST_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            className='mb-4 flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-lg'
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: 'easeOut'
                }
              }
            }}
          >
            <motion.div
              className='rounded-full bg-green-100 p-3 text-green-600'
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {item.icon}
            </motion.div>

            <p className='text-center text-base font-medium text-gray-800 md:text-lg'>
              {item.label}
            </p>
            <p className='text-center text-sm font-normal text-gray-600'>
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TrustFactors