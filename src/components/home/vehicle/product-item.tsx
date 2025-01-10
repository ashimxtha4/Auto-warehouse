import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import Link from 'next/link'
import { productProps } from '@/services/api/api-service/product/product-list'
import ButtonLoader from '@/utils/button-loader'
import { IoArrowForward } from 'react-icons/io5'
import { DEFAULT_IMAGE } from '@/utils/default-image-url'
import { CiShoppingCart } from 'react-icons/ci'

// product card
const ProductItem = ({ item }: { item: productProps }) => {
  const IMAGE_BASE_URL = 'https://backend.autoglassshop.com.au/'
  const { viewType, isPending, handleAddToCart, router } = useVehicleParts()

  return (
    <Card
      className={cn(
        viewType === null
          ? 'flex max-w-[290px] flex-col justify-between'
          : 'mb-4 flex w-full items-start gap-4',
        'relative rounded-3xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer'
      )}
    >
      <CardHeader
        className={cn(
          'p-2 md:p-4',
          viewType !== null ? 'max-w-[300px]' : 'order-none'
        )}
      >
        <Image
          src={
            item.image !== '' || item.image !== null
              ? `${IMAGE_BASE_URL}${item.image}`
              : DEFAULT_IMAGE
          }
          alt={item.name || 'default-image'}
          width={300}
          height={150}
          loading='lazy'
          className={cn(
            'rounded-3xl border h-[150px] object-cover cursor-pointer',
            viewType !== null ? 'h-auto w-full' : 'max-h-[150px] w-full'
          )}
          onClick={() => router.push(`/product?id=${item.id}`)}
        />
      </CardHeader>

      <CardContent
        className={cn(
          'flex h-full flex-col p-4',
          viewType !== null ? 'w-full' : ''
        )}
      >
        <div className='flex-grow'>
          <span
            className='block py-2 text-base font-semibold text-primary-text cursor-pointer md:text-lg'
            onClick={() => router.push(`/product?id=${item.id}`)}
          >
            {item?.name ?? '-'}
          </span>

          <div
            className='flex items-center justify-between'
            onClick={() => router.push(`/product?id=${item.id}`)}
          >
            <span
              className='block w-fit rounded-full bg-[#D3F2D0] px-3 py-1 text-xs font-medium text-primary-text'
            >
              <span>SKU:</span> {item?.sku ?? '-'}
            </span>

            <p className='block py-2 text-primary-text'>
              <span className='text-xs font-normal'>FROM:</span>
              <span className='text-base font-semibold'>
                ${item?.price ?? 'N/A'}
              </span>
            </p>
          </div>
        </div>

        <div className='mt-auto'>
          <hr className='mb-4 border-t border-gray-300' />
          <div
            className={
              viewType !== null
                ? 'flex items-center gap-4'
                : 'flex justify-between gap-1'
            }
          >
            <button
              className='flex items-center justify-center gap-1 rounded-full bg-primary-main px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105'
              onClick={() => handleAddToCart(item.id)}
              disabled={isPending}
            >
              {isPending ? (
                <ButtonLoader />
              ) : (
                <>
                  <CiShoppingCart size={18} />
                  <span className='text-nowrap text-sm font-medium'>
                    Add to Cart
                  </span>
                </>
              )}
            </button>

            <Link
              href={`/product?id=${item.id}`}
              className='flex items-center justify-center gap-1 text-nowrap text-xs font-medium text-primary-text/60 hover:scale-105'
            >
              <span className='text-sm font-semibold'>View Details</span>
              <IoArrowForward size={18} />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem
