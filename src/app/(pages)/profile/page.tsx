import React, { Suspense } from 'react'
import UserProfile from '@/components/profile'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { PageMetadata } from '@/utils/meta-data'
import type { Metadata } from 'next'

export const metadata: Metadata = PageMetadata('Profile', 'Manage your personal details, track orders, and update your preferences in your user profile. Enjoy a seamless shopping experience with us.')

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <UserProfile />
    </Suspense>
  )
}

export default Page
