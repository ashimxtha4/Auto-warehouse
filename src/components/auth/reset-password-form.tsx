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
import { Lock } from 'lucide-react'
import toast from 'react-hot-toast'
import ButtonLoader from '@/utils/button-loader'
import { useParams, useRouter } from 'next/navigation'
import { useGetResetPassword } from '@/services/api/api-service/auth/reset-password'
import { GenericError } from '@/utils/generic-error'

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
      GenericError(error)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-full max-w-md transform rounded-3xl bg-white p-8 shadow-lg'>
        <h2 className='my-1 text-start text-3xl font-normal text-primary-text'>
          Reset Password
        </h2>
        <p className='mb-4 text-base font-normal text-primary-text/80'>
          Enter following details to reset your password. Thanks.
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
                    <Lock className='h-5 w-5' /> Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
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
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex items-center gap-2 text-primary-text'>
                    <Lock className='h-5 w-5' /> New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter new password'
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
              name='password_confirmation'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex items-center gap-2 text-primary-text'>
                    <Lock className='h-5 w-5' /> Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Confirm new password'
                      className='rounded-full border border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text/60 focus-visible:ring-1 focus-visible:ring-primary-main'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type='submit'
              className='w-full transform rounded-full bg-primary-main py-2 text-white transition-transform hover:scale-105'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <ButtonLoader />
              ) : (
                <>RESET PASSWORD</>
              )}
            </button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ResetPasswordForm
