import OtpVerification from '@/components/auth/otp-verification'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useAuthStore } from '@/slice/auth-state-slice'
import React from 'react'

const OTPDialog = () => {
  const { openOTPDialog, closeOTPDialog, isOTPDialogOpen } = useAuthStore()
  return (
    <Dialog
      open={isOTPDialogOpen}
      onOpenChange={open => (open ? openOTPDialog() : closeOTPDialog())}
    >
      <DialogContent
        id='otp-modal'
        style={{ zIndex: '9999' }}
        className='max-w-[290px] sm:max-w-[425px]'
        onInteractOutside={e => e.preventDefault()}
      >
        <OtpVerification />
      </DialogContent>
    </Dialog>
  )
}

export default OTPDialog
