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
      <h6 className='footer-heading'>Information</h6>
      <div className='flex flex-col gap-y-1 md:gap-y-2'>
        {informationData.map(item => (
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

export default FooterInformation
