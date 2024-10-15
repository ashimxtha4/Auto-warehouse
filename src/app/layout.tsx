import type { Metadata } from 'next'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'
import './globals.css'
import HomeLayout from '@/layout/home'

export const metadata: Metadata = {
  title: 'Auto Glass Warehouse',
  description: 'An online store for selling different parts of cars.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <HomeLayout />
          {children}
        </ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
