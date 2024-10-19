import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

const Navbar = () => {
  const contactItems = [
    {
      key: '1',
      label: 'Call Us',
      icon: <FaPhone className='text-sm sm:text-2xl md:text-3xl lg:text-4xl' />,
      telSYD: '02 9756 6887',
      telMEL: '03 9357 5904'
    },
    {
      key: '2',
      label: 'E-mail Us',
      icon: <MdMail className='text-sm sm:text-2xl md:text-3xl lg:text-4xl' />,
      mail: 'sales@autoglassshop.com.au'
    }
  ]

  return (
    <nav className='bg-gray-500 bg-opacity-45 py-1 text-white'>
      <div className='container flex items-center justify-between'>
        <h1 className='hidden text-nowrap text-sm sm:block md:text-lg lg:text-2xl'>
          Welcome to Auto Glass
        </h1>
        <aside className='flex w-full justify-between gap-2 sm:justify-end md:gap-5'>
          {contactItems.map(item => (
            <div
              key={item.key}
              className='flex items-center justify-between gap-2 text-xs md:gap-3 md:text-xl'
            >
              <span>{item.icon}</span>
              <div>
                <h1>
                  {item.label === 'Call Us' ? (
                    <Link href='tel:03 9357 5904'>MEL: 03 9357 5904</Link>
                  ) : (
                    item.label
                  )}
                </h1>
                <Link
                  href={
                    item?.mail ? `mailto:${item.mail}` : `tel:${item?.telSYD}`
                  }
                >
                  {item?.mail ? item.mail : `SYD: ${item?.telSYD}`}
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
