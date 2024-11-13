'use client'

import React, { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const TermsOfUse = () => {
  return (
    <div className='mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-lg'>
      <h2 className='mb-6 text-2xl font-semibold text-green-700'>
        Terms of Use
      </h2>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          1. Introduction
        </h3>
        <p className='text-gray-700'>
          By accessing and using this platform, you agree to comply with these
          terms of use. Please read them carefully before using the website.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          2. User Responsibilities
        </h3>
        <p className='text-gray-700'>
          Users are responsible for maintaining the confidentiality of their
          account and password. You agree to accept responsibility for all
          activities that occur under your account.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          3. Intellectual Property
        </h3>
        <p className='text-gray-700'>
          All content on this platform, including text, graphics, logos, and
          software, is the property of our company. Unauthorized use of any
          content may result in legal action.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          4. Limitation of Liability
        </h3>
        <p className='text-gray-700'>
          We are not liable for any damages that may occur from the use of this
          platform. Users agree to use the platform at their own risk.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          5. Changes to Terms
        </h3>
        <p className='text-gray-700'>
          We reserve the right to modify these terms at any time. Users will be
          notified of changes via email or by a notice on the website.
        </p>
      </div>
    </div>
  )
}

const ReturnPolicy = () => {
  return (
    <div className='mx-auto my-10 max-w-3xl rounded-lg bg-white p-6 shadow-lg'>
      <h2 className='mb-6 text-2xl font-semibold text-green-700'>
        Return Policy
      </h2>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          1. Return Eligibility
        </h3>
        <p className='text-gray-700'>
          Items are eligible for return within 30 days of purchase if they are
          in their original condition with tags attached. Proof of purchase is
          required.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          2. Non-Returnable Items
        </h3>
        <p className='text-gray-700'>
          Certain items such as perishable goods, custom-made products, and
          digital downloads are non-returnable. Please review the product
          description before making a purchase.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          3. Refund Process
        </h3>
        <p className='text-gray-700'>
          Once your return is received and inspected, we will notify you of the
          approval or rejection of your refund. If approved, your refund will be
          processed within 7 business days.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          4. Late or Missing Refunds
        </h3>
        <p className='text-gray-700'>
          If you haven’t received your refund within 7 days, first check your
          bank account. Then contact your credit card company or bank, as it may
          take some time before your refund is officially posted.
        </p>
      </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-semibold text-green-700'>
          5. Shipping Returns
        </h3>
        <p className='text-gray-700'>
          To return your product, you should mail your product to our warehouse
          address. You will be responsible for paying for your own shipping
          costs for returning your item.
        </p>
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className='container mx-auto p-4'>
        <TermsOfUse />
        <ReturnPolicy />
      </div>
    </Suspense>
  )
}

export default Page
