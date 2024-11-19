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

const OtpVerification = () => {
  const [otp, setOtp] = useState('')

  const { closeOTPDialog, openLoginDialog } = useAuthStore()
  const { newUserData } = useUserStore()

  const { mutateAsync } = useGetOTPVerify()

  const handleSubmitOTP = async () => {
    try {
      mutateAsync({
        customer_id: newUserData.id,
        otp: parseInt(otp),
        email: newUserData.email
      })
      toast.success('OTP Verified Successfully!')
      closeOTPDialog()
      openLoginDialog()
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      } else {
        toast.error('Something went wrong!')
      }
    }
  }

  return (
    <>
      <div>Please enter the OTP received in your email.</div>
      <InputOTP maxLength={5} value={otp}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
        </InputOTPGroup>
      </InputOTP>
      <Button type='submit' onClick={handleSubmitOTP}>
        Submit
      </Button>
    </>
  )
}

export default OtpVerification
