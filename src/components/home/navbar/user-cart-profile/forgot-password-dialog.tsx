import ForgotPasswordPage from '@/components/auth/forgot-password'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useAuthStore } from '@/slice/auth-state-slice'
import React from 'react'

const ForgotPasswordDialog = () => {
  const {
    isForgotPasswordDialogOpen,
    openForgotPasswordDialog,
    closeForgotPasswordDialog
  } = useAuthStore()

  return (
    <Dialog
      open={isForgotPasswordDialogOpen}
      onOpenChange={open =>
        open ? openForgotPasswordDialog() : closeForgotPasswordDialog()
      }
    >
      <DialogContent
        id='forgot-password-modal'
        style={{ zIndex: '9999' }}
        className='max-w-[290px] sm:max-w-[425px]'
        onInteractOutside={e => e.preventDefault()}
      >
        <ForgotPasswordPage />
      </DialogContent>
    </Dialog>
  )
}

export default ForgotPasswordDialog
