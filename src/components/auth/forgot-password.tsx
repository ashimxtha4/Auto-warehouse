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
import { useAuthStore } from '@/slice/auth-state-slice'
import { usePostForgotPassword } from '@/services/api/api-service/auth/forgot-password'

const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
})

export type ForgotPasswordSchemaProps = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordPage = () => {
  const { closeAll } = useAuthStore()

  const form = useForm<ForgotPasswordSchemaProps>({
    resolver: zodResolver(forgotPasswordSchema)
  })

  const { mutateAsync } = usePostForgotPassword()

  const onSubmit = async (data: ForgotPasswordSchemaProps) => {
    try {
      const response = await mutateAsync(data)
      toast.success(response.data.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data?.message) {
          return toast.error(error.response?.data.message)
        }
        return toast.error(error.message)
      }
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative m-2 h-auto max-h-full w-full max-w-md transform overflow-y-auto rounded-lg bg-white p-8 shadow-lg'>
        <button
          onClick={closeAll}
          className='absolute right-3 top-3 text-gray-600 transition hover:text-red-900'
        >
          <XCircle className='h-6 w-6' />
        </button>

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

export default ForgotPasswordPage
