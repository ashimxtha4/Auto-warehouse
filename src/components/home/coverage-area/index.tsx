import React, { Fragment } from 'react'
import Image from 'next/image'
import coverage from '@/assets/coverage-area.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const coverageItems = [
  {
    title: 'Convenience:',
    description: 'No need to visit a shop, saving you time.'
  },
  {
    title: 'Flexibility:',
    description: 'We work around your schedule and location.'
  },
  {
    title: 'Quality:',
    description:
      'Same high-quality glass and certified technicians as in-shop services.'
  }
]

const CoverageArea = () => {
  return (
    <section className='grid grid-cols-1 items-start justify-between gap-5 rounded-2xl lg:grid-cols-2'>
      <aside>
        <Image
          src={coverage}
          alt='coverage area'
          className='max-h-[400px] w-full lg:h-full'
        />
      </aside>
      <aside className='relative h-full rounded-3xl bg-white p-5 shadow-md'>
        <p className='text-3xl font-normal text-primary-text'>Benefits</p>
        <ul className='py-5 text-base font-normal text-primary-text'>
          {coverageItems.map((item, index) => (
            <li
              key={index}
              className='list-inside list-disc py-2 text-base font-normal text-primary-text'
            >
              <span className='font-medium text-primary-text'>
                {item.title}
              </span>{' '}
              <span className='text-primary-text/60'>{item.description}</span>
            </li>
          ))}
        </ul>
        <Link
          href='/get-a-quote'
          className='flex w-[270px] items-center justify-between text-nowrap rounded-full bg-primary-text p-2 text-white md:bottom-8 lg:absolute'
        >
          Get a Quote
          <span className='rounded-full bg-white p-2 text-primary-text'>
            <FaArrowRightLong />
          </span>
        </Link>
      </aside>
    </section>
  )
}

export default CoverageArea
