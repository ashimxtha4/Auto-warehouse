import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import defaultImage from '@/assets/default.png'
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from 'react-icons/io'
import { ImCross } from 'react-icons/im'
import type { CartProductsProps } from '.'

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
  return (
    <aside className='flex-[2] border p-1 md:p-2'>
      <h2 className='py-2 text-base font-bold md:text-xl'>My Cart</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='hidden px-4 py-2 text-left font-semibold text-primary-main md:inline-block'>
                Image
              </th>
              <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                Product
              </th>
              <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                Price
              </th>
              <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                Quantity
              </th>
              <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                Subtotal
              </th>
              <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className='border-b'>
                <td className='hidden px-4 py-2 text-sm font-medium md:inline-block md:text-xl'>
                  <Image
                    src={defaultImage}
                    alt='default-image'
                    className={cn('max-w-[75px] object-cover md:max-w-[100px]')}
                  />
                </td>
                <td className='px-4 py-2 text-xs font-medium md:text-xl'>
                  {product.name}
                </td>
                <td className='px-4 py-2 text-xs font-medium md:text-xl'>
                  ${product.price}
                </td>
                <td className='px-4 py-2 text-xs font-medium md:text-xl'>
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
                </td>
                <td className='px-4 py-2 text-xs font-medium md:text-xl'>
                  ${product.price * product.quantity}
                </td>
                <td className='px-4 py-2 text-xs font-medium md:text-xl'>
                  <button onClick={() => removeProduct(product.id)}>
                    <ImCross size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='mt-4 text-right'>
          <p className='text-lg font-bold'>
            Total: <span>${total}</span>
          </p>
        </div>
      </div>
    </aside>
  )
}

export default MyCart
