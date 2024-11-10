import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import RegisterPage from '@/components/auth/register'

const RegisterModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-blue-600 hover:text-blue-800'>
          Register
        </button>
      </DialogTrigger>
      <DialogContent
        style={{ zIndex: '9999' }}
        className='max-w-[390px] sm:max-w-[425px]'
        onInteractOutside={e => e.preventDefault()}
      >
        <RegisterPage />
      </DialogContent>
    </Dialog>
  )
}

export default RegisterModal
