import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FormRowHeader, Separator } from '../get-a-quote/get-a-quote-form';
import { FaArrowRightLong } from 'react-icons/fa6';

const OrderSummary = ({ total }: { total: number }) => {
  return (
    <aside className="max-w-[500px] bg-white rounded-3xl shadow-lg p-6">
      <FormRowHeader>CART TOTALS</FormRowHeader>
      <Separator />
      <div className="space-y-4">
        <div className="flex justify-between text-primary-text/60">
          <p>Subtotal:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-primary-text/60">
          <p>Shipping:</p>
          <p>$0.00</p>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between font-bold text-primary-text/60">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>

      <Link href="/cart/checkout" className="block my-6">
        <button
          className={cn(
            'w-full p-2 pl-5 bg-primary-main flex justify-between items-center rounded-full text-primary-text hover:bg-primary-main'
          )}
        >
          PROCEED TO CHECKOUT
          <span className='bg-primary-text p-2 rounded-full flex justify-between items-center text-primary-main'>
            <FaArrowRightLong />
          </span>
        </button>
      </Link>

      {/* payment options */}
      <FormRowHeader>PAYMENT OPTIONS</FormRowHeader>
      <Separator />
    </aside>
  );
};

export default OrderSummary;
