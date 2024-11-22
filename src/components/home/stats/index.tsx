'use client'

import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/utils/section-header'
import { STATS_DATA } from '@/constants/stats-data'

const StatsSection = () => {
  const controls = useAnimation()
  const headerControls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
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
        initial={{ y: -100, opacity: 0 }}
        animate={headerControls}
        variants={{
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: 'easeOut' }
          }
        }}
      >
        <SectionHeader>Our Achievements</SectionHeader>
      </motion.div>

      <motion.div
        className='container mx-auto mt-6 rounded-lg bg-white p-6 shadow-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
      >
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={index}
              className='text-center'
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: 'easeOut'
                  }
                }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.p
                className='text-3xl font-bold text-green-600 md:text-4xl'
                whileHover={{ scale: 1.1, color: '#16a34a' }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} separator=',' />
                ) : (
                  '0'
                )}
                +
              </motion.p>
              <motion.p
                className='mt-2 text-sm font-normal text-gray-600 md:text-base'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                {stat.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StatsSection
