import React, { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { Button } from '../ui/button'
import { useAuthStore } from '@/slice/auth-state-slice'
import { useUserStore } from '@/slice/user-slice'
import { useGetOTPVerify } from '@/services/api/api-service/auth/verify'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import { XCircle } from 'lucide-react'

const OtpVerification = () => {
  const [otp, setOtp] = useState('')

  const { closeOTPDialog, openLoginDialog } = useAuthStore()
  const { newUserData } = useUserStore()
  console.log(newUserData, 'newUserData-----')

  const { mutateAsync } = useGetOTPVerify()

  const handleSubmitOTP = async () => {
    try {
      await mutateAsync({
        customer_id: newUserData.id,
        otp: parseInt(otp),
        email: newUserData.email
      })
      closeOTPDialog()
      openLoginDialog()
      return toast.success('OTP Verified Successfully!')
    } catch (error) {
      if (isAxiosError(error)) {
        if (error?.message === 'Request failed with status code 400') {
          return toast.error('Invalid OTP!')
        }
        return toast.error(error.message)
      }
      return toast.error('Something went wrong!')
    }
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative m-2 w-full max-w-md transform rounded-lg bg-white p-8 shadow-lg'>
        <button
          onClick={closeOTPDialog}
          className='absolute right-3 top-3 text-gray-600 transition hover:text-red-900'
        >
          <XCircle className='h-6 w-6' />
        </button>

        <h2 className='mb-6 text-center text-3xl font-bold text-green-700'>
          OTP Verification
        </h2>

        <p className='mb-4 text-center text-sm text-gray-600'>
          Please enter the OTP sent to your registered email address.
        </p>

        <div className='flex justify-center'>
          <InputOTP
            maxLength={5}
            value={otp}
            onChange={value => setOtp(value)}
            className='space-x-2'
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className='h-12 w-12 rounded-md border text-center focus:outline-none focus:ring-2 focus:ring-green-700'
              />
              <InputOTPSlot
                index={1}
                className='h-12 w-12 rounded-md border text-center focus:outline-none focus:ring-2 focus:ring-green-700'
              />
              <InputOTPSlot
                index={2}
                className='h-12 w-12 rounded-md border text-center focus:outline-none focus:ring-2 focus:ring-green-700'
              />
              <InputOTPSlot
                index={3}
                className='h-12 w-12 rounded-md border text-center focus:outline-none focus:ring-2 focus:ring-green-700'
              />
              <InputOTPSlot
                index={4}
                className='h-12 w-12 rounded-md border text-center focus:outline-none focus:ring-2 focus:ring-green-700'
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type='button'
          onClick={handleSubmitOTP}
          className='mt-6 w-full bg-green-700 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50'
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
export default OtpVerification
