'use client'

import React from 'react'
// import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import toast from 'react-hot-toast'

const getAQuoteSchema = z.object({
  name: z.string({ required_error: 'Please enter your name.' }),
  email: z
    .string({ required_error: 'Please enter your email.' })
    .email({ message: 'Invalid email.' }),
  phone: z.string({ required_error: 'Please enter your phone number.' }),
  address: z.string({ required_error: 'Please enter your address.' }),
  make: z.string({ required_error: 'Vehicle Make is required.' }),
  model: z.string().optional(),
  year: z.string().optional(),
  comment: z.string().optional()
})

export type TGetAQuoteSchemaProps = z.infer<typeof getAQuoteSchema>

const FormRowHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className='text-lg font-semibold tracking-wide text-gray-800 md:text-2xl'>
      {children}
    </h4>
  )
}

const GetAQuoteForm = () => {
  //   const router = useRouter()

  const form = useForm<Partial<TGetAQuoteSchemaProps>>({
    resolver: zodResolver(getAQuoteSchema)
  })

  const onSubmit = (data: Partial<TGetAQuoteSchemaProps>) => {
    console.log(data)
    toast.success('Success!')
    // try {
    //   router.push('/')
    // } catch (error) {
    //   console.log(error)
    // }
  }
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
          </FormRow>
          <FormField
            control={form.control}
            name='comment'
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
