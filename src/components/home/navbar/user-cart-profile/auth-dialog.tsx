import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface AuthDialogProps {
  dialogOpen: boolean
  dialogOpenChange: (open: boolean) => void
  triggerButton: string
  dialogContent: React.ReactNode
}

const AuthDialog: React.FC<AuthDialogProps> = ({
  dialogContent,
  dialogOpen,
  dialogOpenChange,
  triggerButton
}) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={dialogOpenChange}>
      <DialogTrigger asChild>
        <button className='rounded-md bg-gray-800 px-2 py-1 text-start text-white transition-all hover:bg-gray-900'>
          {triggerButton}
        </button>
      </DialogTrigger>
      <DialogContent
        id='login-modal'
        style={{ zIndex: '9999' }}
        className='max-w-[290px] sm:max-w-[425px]'
        onInteractOutside={e => e.preventDefault()}
      >
        {dialogContent}
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
