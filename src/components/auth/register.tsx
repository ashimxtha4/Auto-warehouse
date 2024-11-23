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
import { useAuthStore } from '@/slice/auth-state-slice'
import { Mail, Lock, Phone, User, ArrowRight, XCircle } from 'lucide-react'
import ButtonLoader from '@/utils/button-loader'
import { useUserStore } from '@/slice/user-slice'
import { GenericError } from '@/utils/generic-error'

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
  const { closeRegisterDialog, openLoginDialog, openOTPDialog } = useAuthStore()
  const { setNewUserData } = useUserStore()

  const handleSwitch = () => {
    closeRegisterDialog()
    openLoginDialog()
  }

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
      closeRegisterDialog()
      openOTPDialog()
      return toast.success('Registration successful! Please verify your email.')
    } catch (error) {
      GenericError(error)
    }
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative m-2 h-3/4 max-h-full w-full max-w-md transform overflow-y-auto rounded-lg bg-white p-8 shadow-lg'>
        <button
          onClick={closeRegisterDialog}
          className='absolute right-3 top-3 text-gray-600 transition hover:text-red-900'
        >
          <XCircle className='h-6 w-6' />
        </button>

        <h2 className='mb-6 text-center text-3xl font-bold text-green-700'>
          Register
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 rounded-lg'
          >
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex items-center gap-2'>
                    <User className='h-5 w-5 text-gray-500' /> First Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='First Name' type='text' {...field} />
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
                  <FormLabel className='flex items-center gap-2'>
                    <User className='h-5 w-5 text-gray-500' /> Last Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Last Name' type='text' {...field} />
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
                  <FormLabel className='flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-gray-500' /> Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Email' type='email' {...field} />
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
                  <FormLabel className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-gray-500' /> Phone
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Phone' type='text' {...field} />
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
                  <FormLabel className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-gray-500' /> Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Phone' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex items-center gap-2'>
                    <Lock className='h-5 w-5 text-gray-500' /> Password
                  </FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Password' {...field} />
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
                  <FormLabel className='flex items-center gap-2'>
                    <Lock className='h-5 w-5 text-gray-500' /> Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Confirm Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              variant='default'
              className='flex w-full transform items-center justify-center gap-2 bg-green-700 text-white transition-transform hover:scale-105 hover:bg-green-600'
            >
              {form.formState.isSubmitting ? (
                <ButtonLoader />
              ) : (
                <>
                  Register <ArrowRight className='h-5 w-5' />
                </>
              )}
            </Button>
          </form>
        </Form>

        <div className='mt-6 flex items-center justify-center'>
          <p className='text-sm text-gray-600'>Already have an account?</p>
          <button
            type='button'
            onClick={handleSwitch}
            className='ml-2 flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline'
          >
            Login <ArrowRight className='h-4 w-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
