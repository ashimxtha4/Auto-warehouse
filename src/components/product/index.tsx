'use client'

import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useGetProductDetails } from '@/hooks/product-details.hook'
import ButtonLoader from '@/utils/button-loader'
import { LoadingSpinner } from '../ui/loading-spinner'
import { Plus } from 'lucide-react'
import { DEFAULT_IMAGE } from '@/utils/default-image-url'
import ProductDescription from './product-description'

// product details
const ProductPage = () => {
  const {
    handleAddToCart,
    isPending,
    productData,
    productLoading,
    handleMouseLeave,
    handleMouseMove,
    isModalOpen,
    selectedImageIndex,
    setIsModalOpen,
    setSelectedImageIndex,
    zoomStyle,
    productImages
  } = useGetProductDetails()

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
              src={
                productImages?.length
                  ? productImages[selectedImageIndex].image
                  : DEFAULT_IMAGE
              }
              loading='lazy'
              width={400}
              height={150}
              alt='Product Image'
              style={zoomStyle}
              className='h-auto w-full object-cover transition-transform duration-300 ease-in-out'
            />
          </div>

          <div className='mt-4 flex items-center justify-center space-x-3 md:w-[80%]'>
            {productImages?.map((image, index) => (
              <Image
                key={index}
                loading='lazy'
                src={image.image || DEFAULT_IMAGE}
                alt={`Product ${image.id}`}
                width={64}
                height={64}
                onClick={() => setSelectedImageIndex(index)}
                className={`h-16 w-16 cursor-pointer rounded-lg object-cover transition-transform duration-200 ease-in-out ${
                  selectedImageIndex === index
                    ? 'scale-105 ring-2 ring-blue-950'
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
          <p className='my-2'>
            <span className='w-fit rounded-full bg-green-100 px-2 py-1 font-semibold text-green-700'>
              SKU: {productData?.sku || ''}
            </span>
          </p>
          <p className='mt-2 text-lg font-medium text-gray-600'>
            FROM:{' '}
            <span className='font-bold text-green-700'>
              ${productData?.price || '0.00'}
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
              disabled={
                isPending ||
                (productData?.syd_stock === 0 && productData?.mel_stock === 0)
              }
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
      <ProductDescription productData={productData} />

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
                src={
                  productImages?.length
                    ? productImages[selectedImageIndex].image
                    : DEFAULT_IMAGE
                }
                width={500}
                height={200}
                alt='Product Image'
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
