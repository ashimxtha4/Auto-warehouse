import React, { Suspense } from 'react'
import Link from 'next/link'
import { CONTACT_CALL_DATA } from '@/constants/contact-data'
import { IoCallOutline } from 'react-icons/io5'
import { CiMail } from 'react-icons/ci'
import ContactUsForm from './get-in-touch'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Contact = () => {
  return (
    <section className='grid grid-cols-1 items-start justify-between gap-5 rounded-2xl lg:grid-cols-3'>
      <aside className='h-full rounded-3xl bg-white p-5 shadow-md'>
        <p className='py-5 text-3xl font-normal text-primary-text'>
          Contact Us
        </p>
        {CONTACT_CALL_DATA.map((call, index) => (
          <Link
            key={index}
            href={`tel:${call.number}`}
            className='flex w-[250px] justify-between gap-2 py-1 text-base font-normal text-primary-text'
          >
            <span className='flex items-center gap-1'>
              <IoCallOutline />
              {call.label}:
            </span>
            <span className='text-end'>{call.number}</span>
          </Link>
        ))}
        <Link
          href='mailto:sales@autoglassshop.com.au'
          className='flex gap-2 py-1 text-base font-normal text-primary-text'
        >
          <span className='flex items-center gap-1'>
            <CiMail />
          </span>
          <span className='text-end'>sales@autoglassshop.com.au</span>
        </Link>
      </aside>
      <Suspense fallback={<LoadingSpinner />}>
        <ContactUsForm />
      </Suspense>
    </section>
  )
}

export default Contact
