'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import image5 from '@/assets/image5.jpg'
import image6 from '@/assets/image6.jpg'
import image7 from '@/assets/image7.jpg'
import image8 from '@/assets/image8.jpg'
import Image from 'next/image'

const ImageCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ]
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 7000
        })
      ]}
      className='mx-auto w-[80%] md:w-[95%]'
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className='basis-[100%] md:basis-1/2'>
            <div className='flex aspect-video items-center justify-center md:aspect-square'>
              <Image
                key={index}
                src={image}
                alt={`image${index}`}
                className='aspect-[3/2] w-full object-contain'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ImageCarousel
