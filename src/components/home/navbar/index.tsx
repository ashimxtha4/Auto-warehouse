'use client'

import React from 'react'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useRouter } from 'next/navigation'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const CallLink = ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href} className='flex items-center gap-1'>
      <FaPhone className='inline-flex text-sm' />
      <span>{children}</span>
    </Link>
  )
}

const navbarVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

const Navbar = () => {
  const router = useRouter()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <motion.nav
      className='sticky top-0 z-[9999] bg-gray-200 py-1 text-white'
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={navbarVariants}
    >
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div>
            <Image
              src={logo}
              alt='auto-glass-shop'
              className='w-20 cursor-pointer object-cover md:w-32'
              onClick={() => router.push('/')}
            />
          </div>
          <h1 className='flex flex-col text-nowrap text-xs text-transparent sm:block md:text-lg lg:text-2xl'>
            {/* <span className='font-medium text-gray-900'>Autoglass Shop</span> */}
            <span className='font-medium text-gray-900'>Hotline:</span>
            <Link
              href='tel:1300-002-345'
              className='flex items-center gap-1 font-medium text-green-900 md:gap-2'
            >
              1300-002-345
            </Link>
          </h1>
        </div>
        <aside className='flex items-center gap-2 text-xs md:gap-5 md:text-xl'>
          <div className='flex items-center gap-1'>
            <div className='flex flex-col text-primary-main'>
              <CallLink href='tel:03 9357 5904'>SYD: 02 9756 6887</CallLink>
              <CallLink href='tel:03 9357 5904'>MEL: 03 9357 5904</CallLink>
            </div>
          </div>
        </aside>
      </div>
    </motion.nav>
  )
}

export default Navbar
