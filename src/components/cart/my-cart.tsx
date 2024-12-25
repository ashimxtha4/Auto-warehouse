import React from 'react'
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
import { ImCross } from 'react-icons/im'
import { listDataProps } from '@/services/api/api-service/cart/cart-list'
import { DEFAULT_IMAGE } from '@/utils/default-image-url'
import { FormRowHeader } from '../get-a-quote/get-a-quote-form'

type MyCartProps = {
  products: listDataProps[] | undefined
  total: number
  handleRemoveFromCart: (
    id: number,
    customer_id: number,
    product_id: number
  ) => Promise<void>
}

const IMAGE_BASE_URL = 'https://backend.autoglassshop.com.au/'

const MyCart = ({ products, total, handleRemoveFromCart }: MyCartProps) => {
  const TABLE_HEADER_DATA = [
    'Image',
    'Product',
    'Price',
    'Quantity',
    'Subtotal',
    'In Stock',
    'Action'
  ]
  return (
    <aside className='rounded-3xl bg-white p-6 shadow-lg'>
      <FormRowHeader className='text-center border-none'>
        CART
      </FormRowHeader>

      <div className='overflow-x-auto'>
        {products?.length ? (
          <Table>
            <TableHeader>
              <TableRow>
                {TABLE_HEADER_DATA.map(item => (
                  <TableHead
                    key={item}
                    className={cn(
                      'bg-green-50 py-2 text-lg text-gray-700',
                      item === 'Image' && 'hidden items-center md:inline-flex'
                    )}
                  >
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map(product => (
                <TableRow key={product.id} className='hover:bg-gray-50'>
                  <TableCell className='hidden md:block'>
                    <Image
                      src={
                        product.product_image !== '' ||
                          product.product_image !== null
                          ? `${IMAGE_BASE_URL}${product.product_image}`
                          : DEFAULT_IMAGE
                      }
                      loading='lazy'
                      alt='default-image'
                      width={100}
                      height={100}
                      className='max-w-[75px] rounded-lg object-cover md:max-w-[100px]'
                    />
                  </TableCell>
                  <TableCell className='font-medium text-gray-800'>
                    {product.product_name}
                  </TableCell>
                  <TableCell className='text-gray-600'>
                    ${product.product_price}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center'>
                      <input
                        type='number'
                        min='1'
                        value={1}
                        readOnly
                        className='mr-2 w-12 border-b border-t border-gray-300 text-center text-lg font-medium'
                      />
                      {/* 
                      <div className='flex flex-col items-center'>
                        <button className='text-green-700 hover:text-green-900'>
                          <IoMdArrowDropupCircle size={20} />
                        </button>
                        <button className='text-red-500 hover:text-red-700'>
                          <IoMdArrowDropdownCircle size={20} />
                        </button>
                      </div> 
                      */}
                    </div>
                  </TableCell>
                  <TableCell className='text-gray-600'>
                    ${product.product_price}
                  </TableCell>
                  <TableCell>
                    <div className='flex flex-col items-center justify-start text-green-700'>
                      <span>SYD: {product.stock.syd ? 'Yes' : 'No'}</span>
                      <span>MEL: {product.stock.mel ? 'Yes' : 'No'}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <button
                      type='button'
                      onClick={() =>
                        handleRemoveFromCart(
                          product.id,
                          product.customer_id,
                          product.product_id
                        )
                      }
                      className='text-red-500 hover:text-red-700'
                    >
                      <ImCross size={16} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell
                  colSpan={6}
                  className='border-t text-right font-bold text-gray-700'
                >
                  Total
                </TableCell>
                <TableCell className='border-t font-bold text-green-700'>
                  ${total}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ) : (
          <div className='py-8 text-center text-gray-500'>
            No products in cart
          </div>
        )}
      </div>
    </aside>
  )
}

export default MyCart
