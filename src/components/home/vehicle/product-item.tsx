import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import defaultImage from '@/assets/default.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useVehicleParts } from '@/hooks/vehicle-parts.hook'

type ProductItemProps = {
  desc: string
  sku: string
  price: string
}

const ProductItem = ({ item }: { item: ProductItemProps }) => {
  const { viewType } = useVehicleParts()
  return (
    <Card
      className={cn(
        viewType === null ? 'mx-auto max-w-[250px]' : 'flex mb-2 w-full items-center'
      )}
    >
      <CardHeader className='justify-center p-1 md:p-0'>
        <Image
          src={defaultImage}
          alt='default-image'
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
          {item?.desc ?? '-'}
        </span>
        <span className='block py-1 text-sm font-medium md:text-xl'>
          <span className='text-primary-dark'>SKU:</span> {item?.sku ?? '-'}
        </span>
        <span className='block py-1 text-sm font-medium md:text-xl'>
          <span className='text-primary-dark'>Price:</span> $
          {item?.price ?? '-'}
        </span>
        <div
          className={cn(
            viewType === null
              ? 'flex justify-between gap-2'
              : 'flex justify-start gap-5'
          )}
        >
          <Button className='bg-primary-main text-xs hover:bg-primary-dark md:text-sm'>
            Add to Cart
          </Button>
          <Button className='bg-primary-main text-xs hover:bg-primary-dark md:text-sm'>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem
