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
import { useGetLogin } from '@/services/api/api-service/auth/login'
import toast from 'react-hot-toast'
import ButtonLoader from '@/utils/button-loader'
import { Mail, Lock } from 'lucide-react'
import { GenericError } from '@/utils/generic-error'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  const form = useForm<loginSchemaProps>({
    resolver: zodResolver(loginSchema)
  })

  const { mutateAsync } = useGetLogin()

  const onSubmit = async (data: loginSchemaProps) => {
    try {
      await mutateAsync(data)
      toast.success('Login success!')
      router.push('/')
    } catch (error) {
      GenericError(error)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-full max-w-md transform rounded-3xl bg-white p-8 shadow-lg'>
        <h2 className='my-1 text-start text-3xl font-normal text-primary-text'>
          Login
        </h2>
        <p className='mb-4 text-base font-normal text-primary-text/80'>
          Enter your email and password to get started. Thanks.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 rounded-lg'
          >
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
                      placeholder='Enter your email'
                      type='email'
                      {...field}
                      className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
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
                  <FormLabel className='flex items-center gap-2 text-primary-text'>
                    <Lock className='h-5 w-5' /> Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Link
              href='/forgot-password'
              className='!mt-1 block w-full text-end text-base text-gray-600 transition duration-300 hover:underline'
            >
              Forgot password?{' '}
              <span className='text-primary-main'>Reset here.</span>
            </Link>
            <button
              type='submit'
              className='w-full transform rounded-full bg-primary-main py-2 text-white transition-transform hover:scale-105'
            >
              {form.formState.isSubmitting ? <ButtonLoader /> : 'LOGIN'}
            </button>
          </form>
        </Form>

        <div className='mt-6 flex items-center justify-center'>
          <p className='text-sm text-gray-600'>Don&apos;t have an account?</p>
          <Link
            href='/register'
            className='ml-1 text-base font-normal text-primary-main hover:underline'
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
