import AdminSidebar from '@/components/admin'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Admin Panel | Auto Glass Shop',
  description: 'An online store for selling different parts of cars.'
}

const Page = () => {
  return <AdminSidebar />
}

export default Page
