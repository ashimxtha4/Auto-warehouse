import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Notification from '@/components/home/notification'
import ReactQueryProvider from '@/services/provider/react-query-provider'
import AutoGlassShopLayout from '@/layout/autoglass-shop'
import { seoKeywords } from '@/utils/seo-keywords'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto Glass Shop | Online Ordering Platform',
  description: 'An online store for selling different parts of cars.',
  keywords: seoKeywords,
  category: 'Auto Glass Shop',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    countryName: 'Australia',
    siteName: 'Auto Glass Shop',
    title: 'Auto Glass Shop | Online Ordering Platform',
    description: 'Premium Auto Glass At Affordable Prices. Comprehensive solutions for all your vehicle glass replacement needs.',
    type: 'website',
    url: 'https://www.autoglassshop.com.au',
    emails: 'sales@autoglassshop.com.au',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Website',
  'name': 'Auto Glass Shop',
  'url': 'https://www.autoglassshop.com.au',
  'sameAs': [
    'https://www.autoglassshop.com.au/contact',
    'https://www.autoglassshop.com.au/shop',
    'https://www.autoglassshop.com.au/get-a-quote',
    'https://www.autoglassshop.com.au/faqs'
  ]
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('bg-[#d3f2d0]', roboto.className)}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <ReactQueryProvider>
          <AutoGlassShopLayout>{children}</AutoGlassShopLayout>
        </ReactQueryProvider>
        <Notification />
      </body>
    </html>
  )
}
