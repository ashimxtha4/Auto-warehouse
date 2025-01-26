import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { DEFAULT_IMAGE } from '@/utils/default-image-url'
import { FormRowHeader } from '../get-a-quote/get-a-quote-form'
import Link from 'next/link'
import { useCartStore } from '@/slice/cart-slice'
import { IMAGE_BASE_URL } from '@/utils/image-base-url'

const MyCart = () => {
  const TABLE_HEADER_DATA = [
    'Image',
    'Product',
    'Price',
    'SKU',
    'Quantity',
    'Subtotal',
    'Action'
  ]

  const { cart, loadCartFromLocalStorage, removeFromCart, cartTotal, decreaseQuantity, increaseQuantity } = useCartStore()

  useEffect(() => {
    loadCartFromLocalStorage()
  }, [loadCartFromLocalStorage])

  return (
    <aside className='rounded-3xl bg-white p-6 shadow-lg'>
      <FormRowHeader className='text-center border-none'>
        CART
      </FormRowHeader>

      <div className='overflow-x-auto'>
        {cart?.length ? (
          <Table>
            <TableHeader>
              <TableRow>
                {TABLE_HEADER_DATA.map(item => (
                  <TableHead
                    key={item}
                    className={cn(
                      'bg-white py-2 text-lg text-primary-text',
                      item === 'Image' && 'hidden items-center md:inline-flex'
                    )}
                  >
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {cart.map(product => (
                <TableRow key={product.id} className='hover:bg-gray-50'>
                  <TableCell className='hidden md:block'>
                    <Image
                      src={
                        product.image !== '' ||
                          product.image !== null
                          ? `${IMAGE_BASE_URL}${product.image}`
                          : DEFAULT_IMAGE
                      }
                      loading='lazy'
                      alt='default-image'
                      width={100}
                      height={100}
                      className='max-w-[75px] rounded-lg object-cover md:max-w-[100px]'
                    />
                  </TableCell>
                  <TableCell className='font-medium text-primary-text'>
                    {product.name}
                  </TableCell>
                  <TableCell className='text-primary-text'>
                    AUD ${product.price}
                  </TableCell>
                  <TableCell className='text-primary-text'>
                    {product.sku}
                  </TableCell>
                  <TableCell className='text-primary-text/80'>
                    <div className='grid grid-cols-3 border border-primary-text/60 rounded-2xl p-1'>
                      <button type='button' onClick={() => decreaseQuantity(product.id)} className='text-lg border-r border-primary-text/60 cursor-pointer'>-</button>
                      <div className="text-center border-r border-primary-text/60 text-lg">{product.quantity}</div>
                      <button type='button' onClick={() => increaseQuantity(product.id)} className='text-lg cursor-pointer'>+</button>
                    </div>
                  </TableCell>
                  <TableCell className='text-primary-text'>
                    AUD ${product.price * product.quantity}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <button
                        type='button'
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className='text-white bg-red-500 rounded-full px-2 py-1'
                      >
                        Remove
                      </button>
                      <Link
                        // href={`/product?id=${product.id}`}
                        href={{
                          pathname: '/product',
                          query: { id: product.id }
                        }}
                        type='button'
                        className='text-white bg-primary-main rounded-full px-2 py-1'
                      >
                        View
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell
                  colSpan={6}
                  className='text-right text-xl font-semibold text-primary-main'
                >
                  Total
                </TableCell>
                <TableCell className='text-xl text-right font-semibold text-primary-main'>
                  AUD ${cartTotal}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ) : (
          <div className='py-8 text-center text-primary-text/80'>
            No products in cart <Link href='/shop' className='text-primary-text underline'>SHOP NOW</Link>
          </div>
        )}
      </div>
    </aside>
  )
}

export default MyCart
