'use client'

import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import ReCAPTCHA from 'react-google-recaptcha'
import { preferredType, useGetAQuote } from '@/hooks/get-a-quote'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import ButtonLoader from '@/utils/button-loader'
import { FaArrowRightLong } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

export const FormRowHeader = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h4 className={cn('text-2xl font-medium border-b pb-2 tracking-wide text-primary-text md:text-2xl', className)}>
      {children}
    </h4>
  )
}

export function Separator() {
  return (
    <p className='h-[2px] !-mt-[1px] !mb-2 w-[230px] bg-primary-main' />
  )
}

const GetAQuoteForm = () => {
  const { form, onSubmit } = useGetAQuote()

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 rounded-3xl bg-white p-8 shadow-lg'
        >
          <FormRowHeader>PERSONAL DETAILS</FormRowHeader>
          <Separator />
          <div className='!my-0 grid grid-cols-2 w-full gap-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NAME</FormLabel>
                  <FormControl>
                    <Input placeholder='Name' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
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

          <div className='!my-4 grid grid-cols-2 w-full gap-2'>
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
          </div>
          <div className='!my-4 grid grid-cols-2 w-full gap-2'>
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
              name='preferred_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PREFERRED TYPE</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' placeholder='Select Preferred Type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {preferredType.map(option => (
                        <SelectItem value={option.value} key={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormRowHeader >VEHICLE DETAILS</FormRowHeader>
          <Separator />
          <div className='!my-4 grid grid-cols-2 w-full gap-2'>
            <FormField
              control={form.control}
              name='make'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>VEHICLE MAKE</FormLabel>
                  <FormControl>
                    <Input placeholder='Vehicle Make' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='model'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>VEHICLE MODEL</FormLabel>
                  <FormControl>
                    <Input placeholder='Vehicle Model' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='!my-4 grid grid-cols-2 w-full gap-2'>
            <FormField
              control={form.control}
              name='year'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>VEHICLE YEAR</FormLabel>
                  <FormControl>
                    <Input placeholder='Vehicle Year' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='body_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BODY TYPE</FormLabel>
                  <FormControl>
                    <Input placeholder='Body Type' className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='damage_details'
            render={({ field }) => (
              <FormItem>
                <FormRowHeader >DAMAGE DETAILS</FormRowHeader>
                <Separator />
                <FormControl>
                  <Textarea placeholder='Damage Details' className='rounded-2xl border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='additional_comments'
            render={({ field }) => (
              <FormItem>
                <FormLabel>ADDITIONAL DETAILS</FormLabel>
                <FormControl>
                  <Textarea placeholder='Additional Comments' className='rounded-2xl border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='recaptcha'
            rules={{ required: 'Please complete the ReCAPTCHA' }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={value => {
                      field.onChange(value)
                      form.clearErrors('recaptcha')
                    }}
                    onBlur={field.onBlur}
                  />
                </FormControl>
                {form.formState.errors.recaptcha && (
                  <FormMessage>
                    {form.formState.errors.recaptcha.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <div className='!mt-2 flex justify-center md:!mt-4'>
            <button
              type='submit'
              className='bg-primary-main rounded-full px-4 py-2 self-center font-semibold text-primary-text md:text-base'
            >
              {form.formState.isSubmitting ? (
                <ButtonLoader />
              ) : (
                <div className='flex justify-between items-center gap-4'>
                  <span>GET A QUOTE</span>
                  <span className='flex justify-center items-center rounded-full bg-primary-text p-2 text-primary-main'><FaArrowRightLong size={18} /></span>
                </div>
              )}
            </button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default GetAQuoteForm
