import React from 'react'
import type { CartProductsProps } from '.'
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
import defaultImage from '@/assets/default.png'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io'
import { ImCross } from 'react-icons/im'

type MyCartProps = {
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeProduct: (id: number) => void
  products: CartProductsProps[]
  total: number
}

const MyCart = ({
  decreaseQty,
  increaseQty,
  removeProduct,
  products,
  total
}: MyCartProps) => {
  const TABLE_HEADER_DATA = [
    'Image',
    'Product',
    'Price',
    'Quantity',
    'Subtotal',
    'Action'
  ]
  return (
    <aside className='border rounded-md p-1 md:p-2'>
      <h2 className='py-2 text-base font-bold md:text-xl'>My Cart</h2>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              {TABLE_HEADER_DATA.map(item => (
                <TableHead
                  key={item}
                  className={cn(
                    'md:text-lg',
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
              <TableRow key={product.id}>
                <TableCell className='hidden md:block'>
                  <Image
                    src={defaultImage}
                    alt='default-image'
                    className={cn('max-w-[75px] object-cover md:max-w-[100px]')}
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <div className='flex items-center'>
                    <input
                      type='number'
                      min='1'
                      value={product.quantity}
                      readOnly
                      className='mr-2 w-12 border-b border-t border-gray-300 text-center text-xs font-medium md:text-xl'
                    />
                    <div className='flex flex-col'>
                      <button onClick={() => increaseQty(product.id)}>
                        <IoMdArrowDropupCircle size={14} />
                      </button>
                      <button onClick={() => decreaseQty(product.id)}>
                        <IoMdArrowDropdownCircle size={14} />
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>${product.price * product.quantity}</TableCell>
                <TableCell>
                  <button onClick={() => removeProduct(product.id)}>
                    <ImCross size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell>${total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </aside>
  )
}

export default MyCart
