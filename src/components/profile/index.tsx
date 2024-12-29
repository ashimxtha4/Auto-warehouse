'use client'

import React, { useState } from 'react'
import { Mail, Phone, Edit, Pencil, Home, Building, Hash } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => setIsModalOpen(!isModalOpen)

  const handleSaveChanges = () => {
    toast.success('Changes have been saved!')
    setIsModalOpen(false)
  }

  return (
    <section className='container mx-auto my-8 flex justify-center'>
      <Toaster position='top-center' reverseOrder={false} />

      <div className='relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg'>
        <button
          onClick={handleModalToggle}
          className='absolute right-4 top-4 text-primary-text/80 hover:text-primary-text'
        >
          <Edit className='h-5 w-5' />
        </button>

        <div className='mb-6 flex items-center justify-center'>
          <div className='flex h-32 w-32 items-center justify-center rounded-full bg-primary-main'>
            <span className='text-3xl text-white'>JD</span>
          </div>
        </div>

        <div className='text-center'>
          <h2 className='mb-2 text-2xl font-semibold text-primary-main'>
            John Doe
          </h2>

          <div className='mb-4 flex items-center justify-center'>
            <Mail className='mr-2 h-4 w-4 text-primary-main' />
            <span>Email: johndoe@example.com</span>
          </div>

          <hr className='my-4' />

          <div className='mb-4 flex items-center text-left'>
            <Phone className='mr-2 h-4 w-4 text-primary-main' /> Phone: +1 (123)
            456-7890
          </div>
          <div className='mb-4 flex items-center text-left'>
            <Home className='mr-2 h-4 w-4 text-primary-main' /> Address: 123 Main
            Street
          </div>

          <div className='mb-4 flex items-center text-left'>
            <Building className='mr-2 h-4 w-4 text-primary-main' /> City: Melbourne
          </div>

          <div className='mb-4 flex items-center text-left'>
            <Hash className='mr-2 h-4 w-4 text-primary-main' /> Postal Code: 3000
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-full max-w-md rounded-lg bg-white p-6'>
            <div className='mb-6 flex items-center'>
              <Pencil className='mr-2 h-6 w-6 text-primary-main' />
              <h2 className='text-xl font-semibold text-primary-main'>
                Edit Profile
              </h2>
            </div>
            <form>
              <div className='mb-4'>
                <label className='block text-primary-text'>Full Name</label>
                <input
                  type='text'
                  defaultValue='John Doe'
                  className='mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary-main focus:outline-none'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-primary-text'>Email</label>
                <input
                  type='email'
                  defaultValue='johndoe@example.com'
                  className='mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary-main focus:outline-none'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-primary-text'>Phone Number</label>
                <input
                  type='text'
                  defaultValue='+1 (123) 456-7890'
                  className='mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary-main focus:outline-none'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-primary-text'>Address</label>
                <input
                  type='text'
                  defaultValue='123 Main Street'
                  className='mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary-main focus:outline-none'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-primary-text'>City</label>
                <input
                  type='text'
                  defaultValue='Melbourne'
                  className='mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary-main focus:outline-none'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-primary-text'>Postal Code</label>
                <input
                  type='text'
                  defaultValue='3000'
                  className='mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-primary-main focus:outline-none'
                />
              </div>

              <div className='flex justify-start space-x-4'>
                <button
                  type='button'
                  onClick={handleSaveChanges}
                  className='rounded-lg bg-primary-main px-4 py-2 text-white hover:bg-primary-main'
                >
                  Save Changes
                </button>
                <button
                  type='button'
                  onClick={handleModalToggle}
                  className='rounded-lg px-4 py-2 text-primary-text/80 hover:text-primary-text'
                >
                  Discard Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default UserProfile
