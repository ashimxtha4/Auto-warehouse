import React, { Suspense } from 'react'
import ResetPasswordForm from '@/components/auth/reset-password-form'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ResetPasswordForm />
    </Suspense>
  )
}

export default Page
