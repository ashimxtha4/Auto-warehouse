import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LoginPage from '@/components/auth/login'

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='mb-1 border-b border-b-gray-600 pb-2 text-start text-gray-900 hover:text-green-900'>
          Login
        </button>
      </DialogTrigger>
      <DialogContent
        className='max-w-[390px] sm:max-w-[425px]'
        onInteractOutside={e => e.preventDefault()}
      >
        <LoginPage />
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
