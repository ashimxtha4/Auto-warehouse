'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import car from '@/assets/car.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: car,
    caption: 'Auto Glass Experts at Your Service'
  },
  {
    src: car,
    caption: 'Mobile Service Available Across the City'
  },
  {
    src: car,
    caption: 'Certified Technicians Ensuring Your Safety'
  }
]

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg shadow-lg'>
      <div className='relative overflow-hidden rounded-lg pb-[56.25%]'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              index === currentSlide ? 'block' : 'hidden'
            } transition-opacity duration-700`}
          >
            <Image
              src={slide.src}
              alt={slide.caption}
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />

            <div className='clip-path-right-diagonal absolute inset-y-0 right-0 w-1/2 bg-primary-main bg-opacity-80'></div>

            <div className='absolute inset-y-0 right-0 flex w-1/4 items-center justify-end pr-8 text-white'>
              <h2 className='text-medium text-right font-bold sm:text-2xl lg:text-4xl'>
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-primary-text bg-opacity-50 p-2 text-white hover:bg-opacity-70'
      >
        <ChevronLeft className='h-6 w-6' />
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-primary-text bg-opacity-50 p-2 text-white hover:bg-opacity-70'
      >
        <ChevronRight className='h-6 w-6' />
      </button>

      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? 'bg-primary-main' : 'bg-primary-text/30'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
