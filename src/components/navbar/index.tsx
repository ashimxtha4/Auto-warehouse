import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

const Navbar = () => {
  const contactItems = [
    {
      key: '1',
      label: 'Have any question?',
      icon: <FaPhone className='text-sm sm:text-2xl md:text-3xl lg:text-4xl' />,
      tel: '+977 98676535'
    },
    {
      key: '2',
      label: 'e-mail us',
      icon: <MdMail className='text-sm sm:text-2xl md:text-3xl lg:text-4xl' />,
      mail: 'info@autoglass.com'
    }
  ]

  return (
    <nav className='bg-gray-500 bg-opacity-45 py-1 text-white'>
      <div className='container flex items-center justify-between'>
        <h1 className='text-nowrap text-sm md:text-2xl hidden sm:block'>
          Welcome to Auto Glass
        </h1>
        <aside className='flex gap-2 justify-between sm:justify-end w-full md:gap-5'>
          {contactItems.map(item => (
            <div
              key={item.key}
              className='flex items-center justify-between gap-2 text-xs md:gap-3 md:text-xl'
            >
              <span>{item.icon}</span>
              <div>
                <h1>{item.label}</h1>
                <Link
                  href={item?.mail ? `mailto:${item.mail}` : `tel:${item?.tel}`}
                >
                  {item?.mail ? item.mail : item?.tel}
                </Link>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </nav>
  )
}

export default Navbar
