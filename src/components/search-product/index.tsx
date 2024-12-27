'use client'

import React from 'react'
import VehicleParts from '../home/vehicle/vehicle-parts'
import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'
import { useSearchInput } from '@/hooks/search-input.hook'
import { useScrollRef } from '@/hooks/scroll.hooks'

const SearchProduct = () => {

    const { debounceValue, router, search, setSearch } = useSearchInput()
    const { ref } = useScrollRef(100)
    return (
        <section ref={ref} className='bg-white rounded-3xl p-2'>
            <p className='text-base text-primary-text my-2 md:my-4 md:text-2xl'>SEARCH</p>
            <form onSubmit={e => {
                e.preventDefault()
                router.push(`/search-product?keyword=${debounceValue}`)
            }} className='my-2 md:my-4 flex relative w-full'>
                <Input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type='text'
                    placeholder='Search Store...'
                    className='border-[2px] rounded-full w-full border-[#B0B0B080]/50 text-primary-text placeholder:text-primary-text focus-visible:ring-2 focus-visible:ring-primary-main'
                />
                <button
                    type='submit'
                    className='pl-1 text-base text-primary-text/60 absolute top-2 right-2 md:text-2xl'
                >
                    <FaSearch size={18} />
                </button>
            </form>
            <VehicleParts />
        </section>
    )
}

export default SearchProduct