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
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useAuthStore } from '@/slice/auth-state-slice'

const registerSchema = loginSchema
  .extend({
    first_name: z.string({ required_error: 'First Name is required' }),
    last_name: z.string({ required_error: 'Last Name is required' }),
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
  const { closeRegisterDialog, openLoginDialog } = useAuthStore()

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
        message: 'password and confirm password should be same'
      })
      return
    }
    try {
      await mutateAsync(data)
      toast.success('User Registered Successfully!')
      closeRegisterDialog()
      openLoginDialog()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className='flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md rounded-lg bg-white'>
        <h2 className='text-center text-2xl font-semibold text-gray-700'>
          Register
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 rounded-lg border border-gray-500 p-4'
          >
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='First Name'
                      type='text'
                      autoComplete='off'
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
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Last Name'
                      type='text'
                      autoComplete='off'
                      {...field}
                    />
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
                    <Input
                      placeholder='Email'
                      type='email'
                      autoComplete='off'
                      {...field}
                    />
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
                  <FormLabel>Password</FormLabel>
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
                  <FormLabel>Confirm Password</FormLabel>
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
              className='bg-primary-main text-lg font-semibold text-white hover:bg-primary-dark md:text-xl'
            >
              {form.formState.isSubmitting ? (
                <span className='h-4 w-4 animate-spin rounded-full border-[2px] border-gray-500 border-t-white'></span>
              ) : (
                'Register'
              )}
            </Button>
          </form>
        </Form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          Already have an account?{' '}
          <button
            onClick={handleSwitch}
            type='button'
            className='text-primary-main hover:underline'
          >
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
