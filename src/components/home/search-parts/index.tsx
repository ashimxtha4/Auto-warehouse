'use client'

import React, { Suspense } from 'react'
import SearchForm from './search-form'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import {  SectionHeader } from '@/utils/section-header'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SearchParts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })
  return (
    <div className='relative rounded-lg p-2'>
      <SectionHeader>Search by vehicle</SectionHeader>
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SearchForm />
        </motion.div>
      </Suspense>
    </div>
  )
}

export default SearchParts
