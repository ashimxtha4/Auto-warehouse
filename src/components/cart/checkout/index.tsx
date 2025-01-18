'use client'

import React from 'react'
import { useMyCart } from '@/hooks/cart.hooks'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useScrollRef } from '@/hooks/scroll.hooks'
import { SectionHeader } from '@/utils/section-header'
import { Form } from '@/components/ui/form'
import PaymentDetail from './payment-detail'
import BillingDetail from './billing-detail'
import OptionalNote from './optional-note'
import CheckoutOrderSummary from './checkout-order-summary'

const Checkout = () => {
  const { isLoading, handleCartCheckout, checkoutPending, form, shippingCost } =
    useMyCart()

  const { ref } = useScrollRef(140)

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCartCheckout)}
        >
          <section ref={ref} className='bg-white p-2 md:p-6 rounded-3xl shadow-lg'>
            {isLoading && <LoadingSpinner />}
            <SectionHeader className='text-start'>CHECKOUT</SectionHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 md:mb-6'>
              <BillingDetail form={form} />
              <PaymentDetail />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <OptionalNote form={form} />
              <CheckoutOrderSummary shippingCost={shippingCost} checkoutPending={checkoutPending} />
            </div>
          </section>
        </form>
      </Form>
    </>
  )
}

export default Checkout
