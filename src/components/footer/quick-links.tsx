import React from 'react'
import Link from 'next/link'

const quickLinks = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  },
  {
    label: 'Get A Quote',
    href: '/get-a-quote'
  },
  {
    label: 'Our Shop',
    href: '/shop'
  },
  {
    label: 'Reviews',
    href: '/reviews'
  },
  // {
  //   label: 'Services',
  //   href: '/services'
  // },
  {
    label: 'FAQs',
    href: '/faqs'
  },
]

const QuickLinks = () => {
  return (
    <section>
      <h6 className='footer-heading'>Quick Links</h6>
      <div className='flex flex-col gap-y-1 md:gap-y-2'>
        {quickLinks.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className='text-primary-text/60 hover:text-primary-text/70'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default QuickLinks
