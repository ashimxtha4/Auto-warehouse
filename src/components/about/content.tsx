'use client'

import React from 'react'
import { CheckCircle, Shield, Clock, MapPin, Wrench, Mail } from 'lucide-react'

const Content = () => {
  return (
    <div className='mx-auto my-10 max-w-4xl rounded-lg bg-white p-6 shadow-xl'>
      <h2 className='mb-8 text-center text-4xl font-bold text-green-700'>
        About Us
      </h2>
      <p className='mb-8 text-center text-lg leading-relaxed text-gray-700'>
        Since{' '}
        <span className='font-semibold text-green-700'>[starting year]</span>,
        we’ve been Western Australia’s trusted go-to for vehicle glass repair
        and replacement. As a proudly Australian-owned business, we embrace the
        unique challenges of our climate—from the blazing sun to rugged outback
        roads.
      </p>

      <section className='mb-12 rounded-lg bg-gray-100 p-6 shadow-inner'>
        <h3 className='mb-4 text-3xl font-semibold text-green-700'>
          Our Commitment
        </h3>
        <blockquote className='mb-4 border-l-4 border-green-700 pl-4 text-xl italic text-gray-800'>
          “With over <span className='font-semibold'>[years here]</span> years
          of hands-on experience, we guarantee the quality and safety of every
          job. From windscreen replacements to chip repairs, we bring
          unparalleled expertise and quality standards.”
        </blockquote>
        <p className='text-gray-700'>
          Our certified technicians work with the highest-quality materials that
          meet or exceed Australian Safety Standards. Your vehicle’s safety and
          your satisfaction are our top priorities.
        </p>
      </section>

      <section className='mb-12'>
        <h3 className='mb-6 text-center text-3xl font-semibold text-green-700'>
          Why Choose Us?
        </h3>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'>
            <MapPin className='mr-3 h-6 w-6 text-green-700' />
            <span className='text-lg text-gray-700'>
              Local Expertise: We know Australian vehicles and conditions.
            </span>
          </div>
          <div className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'>
            <Wrench className='mr-3 h-6 w-6 text-green-700' />
            <span className='text-lg text-gray-700'>
              Mobile Service: We come to your location across{' '}
              <span className='font-semibold'>[city]</span>.
            </span>
          </div>
          <div className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'>
            <Shield className='mr-3 h-6 w-6 text-green-700' />
            <span className='text-lg text-gray-700'>
              Insurance Approved: Direct billing with top insurers.
            </span>
          </div>
          <div className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'>
            <CheckCircle className='mr-3 h-6 w-6 text-green-700' />
            <span className='text-lg text-gray-700'>
              Secure Warranty: We stand by our work with a comprehensive
              guarantee.
            </span>
          </div>
          <div className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'>
            <Clock className='mr-3 h-6 w-6 text-green-700' />
            <span className='text-lg text-gray-700'>
              Latest Tech: State-of-the-art equipment for perfect fitting.
            </span>
          </div>
          <div className='flex items-start rounded-lg bg-green-50 p-4 shadow-sm'>
            <Clock className='mr-3 h-6 w-6 text-green-700' />
            <span className='text-lg text-gray-700'>
              Fast Service: Most repairs are done the same day.
            </span>
          </div>
        </div>
      </section>

      <section className='mb-12'>
        <h3 className='mb-6 text-center text-3xl font-semibold text-green-700'>
          Our Services
        </h3>
        <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2'>
          <p className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'>
            Windscreen replacement and repair
          </p>
          <p className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'>
            Side and rear window replacement
          </p>
          <p className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'>
            ADAS calibration
          </p>
          <p className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'>
            Window tinting
          </p>
          <p className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'>
            Stone chip repairs
          </p>
          <p className='border-l-4 border-green-700 pl-4 text-lg text-gray-700'>
            Insurance claim assistance
          </p>
        </div>
      </section>

      <section className='mb-12 rounded-lg bg-green-50 p-6'>
        <h3 className='mb-4 text-3xl font-semibold text-green-700'>
          Safety First
        </h3>
        <p className='text-gray-700'>
          Your vehicle’s glass isn’t just a window—it’s a key structural
          component. We use only Australian-certified glass and adhesives to
          ensure your vehicle meets all safety standards.
        </p>
      </section>

      <section className='mb-12'>
        <h3 className='mb-4 text-3xl font-semibold text-green-700'>
          Community Connection
        </h3>
        <p className='text-gray-700'>
          We’re more than just a business—we’re proud members of the{' '}
          <span className='font-semibold'>[city]</span> community. Supporting
          local sports clubs and community events is our way of giving back.
          Together, we’re building a stronger, more connected community.
        </p>
      </section>

      <section className='mt-10 text-center'>
        <h3 className='mb-6 text-3xl font-semibold text-green-700'>
          Get in Touch
        </h3>
        <p className='mb-6 text-lg text-gray-700'>
          Ready to experience quality craftsmanship? Contact us today for a free
          quote or emergency service.
        </p>
        <div className='mx-auto max-w-xl rounded-lg bg-green-50 p-6 shadow-md'>

          <p className='mb-4 flex items-center justify-center text-lg text-gray-700'>
            <MapPin className='mr-2 h-5 w-5 text-green-700' />
            <span className='font-semibold text-green-700'>SYD:</span>{' '}
            <a
              href='tel:0297566887'
              className='ml-2 text-green-700 hover:underline'
            >
              02 9756 6887
            </a>
          </p>

          <p className='mb-4 flex items-center justify-center text-lg text-gray-700'>
            <MapPin className='mr-2 h-5 w-5 text-green-700' />
            <span className='font-semibold text-green-700'>MEL:</span>{' '}
            <a
              href='tel:0393575904'
              className='ml-2 text-green-700 hover:underline'
            >
              03 9357 5904
            </a>
          </p>

          <p className='mb-4 flex items-center justify-center text-lg text-gray-700'>
            <Mail className='mr-2 h-5 w-5 text-green-700' />
            <span className='font-semibold text-green-700'>Email:</span>{' '}
            <a
              href='mailto:sales@autoglassshop.com.au'
              className='ml-2 text-green-700 hover:underline'
            >
              sales@autoglassshop.com.au
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Content
