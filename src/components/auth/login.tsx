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
import { useGetLogin } from '@/services/api/api-service/auth/login'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import ButtonLoader from '@/utils/button-loader'
import { useAuthStore } from '@/slice/auth-state-slice'
import { Mail, Lock, UserPlus, ArrowRight, XCircle } from 'lucide-react'

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password should be of minimum 6 characters')
})

export type loginSchemaProps = z.infer<typeof loginSchema>

const LoginPage = ({
  setIsLoggedIn
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { openRegisterDialog, closeLoginDialog, closeAll } = useAuthStore()

  const form = useForm<loginSchemaProps>({
    resolver: zodResolver(loginSchema)
  })

  const { mutateAsync } = useGetLogin()

  const onSubmit = async (data: loginSchemaProps) => {
    try {
      await mutateAsync(data)
      toast.success('Login success!')
      closeAll()
      setIsLoggedIn(true)
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong!')
    }
  }

  const handleOpenRegister = () => {
    openRegisterDialog()
    closeLoginDialog()
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-full max-w-md transform rounded-lg bg-white p-8 shadow-lg transition-transform hover:scale-105'>
        <button
          onClick={closeAll}
          className='absolute right-3 top-3 text-gray-600 transition hover:text-red-900'
        >
          <XCircle className='h-6 w-6' />
        </button>

        <h2 className='mb-6 text-center text-3xl font-bold text-green-700'>
          Login !
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
                    <Mail className='h-5 w-5 text-gray-500' /> Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter your email'
                      type='email'
                      autoComplete='off'
                      {...field}
                      className='border-gray-300 focus:border-green-700 focus:ring-green-700'
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
                    <Lock className='h-5 w-5 text-gray-500' /> Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='mt-4 flex items-center justify-between'>
              <button
                onClick={e => e.preventDefault()}
                className='text-sm text-gray-600 transition duration-300 hover:underline'
              >
                Forgot password?
              </button>
              <Button
                type='submit'
                variant='default'
                className='flex transform items-center gap-2 bg-green-700 text-white transition-transform hover:scale-105 hover:bg-green-600'
              >
                {form.formState.isSubmitting ? <ButtonLoader /> : 'Login'}
                <ArrowRight className='h-5 w-5' />
              </Button>
            </div>
          </form>
        </Form>

        <div className='mt-6 flex items-center justify-center'>
          <p className='text-sm text-gray-600'>Don&apos;t have an account?</p>
          <button
            type='button'
            onClick={handleOpenRegister}
            className='ml-2 flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline'
          >
            Register <UserPlus className='h-4 w-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
