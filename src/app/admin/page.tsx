import AdminSidebar from '@/components/admin'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import type { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Admin Panel | Auto Glass Shop',
  description: 'An online store for selling different parts of cars.'
}

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AdminSidebar />
    </Suspense>
  )
}

export default Page
