import React from 'react'
import { IconPaypal } from '@/assets/icon/paypal'
import { IconVisaLine } from '@/assets/icon/visa-line'
import { FormRowHeader, Separator } from '@/components/get-a-quote/get-a-quote-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const PaymentDetail = () => {
    return (
        <aside>
            <FormRowHeader>PAYMENT DETAILS</FormRowHeader>
            <Separator />
            <div className='grid grid-cols-2 gap-2 my-2'>
                <div className='grid grid-cols-4 items-center gap-2 border border-primary-text/20 p-2 rounded-xl'>
                    <Input
                        type='radio'
                        className='rounded-full'
                    />
                    <label className='text-primary-text col-span-2 text-base'>Credit Card</label>
                    <div className='flex justify-center items-center p-2 border font-medium border-primary-text/20 rounded-2xl'>
                        <IconVisaLine className='w-[60px]' />
                    </div>
                </div>
                <div className='grid grid-cols-4 items-center gap-2 border border-primary-text/20 p-2 rounded-xl'>
                    <Input
                        type='radio'
                        className='rounded-full'
                    />
                    <label className='text-primary-text col-span-2 font-medium text-base'>Paypal</label>
                    <div className='flex justify-center items-center p-2 border border-primary-text/20 rounded-2xl'>
                        <IconPaypal className='w-[60px]' />
                    </div>
                </div>
            </div>
            {/* Card Details */}
            <div>
                <Label>CARD NUMBER</Label>
                <Input
                    type='text'
                    placeholder='Card Number'
                    className='rounded-full'
                />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 my-2'>
                    <div className='col-span-2'>
                        <Label>CARD HOLDER NAME</Label>
                        <Input
                            type='text'
                            placeholder='Card Holder'
                            className='rounded-full'
                        />
                    </div>
                    <div>
                        <Label>EXPIRY DATE</Label>
                        <Input
                            type='text'
                            placeholder='Expiry Date'
                            className='rounded-full'
                        />
                    </div>
                    <div>
                        <Label>CVV</Label>
                        <Input
                            type='text'
                            placeholder='CVV'
                            className='rounded-full'
                        />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default PaymentDetail