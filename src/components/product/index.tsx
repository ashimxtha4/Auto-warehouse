'use client'

import React, { useState } from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import defaultImage from '@/assets/default.png'
import defaultImage1 from '@/assets/car.jpg'
import { useGetProductDetails } from '@/hooks/product-details'
import ButtonLoader from '@/utils/button-loader'
import { LoadingSpinner } from '../ui/loading-spinner'
import { Car, Plus } from 'lucide-react'

// product details
const ProductPage = () => {
  const images = [defaultImage, defaultImage1]
  const [zoomStyle, setZoomStyle] = useState({})
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { handleAddToCart, isPending, productData, productLoading } =
    useGetProductDetails()

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = ((clientX - left) / width) * 100
    const y = ((clientY - top) / height) * 100

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(3)'
    })
  }

  const handleMouseLeave = () => {
    setZoomStyle({})
  }

  return (
    <div className='container mx-auto p-6'>
      {productLoading && <LoadingSpinner />}

      <Card className='mb-10 flex flex-col items-center rounded-lg bg-white p-6 shadow-xl md:flex-row md:space-x-10'>
        <div className='flex max-w-[400px] flex-col items-center md:items-start'>
          <div
            className='relative cursor-pointer overflow-hidden rounded-lg md:w-[80%]'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={images[selectedImageIndex]}
              alt='Product Image'
              style={zoomStyle}
              className='h-auto w-full object-cover transition-transform duration-300 ease-in-out'
            />
          </div>

          <div className='mt-4 flex items-center justify-center space-x-3 md:w-[80%]'>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImageIndex(index)}
                className={`h-16 w-16 cursor-pointer rounded-lg object-cover transition-transform duration-200 ease-in-out ${
                  selectedImageIndex === index
                    ? 'scale-105 ring-2 ring-[#005069]'
                    : 'hover:scale-105'
                }`}
              />
            ))}
          </div>
        </div>

        <div className='mt-8 flex-grow text-center md:mt-0 md:text-left'>
          <h1 className='text-3xl font-bold text-green-700'>
            {productData?.name || ''}
          </h1>
          <p className='mt-2 text-lg font-medium text-gray-600'>
            FROM:{' '}
            <span className='font-bold text-green-700'>
              ${productData?.price || '0.00'}
            </span>
          </p>
          <p>
            <span className='text-m mt-2 w-fit rounded-full bg-green-200 px-2 font-semibold text-green-700'>
              SKU: {productData?.sku || ''}
            </span>
          </p>

          <div className='mt-6 flex justify-center space-x-10 md:justify-start'>
            <div>
              <p className='text-gray-500'>SYD In Stock:</p>
              <p className='text-lg font-medium text-gray-700'>
                {productData?.syd_stock === 1 ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className='text-gray-500'>MEL In Stock:</p>
              <p className='text-lg font-medium text-gray-700'>
                {productData?.mel_stock === 1 ? 'Yes' : 'No'}
              </p>
            </div>
          </div>

          <div className='mt-8'>
            <Button
              className='flex items-center justify-center rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-green-700'
              onClick={handleAddToCart}
              disabled={isPending}
            >
              {isPending ? (
                <ButtonLoader />
              ) : (
                <>
                  Add to Cart
                  <Plus className='-mr-1 ml-2 h-5 w-5' />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      <Card className='rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='mb-4 flex items-center text-2xl font-bold text-green-700'>
          <Car className='mr-3 h-6 w-6 text-green-700' />
          Product Details
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div>
            <p>
              <span className='font-medium'>Description:</span>{' '}
              {productData?.description || 'N/A'}
            </p>
            <p>
              <span className='font-medium'>Position:</span>{' '}
              {productData?.position || 'N/A'}
            </p>
            <p>
              <span className='font-medium'>Size:</span>{' '}
              {productData?.size || 'N/A'}
            </p>
            <p>
              <span className='font-medium'>Type:</span>{' '}
              {productData?.vehicle_type || 'N/A'}
            </p>
          </div>
          <div>
            <p>
              <span className='font-medium'>Color:</span>{' '}
              {productData?.color || 'N/A'}
            </p>
            <p>
              <span className='font-medium'>Vehicle Brand:</span>{' '}
              {productData?.vehicle_brand || 'N/A'}
            </p>
            <p>
              <span className='font-medium'>Model:</span>{' '}
              {productData?.vehicle_model || 'N/A'}
            </p>
            <p>
              <span className='font-medium'>Series:</span>{' '}
              {productData?.vehicle_series || 'N/A'}
            </p>
          </div>
        </div>
      </Card>

      {isModalOpen && (
        <div className='fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative w-[70vw] max-w-[500px] rounded-lg bg-white p-6 shadow-2xl'>
            <button
              className='absolute right-4 top-4 z-[100000] flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-600 shadow-lg hover:bg-gray-300 hover:text-gray-800'
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div
              className='relative cursor-pointer overflow-hidden rounded-lg'
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={images[selectedImageIndex]}
                alt='Zoomed Product Image'
                style={zoomStyle}
                className='h-auto w-full object-cover transition-transform duration-300 ease-in-out'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
