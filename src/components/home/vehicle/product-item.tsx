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
        viewType === null ? 'max-w-[300px]' : 'flex w-full items-center'
      )}
    >
      <CardHeader>
        <Image
          src={defaultImage}
          alt='default-image'
          className={cn('object-cover', viewType !== null && 'max-w-[350px]')}
        />
      </CardHeader>
      <CardContent>
        <span className='block py-2 text-base font-medium md:text-xl'>
          {item?.desc ?? '-'}
        </span>
        <span className='block py-1 text-base font-medium md:text-xl'>
          sku: {item?.sku ?? '-'}
        </span>
        <span className='block py-1 text-base font-medium md:text-xl'>
          Price: ${item?.price ?? '-'}
        </span>
        <div
          className={cn(
            viewType === null
              ? 'flex justify-between gap-2'
              : 'flex justify-start gap-5'
          )}
        >
          <Button className='bg-primary-main hover:bg-primary-dark'>
            Add to Cart
          </Button>
          <Button className='bg-primary-main hover:bg-primary-dark'>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItem
