import React from 'react'
import Link from 'next/link'
import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6'
import { IconType } from 'react-icons/lib'

type SocialLinkProps = { href: string; icon: IconType; label: string }

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    className='flex items-center pb-1 md:pb-2 gap-1 text-gray-200 hover:text-white'
    aria-label={label}
  >
    <Icon />
    {label}
  </Link>
)

const FollowUs = () => {
  return (
    <section>
      <h6 className='footer-heading'>FOLLOW US</h6>
      <SocialLink
        href='https://www.facebook.com'
        icon={FaSquareFacebook}
        label='Facebook'
      />
      <SocialLink
        href='https://www.instagram.com'
        icon={FaSquareInstagram}
        label='Instagram'
      />
    </section>
  )
}

export default FollowUs
