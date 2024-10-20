'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'>
        <h2 className='text-center text-2xl font-semibold text-gray-700'>
          Register
        </h2>
        <form onSubmit={handleSubmit} className='mt-6'>
          <div className='mb-4'>
            <label
              className='mb-2 block text-sm font-semibold text-gray-700'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-main'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='mb-2 block text-sm font-semibold text-gray-700'
              htmlFor='password'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-main'
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='mb-2 block text-sm font-semibold text-gray-700'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-main'
              placeholder='Confirm your password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='rounded-md bg-primary-main px-4 py-2 font-semibold text-white transition-colors hover:bg-primary-dark'
            >
              Register
            </button>
            <Link
              href='/auth/login'
              className='text-sm text-primary-main hover:underline'
            >
              Already have an account?
            </Link>
          </div>
        </form>
        {/* <p className='mt-4 text-center text-sm text-gray-600'>
          By signing up, you agree to our{' '}
          <a href='#' className='text-blue-500 hover:underline'>
            Terms of Service
          </a>{' '}
          and{' '}
          <a href='#' className='text-blue-500 hover:underline'>
            Privacy Policy
          </a>
          .
        </p> */}
      </div>
    </div>
  )
}

export default RegisterPage
