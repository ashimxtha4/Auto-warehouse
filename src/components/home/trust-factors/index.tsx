import React from 'react'
import Image from 'next/image'
import ratingLogo from '@/assets/icon/rating.png'
import fast from '@/assets/icon/fast.png'
import certified from '@/assets/icon/certified.png'
import easyReturn from '@/assets/icon/easy return.png'
import support from '@/assets/icon/support.png'

const trustItems = [
  {
    image: fast,
    title: 'Fast',
    desc: 'Quick, hassle-free glass replacement done on your schedule.'
  },
  {
    image: certified,
    title: 'Certified',
    desc: 'Certified technicians ensuring quality vehicle glass replacements.'
  },
  {
    image: easyReturn,
    title: 'Easy Return',
    desc: '30-day hassle-free return guarantee on all services.'
  },
  {
    image: support,
    title: 'Support',
    desc: 'Dedicated support for seamless glass replacement assistance.'
  }
]

const TrustFactors = () => {
  return (
    <section className='grid grid-cols-1 items-start justify-between gap-5 rounded-2xl bg-white p-5 shadow-md lg:grid-cols-2'>
      <aside>
        <p className='text-3xl font-normal text-primary-text'>
          Comprehensive solutions for all your vehicle glass replacement needs.
        </p>
        <p className='py-5 text-base font-normal text-primary-text/60'>
          Discover our expert services, from windshield replacements to chip
          repairs, ensuring your vehicle glass is restored to perfection.
        </p>
        <div className='flex items-center gap-2'>
          <Image
            src={ratingLogo}
            alt='rating'
            className='h-10 w-10 md:h-auto md:w-auto'
          />
          <div className='text-base text-primary-text'>
            Rated <span className='font-medium'>4.9/5</span> from over{' '}
            <span className='font-medium'>3,000,000 users.</span>
          </div>
        </div>
      </aside>
      <aside className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {trustItems.map((item, index) => (
          <div key={index} className='flex items-start gap-3'>
            <Image
              src={item.image}
              className='h-10 w-10 md:h-auto md:w-auto'
              alt={item.title}
            />
            <div>
              <h4 className='text-lg font-semibold text-primary-text'>
                {item.title}
              </h4>
              <p className='text-base font-normal text-primary-text/60'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </aside>
    </section>
  )
}

export default TrustFactors
