'use client'

import React, { Suspense } from 'react'
import { SectionHeader } from '@/utils/section-header'
import { FaLocationDot } from 'react-icons/fa6'
import { RiCellphoneFill } from 'react-icons/ri'
import { IoMdMail } from 'react-icons/io'
import { Card, CardContent, CardHeader } from '../ui/card'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  CONTACT_BRANCHES_DATA,
  CONTACT_CALL_DATA
} from '@/constants/contact-data'
import { useScrollRef } from '@/hooks/scroll.hooks'
import ContactUsForm from '../home/contact/get-in-touch'
import { LoadingSpinner } from '../ui/loading-spinner'

const ContactCard = ({
  icon: Icon,
  title,
  children
}: {
  icon: IconType
  title: string
  children: React.ReactNode
}) => (
  <Card className='w-full rounded-3xl md:w-max'>
    <CardHeader className='flex-row items-center gap-2 text-xl font-semibold'>
      <Icon />
      <span>{title}</span>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
)

const Contact = () => {
  const { inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { ref } = useScrollRef(140)

  return (
    <section
      className='container my-2 md:my-4'
      ref={ref}
    >
      <SectionHeader>CONTACTS</SectionHeader>
      <motion.div
        className='flex flex-wrap justify-between gap-5 my-2 md:my-4'
        initial={{ opacity: 1 }}
        animate={sectionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactCard icon={FaLocationDot} title='Branches'>
          <motion.div
            className='flex gap-5'
            initial={{ opacity: 1 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {CONTACT_BRANCHES_DATA.map(branch => (
              <div key={branch.label}>
                <h4 className='text-xl font-semibold'>{branch.label}</h4>
                <p>{branch.street}</p>
                <p>{branch.code}</p>
              </div>
            ))}
          </motion.div>
        </ContactCard>
        <ContactCard icon={RiCellphoneFill} title='Call Auto Glass Shop'>
          {CONTACT_CALL_DATA.map(call => (
            <motion.div
              key={call.label}
              initial={{ opacity: 1 }}
              animate={sectionInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href={`tel:${call.number}`} className='flex gap-2'>
                <span className='font-semibold'>{call.label}:</span>
                <span>{call.number}</span>
              </Link>
            </motion.div>
          ))}
        </ContactCard>
        <ContactCard icon={IoMdMail} title='Email'>
          <motion.div
            initial={{ opacity: 1 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href='mailto:sales@autoglassshop.com.au'>
              sales@autoglassshop.com.au
            </Link>
          </motion.div>
        </ContactCard>
      </motion.div>
      <Suspense fallback={<LoadingSpinner />}>
        <ContactUsForm />
      </Suspense>
    </section>
  )
}

export default Contact
