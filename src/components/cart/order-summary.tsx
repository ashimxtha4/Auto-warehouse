import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ShoppingCart, Truck } from 'lucide-react';

const OrderSummary = ({ total }: { total: number }) => {
  return (
    <aside className="max-w-[500px] bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-700 flex items-center mb-6">
        <ShoppingCart className="w-6 h-6 mr-2" />
        Order Summary
      </h2>
  
      <div className="space-y-4">
        <div className="flex justify-between text-gray-700">
          <p>Items Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-gray-700">
          <p>Shipping:</p>
          <p>$0.00</p>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between font-bold text-gray-800">
          <p>Total:</p>
          <p className="text-green-700">${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-6">
        {total ? (
          <Link href="/cart/checkout" className="block">
            <Button
              className={cn(
                'w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800'
              )}
            >
              <Truck className="inline-block w-5 h-5 mr-2" />
              Proceed to Checkout
            </Button>
          </Link>
        ) : (
          <Button
            disabled
            className="w-full bg-gray-300 text-gray-500 py-3 rounded-md cursor-not-allowed"
          >
            Checkout
          </Button>
        )}
      </div>
    </aside>
  );
};

export default OrderSummary;
