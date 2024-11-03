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
    threshold: 0.3
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div ref={ref} className='mx-auto'>
      <SectionHeader>Our Achievements</SectionHeader>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
        {STATS_DATA.map((stat, index) => (
          <motion.div
            key={index}
            className='rounded-lg bg-white p-2 text-center shadow-lg md:p-4'
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
            <p className='gradient-text text-lg font-bold md:text-xl'>
              {inView ? (
                <CountUp end={stat.number} duration={2.5} separator=',' />
              ) : (
                '0'
              )}
              +
            </p>
            <p className='mt-1 text-xs text-gray-500 md:text-base'>
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection
