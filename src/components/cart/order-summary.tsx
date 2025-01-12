import React from 'react';
import { cn } from '@/lib/utils';
import { FormRowHeader, Separator } from '../get-a-quote/get-a-quote-form';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useMyCart } from '@/hooks/cart.hooks';

const OrderSummary = () => {

  const { handleAddToCart, cartTotal, handleProceedToCheckout } = useMyCart()

  return (
    <aside className="max-w-[500px] bg-white rounded-3xl shadow-lg p-6">
      <FormRowHeader>CART TOTALS</FormRowHeader>
      <Separator />
      <div className="space-y-4">
        <div className="flex justify-between text-primary-text/60">
          <p>Subtotal:</p>
          <p>${cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-primary-text/60">
          <p>Shipping:</p>
          <p>$0.00</p>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between font-bold text-primary-text/60">
          <p>Total:</p>
          <p>${cartTotal.toFixed(2)}</p>
        </div>
      </div>

      <button
        className={cn(
          'w-full my-2 mt-4 p-2 pl-5 bg-primary-main font-medium flex justify-between items-center rounded-full text-primary-text hover:bg-primary-main'
        )}
        onClick={handleProceedToCheckout}
      >
        PROCEED TO CHECKOUT
        <span className='bg-primary-text p-2 rounded-full flex justify-between items-center text-primary-main'>
          <FaArrowRightLong />
        </span>
      </button>
      {/* payment options */}
      {/* <FormRowHeader>PAYMENT OPTIONS</FormRowHeader>
      <Separator /> */}
    </aside>
  );
};

export default OrderSummary;
