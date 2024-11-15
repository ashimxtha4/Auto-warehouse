'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import image7 from '@/assets/image7.jpg';
import image8 from '@/assets/image8.jpg';
import Image from 'next/image';

const ImageCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="relative mx-auto w-[90%] max-w-[1200px]"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem 
            key={index} 
            className="basis-full lg:basis-2/3"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
