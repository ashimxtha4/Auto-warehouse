import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useInView } from 'react-intersection-observer'

type SectionHeaderProps = {
  children: React.ReactNode
  className?: string
}

const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <motion.h3
      ref={ref}
      className={cn(
        'my-2 text-center text-xl font-bold tracking-wider text-blue-600 drop-shadow-md md:my-4 md:text-4xl',
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h3>
  )
}

const SectionDescription = ({ children, className }: SectionHeaderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <motion.div
      ref={ref}
      className={cn(
        '-mt-2 mb-2 text-center text-xs text-gray-600 md:-mt-4 md:mb-4 md:text-lg',
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export { SectionHeader, SectionDescription }
