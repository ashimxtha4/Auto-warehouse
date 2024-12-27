'use client'

import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { useGetProductDetails } from '@/hooks/product-details.hook'
import ButtonLoader from '@/utils/button-loader'
import { LoadingSpinner } from '../ui/loading-spinner'
import { DEFAULT_IMAGE } from '@/utils/default-image-url'
import { FaRegStar, FaStar } from "react-icons/fa";
import { cn } from '@/lib/utils'

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

      <Card className='mb-10 flex flex-col items-start rounded-3xl bg-white p-6 shadow-xl md:flex-row md:space-x-10'>
        <div className='flex max-w-[450px] flex-col items-center md:items-start'>
          <div
            className='relative cursor-pointer overflow-hidden rounded-2xl md:w-[80%]'
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
              height={400}
              alt='Product Image'
              style={zoomStyle}
              className='h-full w-full object-cover transition-transform duration-300 ease-in-out'
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
                className={cn('h-16 w-16 cursor-pointer object-cover transition-transform duration-200 ease-in-out', selectedImageIndex === index
                  ? 'scale-105 ring-2 ring-primary-main'
                  : 'hover:scale-105'
                )}
              />
            ))}
          </div>
          <div className='mt-8 w-full'>
            <button
              className='rounded-full w-full bg-primary-main px-6 py-3 disabled:cursor-not-allowed font-semibold text-white shadow-md transition-transform disabled:hover:scale-100 hover:scale-105 disabled:bg-primary-main/80 hover:bg-primary-main'
              onClick={handleAddToCart}
              disabled={
                isPending ||
                (productData?.syd_stock === 0 && productData?.mel_stock === 0)
              }
            >
              {isPending ? (
                <ButtonLoader />
              ) : (
                'ADD TO CART'
              )}
            </button>
          </div>
        </div>
        <div className='mt-8 flex-grow text-center md:mt-0 md:text-left'>
          <h1 className='md:text-3xl text-xl font-normal text-primary-text'>
            {productData?.name || ''}
          </h1>
          <div className='my-2 md:my-4 border-b border-b-[#B0B0B0] pb-3 flex items-center gap-2'>
            <p className='flex gap-1'>
              {
                [1, 2, 3, 4].map((_, index) => (
                  <FaStar key={index} className='text-[#E8BA17]' />
                ))
              }
              <FaRegStar className='text-[#999999]' />
            </p>
            <p className='text-primary-text/80 text-base'>(12 customer reviews)</p>
          </div>
          <p className='mt-2 text-base font-normal text-primary-text/80'>
            FROM:{' '}
            <span className='font-semibold text-lg text-primary-text'>
              AUD ${productData?.price || '0.00'}
            </span>
          </p>
          <p className='my-2'>
            <span className='w-fit rounded-full bg-[#D3F2D0] text-sm px-2 py-1 font-medium text-primary-text'>
              SKU: {productData?.sku || ''}
            </span>
          </p>

          <p className='my-2'>
            <span className='mt-2 text-base font-normal text-primary-text/80'>
              Color: <span className='text-primary-text/90'>{productData?.color || 'N/A'}</span>
            </span>
          </p>

          <div className='my-2 border-b border-b-[#B0B0B0] pb-3 flex flex-col justify-center md:justify-start'>
            <div className='flex justify-between gap-1 max-w-[170px]'>
              <p className='text-primary-text/80 text-base'>Stock in Sydney:</p>
              <p className='text-base font-medium text-primary-text'>
                {productData?.syd_stock === 1 ? 'Yes' : 'No'}
              </p>
            </div>
            <div className='flex justify-between gap-1 max-w-[170px]'>
              <p className='text-primary-text/80 text-base'>Stock in Melbourne: </p>
              <p className='text-base font-medium text-primary-text'>
                {productData?.mel_stock === 1 ? 'Yes' : 'No'}
              </p>
            </div>
          </div>

          {/* product details */}
          <div className='my-2 md:my-5'>
            <p className='text-lg font-normal text-primary-text/80'>Product Details</p>
            <ul className='list-disc my-2 list-inside text-base font-normal text-primary-text/80'>
              <li>Description: <span className='ml-1 text-primary-text/90'>{productData?.description || 'N/A'}</span></li>
              <li>Position: <span className='ml-1 text-primary-text/90'>{productData?.position || 'N/A'}</span></li>
              <li>Size: <span className='ml-1 text-primary-text/90'>{productData?.size || 'N/A'}</span></li>
              <li>Type: <span className='ml-1 text-primary-text/90'>{productData?.vehicle_type || 'N/A'}</span></li>
              <li>Vehicle Brand: <span className='ml-1 text-primary-text/90'>{productData?.vehicle_brand || 'N/A'}</span></li>
              <li>Model: <span className='ml-1 text-primary-text/90'>{productData?.vehicle_model || 'N/A'}</span></li>
              <li>Series: <span className='ml-1 text-primary-text/90'>{productData?.vehicle_series || 'N/A'}</span></li>
            </ul>
          </div>
        </div>
      </Card>
      {/* <ProductDescription productData={productData} /> */}

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
