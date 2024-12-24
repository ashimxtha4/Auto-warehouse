import React, { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { Button } from '../ui/button'
import { useUserStore } from '@/slice/user-slice'
import { useGetOTPVerify } from '@/services/api/api-service/auth/verify'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'

const OtpVerification = () => {
  const [otp, setOtp] = useState('')

  const { newUserData } = useUserStore()

  const { mutateAsync } = useGetOTPVerify()

  const handleSubmitOTP = async () => {
    try {
      await mutateAsync({
        customer_id: newUserData.id,
        otp: parseInt(otp),
        email: newUserData.email
      })
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
    <div className='flex items-center justify-center'>
      <div className='relative w-full max-w-md transform rounded-3xl bg-white p-8 shadow-lg'>
        <h2 className='my-1 text-start text-3xl font-normal text-primary-text'>
          OTP Verification
        </h2>
        <p className='mb-4 text-base font-normal text-primary-text/80'>
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
              {[0, 1, 2, 3, 4].map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className='ml-1 h-12 w-12 rounded-md border text-center focus:outline-none focus:ring-2 focus:ring-primary-main'
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type='button'
          onClick={handleSubmitOTP}
          className='mt-6 w-full bg-primary-main text-white hover:bg-primary-main'
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
export default OtpVerification
