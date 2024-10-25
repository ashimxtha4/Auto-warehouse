import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      className='my-2 bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-center text-xl font-extrabold text-transparent drop-shadow-md md:my-4 md:text-4xl'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  )
}

export default SectionHeader
