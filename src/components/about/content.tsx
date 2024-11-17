'use client'

import React, { useEffect } from 'react'
import { CheckCircle, Shield, Clock, MapPin, Wrench, Mail } from 'lucide-react'
import { ABOUT_US_ITEMS } from '@/constants/about-us-items'
import { SectionDescription, SectionHeader } from '@/utils/section-header'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Content = () => {
  const { introduction, commitment, whyChooseUs, services, contact } =
    ABOUT_US_ITEMS

  const controls = useAnimation()
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const itemControls = useAnimation()
  const { ref: itemsRef, inView: itemsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })
  useEffect(() => {
    if (sectionInView) {
      controls.start('visible')
    }
  }, [sectionInView, controls])

  useEffect(() => {
    if (itemsInView) {
      itemControls.start('visible')
    }
  }, [itemsInView, itemControls])

  return (
    <div
      ref={sectionRef}
      className='container mx-auto my-10 max-w-4xl rounded-lg bg-white p-6 shadow-xl'
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={controls}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: 'easeOut' }
          }
        }}
      >
        <SectionHeader>About Us</SectionHeader>
        <SectionDescription>
          Since{' '}
          <span className='font-semibold text-green-700'>
            {introduction.year}
          </span>
          , {introduction.description}
        </SectionDescription>
      </motion.div>

      <motion.section
        className='mb-12 rounded-lg bg-gray-100 p-6 shadow-inner'
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2 }
          }
        }}
      >
        <SectionHeader>Our Commitment</SectionHeader>
        <blockquote className='mb-4 border-l-4 border-green-700 pl-4 text-xl italic text-gray-800'>
          “{commitment.quote}”
        </blockquote>
        <p className='text-gray-700'>{commitment.description}</p>
      </motion.section>

      <motion.section
        ref={itemsRef}
        className='mb-12'
        initial='hidden'
        animate={itemControls}
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
          }
        }}
      >
        <SectionHeader>Why Choose Us?</SectionHeader>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {whyChooseUs.map((item, index) => {
            const Icon =
              item.icon === 'MapPin'
                ? MapPin
                : item.icon === 'Wrench'
                  ? Wrench
                  : item.icon === 'Shield'
                    ? Shield
                    : item.icon === 'CheckCircle'
                      ? CheckCircle
                      : Clock

            return (
              <motion.div
                key={index}
                className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className='mr-3 h-6 w-6 text-green-700' />
                <span className='text-lg text-gray-700'>
                  {item.description}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        ref={itemsRef}
        className='mb-12'
        initial='hidden'
        animate={itemControls}
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.4 }
          }
        }}
      >
        <SectionHeader>Our Services</SectionHeader>
        <SectionDescription>
          We offer a wide range of services to meet your needs:
        </SectionDescription>
        <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2'>
          {services.map((service, index) => (
            <motion.p
              key={index}
              className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {service}
            </motion.p>
          ))}
        </div>
      </motion.section>

      <motion.section
        className='mt-10 text-center'
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        variants={{
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.8 }
          }
        }}
      >
        <SectionHeader>Get in Touch</SectionHeader>
        <SectionDescription>
          Ready to experience quality craftsmanship? Contact us today for a free
          quote or emergency service.
        </SectionDescription>
        <div className='mx-auto max-w-xl rounded-lg bg-green-50 p-6 shadow-md'>
          {contact.locations.map((location, index) => (
            <motion.p
              key={index}
              className='mb-4 flex items-center justify-center text-lg text-gray-700'
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className='mr-2 h-5 w-5 text-green-700' />
              <span className='font-semibold text-green-700'>
                {location.label}:
              </span>{' '}
              <a
                href={`tel:${location.phone}`}
                className='ml-2 text-green-700 hover:underline'
              >
                {location.phone}
              </a>
            </motion.p>
          ))}
          <motion.p
            className='mb-4 flex items-center justify-center text-lg text-gray-700'
            whileHover={{ scale: 1.05 }}
          >
            <Mail className='mr-2 h-5 w-5 text-green-700' />
            <span className='font-semibold text-green-700'>Email:</span>{' '}
            <a
              href={`mailto:${contact.email}`}
              className='ml-2 text-green-700 hover:underline'
            >
              {contact.email}
            </a>
          </motion.p>
        </div>
      </motion.section>
    </div>
  )
}

export default Content