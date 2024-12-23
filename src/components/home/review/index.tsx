import React, { useState } from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'
import avatarImage from '@/assets/avatar.png'
import Image from 'next/image'
import { CiStar } from 'react-icons/ci'

const reviews = [
  {
    name: 'Jane Cooper',
    title: 'CEO',
    review:
      'The mobile service was so convenient and quick. I didn’t have to leave my house!',
    date: '12 June, 2024',
    rating: 4.5
  },
  {
    name: 'John Doe',
    title: 'Manager',
    review: 'Excellent service and very professional. Highly recommended!',
    date: '15 July, 2024',
    rating: 4.8
  },
  {
    name: 'Alice Smith',
    title: 'Developer',
    review: 'Quick and reliable service. Will use again!',
    date: '20 August, 2024',
    rating: 4.7
  },
  {
    name: 'Bob Johnson',
    title: 'Designer',
    review: 'Great experience, very satisfied with the service.',
    date: '25 September, 2024',
    rating: 4.6
  },
  {
    name: 'Charlie Brown',
    title: 'Engineer',
    review: 'Fast and efficient service. Highly recommend!',
    date: '30 October, 2024',
    rating: 4.9
  }
]

const UserReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 2 : prevIndex - 2
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex >= reviews.length - 2 ? 0 : prevIndex + 2
    )
  }

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex >= reviews.length - 2

  return (
    <section className='grid grid-cols-1 items-start justify-between gap-5 rounded-2xl lg:grid-cols-3'>
      <aside className='relative h-full rounded-3xl bg-white p-5 shadow-md'>
        <p className='text-3xl font-normal text-primary-text'>
          Loved by our customers
        </p>
        <div className='bottom-5 flex items-center justify-start gap-2 md:gap-4 lg:absolute'>
          <button
            type='button'
            className={`rounded-full p-4 ${isPrevDisabled ? 'bg-primary-text/60' : 'bg-primary-text'}`}
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            <FaArrowLeftLong className='text-white' />
          </button>
          <button
            type='button'
            className={`rounded-full p-4 ${isNextDisabled ? 'bg-primary-text/60' : 'bg-primary-text'}`}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <FaArrowRightLong className='text-white' />
          </button>
        </div>
      </aside>
      {reviews.slice(currentIndex, currentIndex + 2).map((review, index) => (
        <aside
          key={index}
          className='relative h-full rounded-3xl bg-white p-5 shadow-md lg:min-h-[318px]'
        >
          <div className='flex items-center gap-2'>
            <Image
              src={avatarImage}
              alt='user'
              className='h-[71px] w-[71px] rounded-full object-cover'
            />
            <div className='flex flex-col items-start justify-start'>
              <span className='text-[18px] font-semibold text-primary-text'>
                {review.name}
              </span>
              <span className='text-[17px] font-semibold text-primary-text/60'>
                {review.title}
              </span>
            </div>
          </div>
          <p className='py-5 text-base font-normal text-primary-text/60'>
            {review.review}
          </p>
          <div className='bottom-5 w-[90%] lg:absolute'>
            <p className='h-[0.5px] bg-primary-text/40' />
            <div className='flex items-center justify-between py-5'>
              <div className='flex items-center gap-1'>
                <CiStar className='font-semibold text-[#E8BA17]' />
                <span className='text-sm font-semibold'>{review.rating}</span>
              </div>
              <p className='text-xs text-primary-text/60'>{review.date}</p>
            </div>
          </div>
        </aside>
      ))}
    </section>
  )
}

export default UserReview
