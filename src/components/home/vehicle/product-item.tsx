import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import defaultImage from '@/assets/default.png'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { productProps } from '@/services/api/api-service/product/product-list'
import ButtonLoader from '@/utils/button-loader'

const ProductItem = ({ item }: { item: productProps }) => {
  const { viewType, isPending, handleAddToCart } = useVehicleParts()
  return (
    <Card
      className={cn(
        viewType === null ? 'max-w-[250px]' : 'mb-2 flex w-full items-center',
        'relative min-h-max bg-white shadow-lg'
      )}
    >
      <CardHeader className='justify-center p-1 md:p-0'>
        <Image
          src={defaultImage || item.image}
          alt={item.name || 'default-image'}
          width={200}
          height={100}
          className={cn(
            'object-cover',
            viewType !== null
              ? 'max-w-[100px] md:max-w-[350px]'
              : 'w-[200px] self-center md:w-[350px]'
          )}
        />
      </CardHeader>
      <CardContent className={cn('p-1 md:p-2', viewType === null && 'p-4')}>
        <span className='block py-2 text-sm font-medium md:text-base'>
          {item?.name ?? '-'}
        </span>
        <span className='block py-1 text-sm font-medium md:text-base'>
          <span className='text-primary-dark'>SKU:</span> {item?.sku ?? '-'}
        </span>
        <span className='block py-1 text-sm font-medium md:text-base'>
          <span className='text-primary-dark'>FROM:</span> $
          {item?.price ?? 'N/A'}
        </span>
        <div
          className={cn(
            viewType === null
              ? 'flex justify-between gap-2'
              : 'flex justify-start gap-5'
            // 'absolute'
          )}
        >
          <Button
            className='bg-blue-600 text-nowrap hover:from-green-600 hover:to-blue-600'
            onClick={() => handleAddToCart(item.id)}
            disabled={isPending}
          >
            {isPending && <ButtonLoader />}
            Add to Cart
          </Button>
          <Link
            href={`/product?id=${item.id}`}
            className='bg-primary-main flex items-center justify-center text-nowrap rounded-md px-2 py-1 text-xs font-medium text-white hover:from-green-600 hover:to-blue-600 md:text-sm'
          >
            View Details
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem
