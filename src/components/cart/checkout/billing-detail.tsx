import React from 'react'
import { FormRowHeader, Separator } from '@/components/get-a-quote/get-a-quote-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { TCheckoutSchemaProps } from '@/hooks/cart.hooks'
import { UseFormReturn } from 'react-hook-form'

const BillingDetail = ({ form }: { form: UseFormReturn<Partial<TCheckoutSchemaProps>> }) => {
    return (
        <aside>
            <FormRowHeader>BILLING DETAILS</FormRowHeader>
            <Separator />
            <div>
                <div className='flex flex-col space-y-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>FULL NAME</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Full Name' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>EMAIL</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Email' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2'>
                        <FormField
                            control={form.control}
                            name='address'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ADDRESS</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Address' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='city'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CITY</FormLabel>
                                    <FormControl>
                                        <Input placeholder='City' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2'>
                        <FormField
                            control={form.control}
                            name='post_code'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>POSTAL CODE</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Postal Code' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PHONE</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Phone' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default BillingDetail