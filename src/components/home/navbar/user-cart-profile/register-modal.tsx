import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import RegisterPage from '@/components/auth/register'

const RegisterModal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-gray-900 hover:text-green-900'>
          Register
        </button>
      </DialogTrigger>
      <DialogContent
        style={{ zIndex: '9999' }}
        className='max-w-[390px] sm:max-w-[425px]'
        onInteractOutside={e => e.preventDefault()}
        onOpenAutoFocus={e => e.preventDefault()}
      >
        <RegisterPage />
      </DialogContent>
    </Dialog>
  )
}

export default RegisterModal
