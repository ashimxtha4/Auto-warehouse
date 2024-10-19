import React from 'react'
import Link from 'next/link'

const quickLinks = [
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Services',
    href: '/services'
  },
  {
    label: 'FAQs',
    href: '/faqs'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  }
]

const QuickLinks = () => {
  return (
    <section>
      <h6 className='footer-heading'>QUICK LINKS</h6>
      <div className='flex flex-col'>
        {quickLinks.map(item => (
          <Link
            key={item.label}
            href={item.href}
            className='text-gray-200 hover:text-white'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default QuickLinks
