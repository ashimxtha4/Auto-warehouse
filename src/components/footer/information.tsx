import React from 'react'
import Link from 'next/link'

const informationData = [
  {
    label: 'Terms of Use & Return Policy',
    href: '/terms-of-use'
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy'
  }
  // {
  //   label: 'Return Policy',
  //   href: '/return-policy'
  // },
  // {
  //   label: 'Security Policy',
  //   href: '/security-policy'
  // }
]

const FooterInformation = () => {
  return (
    <section>
      <h6 className='footer-heading'>INFORMATION</h6>
      <div className='flex flex-col gap-y-1 md:gap-y-2'>
        {informationData.map(item => (
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

export default FooterInformation
