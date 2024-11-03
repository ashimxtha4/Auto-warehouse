import type { Metadata } from 'next'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'
import AutoGlassShopLayout from '@/layout/autoglass-shop'
import './globals.css'

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
      <body className='bg-[#F8F8FF]'>
        <ReactQueryProvider>
          <AutoGlassShopLayout>{children}</AutoGlassShopLayout>
        </ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
