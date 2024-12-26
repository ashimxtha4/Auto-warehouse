'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { loginSchema } from './login'
import { useGetRegisterUser } from '@/services/api/api-service/auth/register'
import toast from 'react-hot-toast'
import { Mail, Lock, Phone, User } from 'lucide-react'
import ButtonLoader from '@/utils/button-loader'
import { useUserStore } from '@/slice/user-slice'
import { GenericError } from '@/utils/generic-error'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const registerSchema = loginSchema
  .extend({
    first_name: z.string({ required_error: 'First Name is required' }),
    last_name: z.string({ required_error: 'Last Name is required' }),
    phone: z.string().optional(),
    address: z.string().optional(),
    password_confirmation: z.string({
      required_error: 'Confirm Password is required'
    })
  })
  .refine(data => data.password === data.password_confirmation, {
    message: 'Password and Confirm Password should be the same.',
    path: ['password_confirmation']
  })

export type registerSchemaProps = z.infer<typeof registerSchema>

const RegisterPage = () => {
  const router = useRouter()
  const { setNewUserData } = useUserStore()

  const form = useForm<registerSchemaProps>({
    resolver: zodResolver(registerSchema)
  })

  const { mutateAsync } = useGetRegisterUser()

  const onSubmit = async (data: registerSchemaProps) => {
    if (data.password !== data.password_confirmation) {
      form.setError('password_confirmation', {
        type: 'manual',
        message: 'Password and Confirm Password should be the same'
      })
      return
    }
    try {
      const response = await mutateAsync(data)
      setNewUserData(response.data.data[0])
      router.push('/otp-verification')
      return toast.success('Registration successful! Please verify your email.')
    } catch (error) {
      GenericError(error)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-full max-w-md transform rounded-3xl bg-white p-8 shadow-lg'>
        <h2 className='my-1 text-start text-3xl font-normal text-primary-text'>
          Register
        </h2>
        <p className='mb-4 text-base font-normal text-primary-text/80'>
          Register below to get started. Thanks.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 rounded-lg'
          >
            <div className='flex w-full justify-between'>
              <FormField
                control={form.control}
                name='first_name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex items-center gap-2 text-primary-text'>
                      <User className='h-5 w-5' /> First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='First Name'
                        type='text'
                        className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='last_name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex items-center gap-2 text-primary-text'>
                      <User className='h-5 w-5' /> Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Last Name'
                        className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex w-full justify-between'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex items-center gap-2 text-primary-text'>
                      <Mail className='h-5 w-5' /> Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Email'
                        className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                        type='email'
                        {...field}
                      />
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
                    <FormLabel className='flex items-center gap-2 text-primary-text'>
                      <Phone className='h-5 w-5' /> Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Phone'
                        className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                        type='text'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex items-center gap-2 text-primary-text'>
                    <Phone className='h-5 w-5' /> Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Address'
                      className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                      type='text'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex w-full justify-between gap-2'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex items-center gap-2 text-primary-text'>
                      <Lock className='h-5 w-5' /> Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                        placeholder='Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password_confirmation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex items-center gap-2 text-primary-text'>
                      <Lock className='h-5 w-5' /> Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                        placeholder='Confirm Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* accept terms and condition */}
            <div className='!mt-1 text-base'>
              <p className='text-primary-text w-full'>
                By registering, I agree to all the
                <Link
                  href='/terms-of-use'
                  type='button'
                  className='ml-1 inline font-normal text-primary-main hover:underline'
                >
                  terms and conditions
                </Link>
              </p>
            </div>
            <Button
              type='submit'
              variant='default'
              className='flex w-full transform items-center justify-center gap-2 rounded-full bg-primary-main text-white transition-transform hover:scale-105 hover:bg-primary-main'
            >
              {form.formState.isSubmitting ? <ButtonLoader /> : <>REGISTER</>}
            </Button>
          </form>
        </Form>

        <div className='mt-6 flex items-center justify-center'>
          <p className='text-base text-primary-text'>
            Already have an account?
          </p>
          <Link
            href='/login'
            type='button'
            className='ml-1 flex items-center gap-1 text-base font-normal text-primary-main hover:underline'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
