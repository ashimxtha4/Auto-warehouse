import type { Metadata } from 'next'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'
import './globals.css'
import NavbarFooterLayout from '@/layout/navbar-footer'

export const metadata: Metadata = {
  title: 'Auto Glass Shop',
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
          <NavbarFooterLayout>{children}</NavbarFooterLayout>
        </ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
