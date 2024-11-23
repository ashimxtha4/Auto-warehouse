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
import { Lock, ArrowRight, XCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import ButtonLoader from '@/utils/button-loader'
import { isAxiosError } from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useGetResetPassword } from '@/services/api/api-service/auth/reset-password'

const resetPasswordSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address'),
    password: z
      .string({ required_error: 'New Password is required' })
      .min(6, 'Password should be of minimum 6 characters'),
    password_confirmation: z.string({
      required_error: 'Confirm New Password is required'
    })
  })
  .refine(data => data.password === data.password_confirmation, {
    message: 'Password and Confirm Password should match.',
    path: ['password_confirmation']
  })

export type resetPasswordSchemaProps = z.infer<typeof resetPasswordSchema>

const ResetPasswordForm = () => {
  const router = useRouter()
  const params = useParams()
  const token = params?.token

  const form = useForm<resetPasswordSchemaProps>({
    resolver: zodResolver(resetPasswordSchema)
  })

  const { mutateAsync } = useGetResetPassword()

  const onSubmit = async (data: resetPasswordSchemaProps) => {
    if (data.password !== data.password_confirmation) {
      form.setError('password_confirmation', {
        type: 'manual',
        message: 'Passwords do not match'
      })
      return
    }

    const dataToSubmit = {
      ...data,
      token: token as string
    }

    try {
      const response = await mutateAsync(dataToSubmit)
      toast.success(response.data.message)
      toast.success('Password reset successfully!')
      router.push('/')
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data?.message) {
          return toast.error(error.response?.data.message)
        }
        toast.error(error.message)
      }
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='mx-auto min-w-[300px] rounded-md bg-white p-4 md:min-w-[400px]'>
        <h2 className='mb-6 text-center text-3xl font-bold text-green-700'>
          Reset Password
        </h2>

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
                  <FormLabel className='flex items-center gap-2'>
                    <Lock className='h-5 w-5 text-gray-500' /> Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
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
                  <FormLabel className='flex items-center gap-2'>
                    <Lock className='h-5 w-5 text-gray-500' /> New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter new password'
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
                  <FormLabel className='flex items-center gap-2'>
                    <Lock className='h-5 w-5 text-gray-500' /> Confirm New
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Confirm new password'
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
                  Reset Password <ArrowRight className='h-5 w-5' />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ResetPasswordForm
