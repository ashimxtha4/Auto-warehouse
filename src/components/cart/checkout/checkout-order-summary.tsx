import React from 'react'
import { FormRowHeader, Separator } from '@/components/get-a-quote/get-a-quote-form'
import { cn } from '@/lib/utils'
import ButtonLoader from '@/utils/button-loader'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useCartStore } from '@/slice/cart-slice'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const OrderSummaryText = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex mb-2 justify-between text-primary-text/60 border-b border-b-primary-text/30'>
            {children}
        </div>
    )
}

const CheckoutOrderSummary = ({ shippingCost, checkoutPending }: { shippingCost: number, checkoutPending: boolean }) => {
    const router = useRouter()

    const { cartTotal, cart } = useCartStore()

    return (
        <aside className='bg-[#d3f2d0] p-4 md:p-6 rounded-3xl '>
            <FormRowHeader>ORDER SUMMARY</FormRowHeader>
            <Separator />
            <OrderSummaryText>
                <p>Total no. of Items:</p>
                <p>{cart?.length ?? '0'}</p>
            </OrderSummaryText>
            <OrderSummaryText>
                <p>Subtotal:</p>
                <p>AUD ${cartTotal}</p>
            </OrderSummaryText>
            <OrderSummaryText>
                <p>Shipping:</p>
                <p>AUD ${shippingCost}</p>
            </OrderSummaryText>
            <OrderSummaryText>
                <p>Total:</p>
                <p>AUD ${cartTotal + shippingCost}</p>
            </OrderSummaryText>
            <p className='text-primary-text text-base'>
                By continuing, you accept to our{' '}
                <Link href='/terms-of-use' className='text-primary-main underline'>
                    Terms And Conditions.
                </Link>
                {' '}
                Please note that payments are non-refundable.
            </p>

            {/* Place Order Button */}
            <div className='flex gap-2'>
                <button type='button' onClick={() => router.push('/search-product')} className='bg-white flex-1 border border-primary-main text-primary-text text-center my-2 mt-4 rounded-full text-base font-medium'>
                    SHOP MORE PRODUCTS
                </button>
                <button
                    type='submit'
                    className={cn(
                        'w-full flex-1 my-2 mt-4 p-2 pl-5 bg-primary-main font-medium flex justify-between items-center rounded-full text-primary-text hover:bg-primary-main disabled:bg-primary-main/60 disabled:cursor-not-allowed'
                    )}
                    disabled={checkoutPending || !cart?.length}
                >{checkoutPending ? <ButtonLoader /> : 'PROCEED WITH PAYMENT'}
                    <span className='bg-primary-text p-2 rounded-full flex justify-between items-center text-primary-main'>
                        <FaArrowRightLong />
                    </span>
                </button>
            </div>
        </aside>
    )
}

export default CheckoutOrderSummary