'use client'

import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/utils/section-header'

const StatsSection = () => {
  const stats = [
    { title: 'Products Sold', number: 20000 },
    { title: 'Satisfied Customers', number: 10000 },
    { title: 'Brands Available', number: 50 },
    { title: 'Years in Business', number: 15 }
  ]

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
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className='rounded-lg bg-primary-main px-2 py-1 text-center shadow-lg'
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
            <p className='text-lg font-extrabold text-white md:text-2xl'>
              {inView ? (
                <CountUp end={stat.number} duration={2.5} separator=',' />
              ) : (
                '0'
              )}
              +
            </p>
            <p className='mt-1 text-sm font-semibold text-white md:text-lg'>
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection
