'use client'

import React, { Suspense } from 'react'
import { LoadingSpinner } from '../ui/loading-spinner'
import VehicleParts from '../home/vehicle/vehicle-parts'
import { Input } from '../ui/input'
import { FaSearch } from 'react-icons/fa'
import { useSearchInput } from '@/hooks/search-input.hook'

const SearchProduct = () => {

    const { debounceValue, router, search, setSearch } = useSearchInput()

    return (
        <section className='bg-white rounded-3xl p-2'>
            <form onSubmit={e => {
                e.preventDefault()
                router.push(`/shop?keyword=${debounceValue}`)
            }} className='my-4 flex relative w-full'>
                <Input
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value)
                    }}
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
            <Suspense fallback={<LoadingSpinner />}>
                <VehicleParts />
            </Suspense>
        </section>
    )
}

export default SearchProduct