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
      className='flex w-auto gap-0 rounded-md border border-white p-2'
      onSubmit={handleSearch}
    >
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        placeholder='Search'
        className='border-none bg-transparent outline-none placeholder:pl-1 placeholder:text-xs placeholder:text-white focus:border-none focus:outline-none active:border-none active:outline-none'
      />
      <button
        type='submit'
        className='border-l border-l-white pl-1 text-base md:text-2xl'
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar
