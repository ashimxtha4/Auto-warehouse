import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Loader2 } from 'lucide-react'
import { useSearchInput } from '@/hooks/search-input.hook'

const SearchComponent = () => {
  const {
    handleInputClick,
    inputRef,
    isLoading,
    productList,
    setSearch,
    search,
    setOpen,
    open,
    router,
    debounceValue
  } = useSearchInput()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <form
          onSubmit={e => {
            e.preventDefault()
            router.push(`/shop?keyword=${debounceValue}`)
          }}
          className='flex w-[150px] gap-0 rounded-full border border-gray-500 p-1 md:w-auto md:p-2'
        >
          <input
            ref={inputRef}
            value={search}
            onChange={e => {
              setSearch(e.target.value)
              if (!open) setOpen(true)
            }}
            onClick={handleInputClick}
            onFocus={() => !open && setOpen(true)}
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
      </PopoverTrigger>
      <PopoverContent
        className='max-h-60 w-[200px] overflow-auto p-2 md:w-[250px]'
        onInteractOutside={e => {
          if (!inputRef.current?.contains(e.target as Node)) {
            setOpen(false)
          }
        }}
      >
        {search.length < 1 ? (
          <div className='py-2 text-center text-sm text-gray-500'>
            Please search to get desired glass.
          </div>
        ) : isLoading ? (
          <div className='flex items-center justify-center py-4'>
            <Loader2 className='h-6 w-6 animate-spin text-gray-500' />
          </div>
        ) : productList?.data && productList.data.length > 0 ? (
          <div className='space-y-2'>
            {productList.data.map((data, index) => (
              <React.Fragment key={data.id}>
                <div
                  className='flex items-center justify-between py-1 hover:cursor-pointer hover:bg-gray-300'
                  onClick={() =>
                    router.replace(`/product?id=${data.id}`, { scroll: false })
                  }
                >
                  <span className='text-sm'>{data.name}</span>
                  <span className='text-xs text-gray-500'>${data.price}</span>
                </div>
                {index < productList.data.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className='py-2 text-center text-sm text-gray-500'>
            No results found
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default SearchComponent
