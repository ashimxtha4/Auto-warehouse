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
        viewType === null ? 'max-w-[250px]' : 'mb-2 flex w-full items-center'
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
        <span className='block py-2 text-sm font-medium md:text-xl'>
          {item?.name ?? '-'}
        </span>
        <span className='block py-1 text-sm font-medium md:text-xl'>
          <span className='text-primary-dark'>SKU:</span> {item?.sku ?? '-'}
        </span>
        <span className='block py-1 text-sm font-medium md:text-xl'>
          <span className='text-primary-dark'>FROM:</span> ${item?.price ?? '-'}
        </span>
        <div
          className={cn(
            viewType === null
              ? 'flex justify-between gap-2'
              : 'flex justify-start gap-5'
          )}
        >
          <Button
            className='bg-primary-main hover:bg-primary-dark'
            onClick={() => handleAddToCart(item.id)}
            disabled={isPending}
          >
            {isPending && <ButtonLoader />}
            Add to Cart
          </Button>
          <Link
            href={`/product?id=${item.id}`}
            className='flex items-center justify-center rounded-md border border-primary-dark bg-primary-main px-2 py-1 text-xs font-medium text-white hover:bg-primary-dark md:text-sm'
          >
            View Details
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem
