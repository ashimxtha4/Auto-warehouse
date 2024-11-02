import { IQuoteListProps } from '@/services/api/api-service/admin/customer/quote/quote-list'
import React from 'react'

const QuoteCard = ({ inquiry }: { inquiry: IQuoteListProps }) => {
  return (
    <div className='flex flex-col gap-2 rounded-lg border p-4 shadow transition hover:shadow-lg'>
      <h3 className='text-lg font-semibold'>{inquiry.name}</h3>
      <p className='text-gray-600'>Phone: {inquiry.phone}</p>
      <p className='text-gray-600'>Email: {inquiry.email}</p>
      <p className='text-gray-600'>Post Code: {inquiry.post_code}</p>
      <p className='text-gray-600'>Preferred Type: {inquiry.preferred_type}</p>
      <p className='text-gray-600'>Make: {inquiry.make}</p>
      <p className='text-gray-600'>Model: {inquiry?.model ?? 'N/A'}</p>
      <p className='text-gray-600'>Year: {inquiry?.year ?? 'N/A'}</p>
      <p className='text-gray-600'>Body Type: {inquiry?.body_type ?? 'N/A'}</p>
      <p className='text-gray-600'>
        Comments: {inquiry?.additional_comments ?? 'N/A'}
      </p>
      <p className='text-gray-600'>
        Status: <span className='text-green-500'>{inquiry.status}</span>
      </p>
      <p className='text-gray-600'>Reply: {inquiry?.reply ?? 'N/A'}</p>
      <button
        // onClick={() => onReply(inquiry.id)}
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600'
      >
        Reply
      </button>
    </div>
  )
}

export default QuoteCard
