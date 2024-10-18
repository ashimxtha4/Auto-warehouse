import type { Metadata } from 'next'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'

export const metadata: Metadata = {
  title: 'Auto Glass | Auth',
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
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
