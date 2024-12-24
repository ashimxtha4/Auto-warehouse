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
import { usePostForgotPassword } from '@/services/api/api-service/auth/forgot-password'
import { GenericError } from '@/utils/generic-error'

const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
})

export type ForgotPasswordSchemaProps = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordPage = () => {

  const form = useForm<ForgotPasswordSchemaProps>({
    resolver: zodResolver(forgotPasswordSchema)
  })

  const { mutateAsync, isSuccess } = usePostForgotPassword()

  const onSubmit = async (data: ForgotPasswordSchemaProps) => {
    try {
      const response = await mutateAsync(data)
      toast.success(response.data.message)
    } catch (error) {
      GenericError(error)
    }
  }

  return (
    <div className='flex items-center justify-center md:min-w-[500px]'>
      <div className='relative w-full max-w-md transform rounded-3xl bg-white p-8 shadow-lg'>
        <h2 className='my-1 text-start text-3xl font-normal text-primary-text'>
          Reset Password
        </h2>
        <p className='mb-4 text-base font-normal text-primary-text/80'>
          Enter your email.
        </p>

        {isSuccess ? (
          <p className='mb-4 text-base font-normal text-primary-text'>
            Please check your email. <br /> We have sent a link to reset your
            password.
          </p>
        ) : (
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
              <button
                type='submit'
                className='w-full transform rounded-full bg-primary-main py-2 text-white transition-transform hover:scale-105'
              >
                {form.formState.isSubmitting ? (
                  <ButtonLoader />
                ) : (
                  <>SEND PASSWORD RESET LINK</>
                )}
              </button>
            </form>
          </Form>
        )}
      </div>
    </div>
  )
}

export default ForgotPasswordPage
