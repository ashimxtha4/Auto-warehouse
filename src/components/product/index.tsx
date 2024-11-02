'use client'

import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import defaultImage from '@/assets/default.png'
import defaultImage1 from '@/assets/car.jpg'
import { useGetProductDetails } from '@/hooks/product-details'
import ButtonLoader from '@/utils/button-loader'

const ProductPage = () => {
  const images = [defaultImage, defaultImage1]

  const {
    handleAddToCart,
    isPending,
    selectedImageIndex,
    setSelectedImageIndex,
    productData
  } = useGetProductDetails()

  return (
    <div className='container mx-auto p-6'>
      {/* Upper Section */}
      <Card className='mb-6 flex flex-col items-center p-4 shadow-lg md:flex-row'>
        <div className='flex max-w-[400px] flex-col items-start'>
          {/* Main Image */}
          <Image
            src={images[selectedImageIndex]}
            alt='default'
            className='mb-4 h-auto w-full rounded-md object-cover md:w-[60%]'
          />

          {/* Thumbnail Images with Arrows */}
          <div className='mt-2 flex items-center justify-center space-x-2 md:w-[60%]'>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${index}`}
                onClick={() => setSelectedImageIndex(index)}
                className={`h-full w-16 cursor-pointer rounded-md object-cover transition-transform ${
                  selectedImageIndex === index
                    ? 'scale-105 ring-2 ring-blue-500'
                    : 'hover:scale-105'
                }`}
              />
            ))}
          </div>
        </div>

        <div className='mt-4 flex-grow md:ml-8 md:mt-0'>
          <h1 className='text-2xl font-semibold'>{productData?.name || ''}</h1>
          <p className='mt-2 text-lg font-bold text-gray-700'>
            FROM: ${productData?.price || ''}
          </p>
          <p className='mt-1 text-lg text-gray-800'>
            SKU: {productData?.sku || ''}
          </p>

          <div className='mt-4 flex space-x-4'>
            <div>
              <p className='text-gray-500'>SYD In Stock:</p>
              <p className='text-lg font-medium'>
                {productData?.syd_stock === 1 ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className='text-gray-500'>MEL In Stock:</p>
              <p className='text-lg font-medium'>
                {productData?.mel_stock === 1 ? 'Yes' : 'No'}
              </p>
            </div>
          </div>

          <div className='mt-6 flex space-x-4'>
            {/* <Button className='bg-primary-main hover:bg-primary-dark'>
              Buy Now
            </Button> */}
            <Button
              className='bg-primary-main hover:bg-primary-dark'
              onClick={handleAddToCart}
              disabled={isPending}
            >
              {isPending && <ButtonLoader />}
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>

      {/* Lower Section */}
      <Card className='p-4 shadow-lg'>
        <h2 className='mb-4 text-xl font-semibold'>Product Details</h2>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
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
            <p>
              <span className='font-medium'>Type:</span>{' '}
              {productData?.vehicle_type || 'N/A'}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductPage
