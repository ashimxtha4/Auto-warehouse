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
import defaultImage from '@/assets/default.png'
import { ImCross } from 'react-icons/im'
import { listDataProps } from '@/services/api/api-service/cart/cart-list'

type MyCartProps = {
  removeProduct: (id: number) => void
  products: listDataProps[] | undefined
  total: number
}

const MyCart = ({ removeProduct, products, total }: MyCartProps) => {
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
    <aside className='rounded-md border p-1 md:p-2'>
      <h2 className='py-2 text-base font-bold md:text-xl'>My Cart</h2>
      <div className='overflow-x-auto'>
        {products?.length ? (
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
                      className={cn(
                        'max-w-[75px] object-cover md:max-w-[100px]'
                      )}
                    />
                  </TableCell>
                  <TableCell>{product.product_name}</TableCell>
                  <TableCell>{product.product_price}</TableCell>
                  <TableCell>
                    <div className='flex items-center'>
                      <input
                        type='number'
                        min='1'
                        value={1}
                        readOnly
                        className='mr-2 w-12 border-b border-t border-gray-300 text-center text-xs font-medium md:text-xl'
                      />
                      {/* <div className='flex flex-col'>
                        <button onClick={() => increaseQty(product.id)}>
                          <IoMdArrowDropupCircle size={14} />
                        </button>
                        <button onClick={() => decreaseQty(product.id)}>
                          <IoMdArrowDropdownCircle size={14} />
                        </button>
                      </div> */}
                    </div>
                  </TableCell>
                  <TableCell>${product.product_price}</TableCell>
                  <TableCell>
                    <div className='flex flex-col items-center justify-center'>
                      <span>SYD:{product.stock.syd ? 'Yes' : 'No'}</span>
                      <span>MEL:{product.stock.mel ? 'Yes' : 'No'}</span>
                    </div>
                  </TableCell>
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
        ) : (
          <div>No products in cart</div>
        )}
      </div>
    </aside>
  )
}

export default MyCart
