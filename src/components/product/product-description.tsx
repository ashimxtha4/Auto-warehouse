import React from 'react'
import { Card } from '../ui/card'
import { Car } from 'lucide-react'
import { DataProps } from '@/services/api/api-service/product/single-product'

const ProductDescription = ({
  productData
}: {
  productData: DataProps | undefined
}) => {
  return (
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
  )
}

export default ProductDescription
