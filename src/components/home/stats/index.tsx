'use client'

import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/utils/section-header'
import { STATS_DATA } from '@/constants/stats-data'

const StatsSection = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div ref={ref} className='mx-auto'>
      <SectionHeader>Our Achievements</SectionHeader>
      <motion.div
        className='container rounded-lg bg-white p-6 shadow-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        }}
      >
        <div className='container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={index}
              className='text-center'
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.p
                className='text-lg font-bold text-green-600 md:text-2xl'
                whileHover={{ scale: 1.2, color: '#16a34a' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} separator=',' />
                ) : (
                  '0'
                )}
                +
              </motion.p>
              <motion.p
                className='mt-1 text-xs text-gray-500 md:text-base'
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
