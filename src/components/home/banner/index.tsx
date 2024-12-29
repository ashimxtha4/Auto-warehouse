import React from 'react'
import Link from 'next/link'
import { BANNER_ITEMS } from '@/constants/banner-items'
import { cn } from '@/lib/utils'
import { FaArrowRightLong, FaPhoneVolume } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

const BannerContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <motion.div
      className='w-full md:max-w-[574px] h-fit rounded-3xl border border-white/50 bg-gradient-to-r from-[#ffffff] to-[#6EB03166] p-4 md:p-8 backdrop-blur-md'
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      <h2 className='text-start text-base font-bold tracking-wide text-primary-text sm:text-xl md:text-5xl'>
        Premium Auto <br className='hidden md:block' /> Glass{' '}
        <span className='my-1 block md:mt-5 md:text-3xl'>
          AT AFFORDABLE PRICES
        </span>
      </h2>
      <div className='grid w-full grid-cols-2 justify-center md:my-4'>
        {BANNER_ITEMS.map(item => (
          <div key={item.id}>
            <Link
              href={item.href}
              className={cn(
                'flex md:w-max items-center justify-between gap-2 rounded-full px-2 py-1 text-xs font-medium transition-all hover:scale-105 sm:mx-2 sm:px-4 sm:py-2 md:text-2xl',
                item.id === '1'
                  ? 'bg-primary-text text-white hover:text-white'
                  : 'bg-white text-primary-text ml-1'
              )}
            >
              {item.label}
              {item.id === '1' ? (
                <span className='rounded-full bg-white p-1 md:p-2 text-primary-text'>
                  <FaArrowRightLong size={18} />
                </span>
              ) : (
                <span className='rounded-full bg-primary-text p-1 md:p-2'>
                  <FaPhoneVolume size={20} className='text-white' />
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
export default BannerContent
