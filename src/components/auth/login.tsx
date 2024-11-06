'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
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
import { useGetLogin } from '@/services/api/api-service/auth/login'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password should be of minimum 6 characters')
})

export type loginSchemaProps = z.infer<typeof loginSchema>

const LoginPage = () => {
  const form = useForm<loginSchemaProps>({
    resolver: zodResolver(loginSchema)
  })

  const { mutateAsync } = useGetLogin()

  const onSubmit = async (data: loginSchemaProps) => {
    try {
      await mutateAsync(data)
      toast.success('Login success!')
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
          Login
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 rounded-lg border border-gray-500 p-4'
          >
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
            <Button
              type='submit'
              variant='default'
              className='bg-primary-main text-lg font-semibold text-white hover:bg-primary-dark md:text-xl'
            >
              {form.formState.isSubmitting ? (
                <span className='h-4 w-4 animate-spin rounded-full border-[2px] border-gray-500 border-t-white'></span>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </Form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          Do not have an account?{' '}
          <Link
            href='/auth/register'
            className='text-primary-main hover:underline'
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
