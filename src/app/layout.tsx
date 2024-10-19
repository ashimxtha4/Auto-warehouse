import type { Metadata } from 'next'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'
import './globals.css'
import HomeLayout from '@/layout/home'
import Footer from '@/components/footer'

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
          <Footer />
        </ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
