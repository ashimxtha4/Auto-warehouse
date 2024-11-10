import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import defaultImage from '@/assets/default.png'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { productProps } from '@/services/api/api-service/product/product-list'
import ButtonLoader from '@/utils/button-loader'
import { ArrowRight, Plus } from 'lucide-react'

// product card

const ProductItem = ({ item }: { item: productProps }) => {
  const { viewType, isPending, handleAddToCart } = useVehicleParts()

  return (
    <Card
      className={cn(
        viewType === null
          ? 'flex max-w-[250px] flex-col justify-between'
          : 'mb-4 flex w-full items-start gap-4',
        'relative rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'
      )}
    >
      <CardHeader
        className={cn(
          'flex-shrink-0 p-2 md:p-4',
          viewType !== null ? 'w-[150px]' : 'order-none'
        )}
      >
        <Image
          src={defaultImage || item.image}
          alt={item.name || 'default-image'}
          width={300}
          height={150}
          className={cn(
            'rounded-md object-cover',
            viewType !== null ? 'h-auto w-full' : 'max-h-[150px] w-full'
          )}
        />
      </CardHeader>

      <CardContent
        className={cn(
          'flex h-full flex-col p-4',
          viewType !== null ? 'w-full' : ''
        )}
      >
        <div className='flex-grow'>
          <span className='block py-2 text-lg font-bold md:text-xl'>
            {item?.name ?? '-'}
          </span>

          <span className='block w-fit rounded-full bg-green-200 px-3 py-1 text-xs font-medium text-green-700'>
            <span>SKU:</span> {item?.sku ?? '-'}
          </span>

          <span className='block py-2 text-xl font-bold text-green-700'>
            <span className='text-sm font-medium text-gray-400'>FROM:</span> $
            {item?.price ?? 'N/A'}
          </span>
        </div>

        <div className='mt-auto'>
          <hr className='mb-4 border-t border-gray-300' />
          <div
            className={
              viewType !== null
                ? 'flex items-center gap-4'
                : 'flex justify-between'
            }
          >
            <Button
              className='flex items-center justify-center bg-green-600 px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105 hover:bg-green-700'
              onClick={() => handleAddToCart(item.id)}
              disabled={isPending}
              style={{ minWidth: '130px' }}
            >
              {isPending ? (
                <>
                  <ButtonLoader />
                  <span className='ml-2'>Adding...</span>
                </>
              ) : (
                <>
                  Add to Cart
                  <Plus className='ml-2 h-4 w-4' />
                </>
              )}
            </Button>

            <Link
              href={`/product?id=${item.id}`}
              className='flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium text-gray-400 hover:text-gray-700'
            >
              View Details
              <ArrowRight className='ml-1 h-4 w-4' />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem
