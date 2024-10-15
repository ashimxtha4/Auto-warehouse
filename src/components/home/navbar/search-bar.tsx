'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(search, 'text search')
  }

  return (
    <form
      className='flex w-[150px] gap-0 rounded-md border border-gray-800 p-1 md:w-auto md:p-2'
      onSubmit={handleSearch}
    >
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        placeholder='Search Store...'
        className='w-[120px] border-none bg-transparent text-xs md:text-base outline-none placeholder:pl-1 placeholder:text-xs placeholder:text-gray-800 focus:border-none focus:outline-none active:border-none active:outline-none md:w-auto'
      />
      <button
        type='submit'
        className='border-l border-l-gray-800 pl-1 text-base md:text-2xl'
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar
