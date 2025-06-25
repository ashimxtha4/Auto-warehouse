'use client'

import React, { useEffect } from 'react'
import { Mail, Phone, Edit, Home } from 'lucide-react'
// import toast from 'react-hot-toast'
import { useGetCustomerDetails } from '@/services/api/api-service/customer/customer-detail'
import { useUserStore } from '@/slice/user-slice'
import { LoadingSpinner } from '../ui/loading-spinner'

const UserProfile = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false)

  // const handleModalToggle = () => setIsModalOpen(!isModalOpen)

  // const handleSaveChanges = () => {
  //   toast.success('Changes have been saved!')
  //   setIsModalOpen(false)
  // }

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])


  const { data, isLoading } = useGetCustomerDetails(uuid, id)

  const customerData = data?.data

  return (
    <section className='container mx-auto my-8 flex justify-center'>
      {isLoading && <LoadingSpinner />}
      {/* <div className='relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg'>
        <button
          // onClick={handleModalToggle}
          className='absolute right-4 top-4 text-primary-text/80 hover:text-primary-text'
        >
          <Edit className='h-5 w-5' />
        </button>

        <div className='mb-6 flex items-center justify-center'>
          <div className='flex h-32 w-32 items-center justify-center rounded-full bg-primary-main'>
            <span className='text-3xl text-white'>{customerData?.first_name}</span>
          </div>
        </div>

        <div className='text-center'>
          <h2 className='mb-2 text-2xl font-semibold text-primary-main'>
            {customerData?.first_name + ' ' + customerData?.last_name}
          </h2>

          <div className='mb-4 flex items-center text-left'>
            <Mail className='mr-2 h-4 w-4 text-primary-main' />
            <span>Email: {customerData?.email}</span>
          </div>

          <div className='mb-4 flex items-center text-left'>
            <Phone className='mr-2 h-4 w-4 text-primary-main' /> Phone: {customerData?.phone}
          </div>
          <div className='mb-4 flex items-center text-left'>
            <Home className='mr-2 h-4 w-4 text-primary-main' /> Address: {customerData?.address ?? 'N/A'}
          </div>
        </div>
      </div> */}
      <div className='flex items-start justify-center bg-green-50 rounded-2xl font-sans text-gray-800'>
        <div className='w-full max-w-4xl overflow-hidden rounded-2xl border border-green-200 bg-white shadow-lg'>
          {/* Header */}
          <div className='flex flex-col items-center bg-green-100 px-6 py-8'>
            <img
              className='h-28 w-28 rounded-full border-4 border-green-200 shadow'
              src='https://i.pravatar.cc/150?img=32'
              alt='Profile'
            />
            <h2 className='mt-4 text-2xl font-bold text-green-700'>Jane Doe</h2>
            <p className='text-green-600'>Product Manager</p>
          </div>

          {/* Body */}
          <div className='grid grid-cols-1 gap-6 bg-green-50 px-8 py-6 md:grid-cols-2'>
            <div>
              <h3 className='mb-2 text-lg font-semibold text-green-800'>
                Contact Information
              </h3>
              <p>
                <strong>Email:</strong> {customerData?.email}
              </p>
              <p>
                <strong>Phone:</strong> {customerData?.phone}
              </p>
              <p>
                <strong>Location:</strong> {customerData?.address ?? 'N/A'}
              </p>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-semibold text-green-800'>
                Account Details
              </h3>
              <p>
                <strong>Username:</strong> {customerData?.first_name + ' ' + customerData?.last_name}
              </p>
              {/* <p>
                <strong>Member since:</strong> March 2022
              </p>
              <p>
                <strong>Status:</strong> Active
              </p> */}
            </div>
          </div>

          {/* Footer */}
          <div className='bg-green-100 px-6 py-4 text-right'>
            <button className='rounded-xl bg-green-500 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-green-600'>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* {isModalOpen && (
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
      )} */}
    </section>
  )
}

export default UserProfile
