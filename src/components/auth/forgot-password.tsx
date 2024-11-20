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

const forgotPasswordSchema = z
  .object({
    new_password: z
      .string({ required_error: 'New Password is required' })
      .min(6, 'Password should be of minimum 6 characters'),
    confirm_new_password: z.string({
      required_error: 'Confirm New Password is required'
    })
  })
  .refine(data => data.new_password === data.confirm_new_password, {
    message: 'New Password and Confirm Password should match.',
    path: ['confirm_new_password']
  })

export type ForgotPasswordSchemaProps = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordPage = () => {
  const { closeAll } = useAuthStore()

  const form = useForm<ForgotPasswordSchemaProps>({
    resolver: zodResolver(forgotPasswordSchema)
  })

  const onSubmit = async (data: ForgotPasswordSchemaProps) => {
    if (data.new_password !== data.confirm_new_password) {
      form.setError('confirm_new_password', {
        type: 'manual',
        message: 'Passwords do not match'
      })
      return
    }
    try {
      await new Promise(res => setTimeout(res, 1000))
      toast.success('Password reset successfully!')
      closeAll()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
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
              name='new_password'
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
              name='confirm_new_password'
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

export default ForgotPasswordPage
