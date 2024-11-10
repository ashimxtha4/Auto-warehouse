import type { Metadata } from 'next'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'
import AutoGlassShopLayout from '@/layout/autoglass-shop'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto Glass Shop | Online Ordering Platform',
  description: 'An online store for selling different parts of cars.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#d3f2d0]'>
        <ReactQueryProvider>
          <AutoGlassShopLayout>{children}</AutoGlassShopLayout>
        </ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
