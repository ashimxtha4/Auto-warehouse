'use client'

import React from 'react'
import GetAQuoteForm from './get-a-quote-form'
import { useScrollRef } from '@/hooks/scroll.hooks'

const GetAQuote = () => {
  const { ref } = useScrollRef(140)

  return (
    <>
      <section ref={ref} className='container my-2 md:my-4'>
        <GetAQuoteForm />
      </section>
    </>
  )
}

export default GetAQuote
