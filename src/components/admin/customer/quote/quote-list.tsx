import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useQuoteInquiry } from '@/hooks/admin/quote/inquiry-quote'
import React from 'react'
import QuoteCard from './quote-card'

const QuoteList = () => {
  const { isLoading, quoteList } = useQuoteInquiry()
  return (
    <main className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {isLoading && <LoadingSpinner />}
      {quoteList?.map(quote => <QuoteCard inquiry={quote} key={quote.id} />)}
    </main>
  )
}

export default QuoteList
