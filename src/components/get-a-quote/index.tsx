import React from 'react'
import GetAQuoteForm from './get-a-quote-form'

const GetAQuote = () => {
  return (
    <>
      <section className='container my-2 md:my-4'>
        <h3 className='my-1 text-xl font-bold tracking-wide text-blue-600 md:my-5 md:text-3xl'>
          Please fill out the form to receive a quotation.
        </h3>
        <GetAQuoteForm />
      </section>
    </>
  )
}

export default GetAQuote
