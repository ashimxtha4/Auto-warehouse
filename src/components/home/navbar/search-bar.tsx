'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/shop?keyword=${search}`)
    setSearch('')
  }

  return (
    <form
      className='flex w-[150px] gap-0 rounded-full border border-gray-500 p-1 md:w-auto md:p-2'
      onSubmit={handleSearch}
    >
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        placeholder='Search Store...'
        className='w-[120px] border-none bg-transparent text-xs outline-none placeholder:pl-1 placeholder:text-xs placeholder:text-gray-500 focus:border-none focus:outline-none active:border-none active:outline-none md:w-auto md:text-base'
      />
      <button
        type='submit'
        className='pl-1 text-base text-gray-500 md:text-2xl'
      >
        <FaSearch size={18} />
      </button>
    </form>
  )
}

export default SearchBar
