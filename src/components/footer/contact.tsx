import Link from 'next/link'
import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'

type ContactLinkProps = {
  href: string
  icon: IconType
  children: string
}

const ContactLink = ({ href, icon: Icon, children }: ContactLinkProps) => (
  <Link
    href={href}
    className='flex items-center gap-1 text-gray-200 hover:text-white'
  >
    <Icon />
    {children}
  </Link>
)

const FooterContact = () => {
  return (
    <section>
      <h6 className='footer-heading'>CONTACT</h6>
      <div className='flex flex-col'>
        <ContactLink href='tel:02 9756 6887' icon={FaPhoneSquareAlt}>
          SYD: 02 9756 6887
        </ContactLink>
        <ContactLink href='tel:03 9357 5904' icon={FaPhoneSquareAlt}>
          MEL: 03 9357 5904
        </ContactLink>
        <ContactLink href='mailto:sales@autoglassshop.com.au' icon={IoMail}>
          sales@autoglassshop.com.au
        </ContactLink>
      </div>
    </section>
  )
}

export default FooterContact
