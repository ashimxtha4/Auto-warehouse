import React from 'react'
import { FormRowHeader, Separator } from '@/components/get-a-quote/get-a-quote-form'
import { Textarea } from '@/components/ui/textarea'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { TCheckoutSchemaProps } from '@/hooks/cart.hooks'

const OptionalNote = ({ form }: { form: UseFormReturn<Partial<TCheckoutSchemaProps>> }) => {
    return (
        <aside>
            <FormRowHeader>OPTIONAL NOTE</FormRowHeader>
            <Separator />
            {/* <div className='flex gap-2 justify-start items-center my-2'>
                      <Checkbox />
                      <p>Ship to a different Address?</p>
                    </div> */}
            <FormField
                control={form.control}
                name='note'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='text-base'>Order Notes (Optional)</FormLabel>
                        <FormControl>
                            <Textarea rows={5} placeholder='Notes about your order, special notes for delivery' className='rounded-2xl' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </aside>
    )
}

export default OptionalNote