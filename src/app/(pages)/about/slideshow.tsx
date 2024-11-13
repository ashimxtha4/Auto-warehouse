"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import car from '@/assets/car.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: car,
    caption: "Auto Glass Experts at Your Service",
  },
  {
    src: car,
    caption: "Mobile Service Available Across the City",
  },
  {
    src: car,
    caption: "Certified Technicians Ensuring Your Safety",
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">

      <div className="relative pb-[56.25%] overflow-hidden rounded-lg">
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
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />

            <div className="absolute inset-y-0 right-0 w-1/2 bg-green-700 bg-opacity-80 clip-path-right-diagonal"></div>

            <div className="absolute inset-y-0 right-0 w-1/4 flex items-center justify-end text-white pr-8">
              <h2 className="text-right text-medium sm:text-2xl lg:text-4xl font-bold">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-green-700' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
