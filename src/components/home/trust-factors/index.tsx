import React from 'react'
import Image from 'next/image'
import ratingLogo from '@/assets/icon/rating.png'
import fast from '@/assets/icon/fast.png'
import certified from '@/assets/icon/certified.png'
// import easyReturn from '@/assets/icon/easy return.png'
import support from '@/assets/icon/support.png'

const trustItems = [
  {
    image: certified,
    title: 'Certified',
    desc: 'Certified auto glass products accredited by global quality certification including the US DOT, the European ECE and CSI AS/NZS 2080:2019 standards.'
  },
  {
    image: support,
    title: 'Support',
    desc: 'Dedicated team who are experts in the auto glass industry to assist you in identifying the correct auto glass.'
  },
  {
    image: fast,
    title: 'Fast',
    desc: 'Easy-to-use online catalogue.'
  },
  // {
  //   image: easyReturn,
  //   title: 'Easy Return',
  //   desc: '30-day hassle-free return guarantee on all services.'
  // },
]

const TrustFactors = () => {
  return (
    <section className='grid grid-cols-1 items-start justify-between gap-5 rounded-2xl bg-white p-5 shadow-md lg:grid-cols-2'>
      <aside>
        <p className='text-3xl font-normal text-primary-text'>
          Comprehensive solutions for all your vehicle glass needs
        </p>
        <p className='py-5 text-base font-normal text-primary-text/60'>
          Discover our comprehensive online catalogue to find your glass, place an online order and talk to our dedicated team to secure your glass.
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
