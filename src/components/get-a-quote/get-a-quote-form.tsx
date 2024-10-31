'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import FormRow from '@/components/form/form-row'
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

const FormRowHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className='text-lg font-semibold tracking-wide text-gray-800 md:text-2xl'>
      {children}
    </h4>
  )
}

const GetAQuoteForm = () => {
  const { form, onSubmit } = useGetAQuote()

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 rounded-lg border border-gray-500 p-4'
        >
          <FormRowHeader>Personal Details</FormRowHeader>
          <FormRow className='!my-0'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Name' {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Email' {...field} />
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
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder='Phone' {...field} />
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
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder='Address' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='post_code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder='Postal Code' {...field} />
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
                  <FormLabel>Preferred Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select Prefferred Type' />
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
          </FormRow>
          <FormRowHeader>Vehicle Details</FormRowHeader>
          <FormRow className='!mt-0'>
            <FormField
              control={form.control}
              name='make'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Make</FormLabel>
                  <FormControl>
                    <Input placeholder='Vehicle Make' {...field} />
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
                  <FormLabel>Vehicle Model</FormLabel>
                  <FormControl>
                    <Input placeholder='Vehicle Model' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='year'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Year</FormLabel>
                  <FormControl>
                    <Input placeholder='Vehicle Year' {...field} />
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
                  <FormLabel>Body Type</FormLabel>
                  <FormControl>
                    <Input placeholder='Body Type' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormRow>
          <FormField
            control={form.control}
            name='damage_details'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Damage details</FormLabel>
                <FormControl>
                  <Textarea placeholder='Damage details' {...field} />
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
                <FormLabel>Additional Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Additional Message' {...field} />
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
          <div className='!mt-2 flex gap-2 md:!mt-4'>
            <Button
              type='submit'
              variant='default'
              className='bg-primary-main text-lg font-semibold text-white hover:bg-primary-dark md:text-xl'
            >
              {form.formState.isSubmitting ? (
                <span className='h-4 w-4 animate-spin rounded-full border-[2px] border-gray-500 border-t-white'></span>
              ) : (
                'Get Quote'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default GetAQuoteForm
