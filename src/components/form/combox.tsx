'use client'

import React, { useState } from 'react'
import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage
} from '../ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form'
import { CheckIcon } from '@radix-ui/react-icons'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../ui/command'
import { TSearchPartsProps } from '@/hooks/search-vehicle.hooks'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Input } from '../ui/input'

type OptionsProps = {
  label: string
  value: string
}

type ComboboxDropdownProps = {
  title: string
  placeholder?: string
  description?: string
  options?: OptionsProps[]
  field: ControllerRenderProps<
    Partial<TSearchPartsProps>,
    keyof TSearchPartsProps
  >
  form: UseFormReturn<Partial<TSearchPartsProps>>,
  year?: boolean
}

const ComboboxDropdown: React.FC<ComboboxDropdownProps> = ({
  field,
  options,
  title,
  form,
  placeholder,
  description,
  year,
  ...props
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <FormItem {...props} className='mx-auto mb-2 md:mb-0'>
      {/* <FormLabel className='block'>{title}</FormLabel> */}
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant='outline'
              role='combobox'
              className={cn(
                'md:h-[60px] h-[50px] w-full justify-between rounded-2xl',
                !field.value && 'text-muted-foreground'
              )}
            >
              <div className='flex flex-col items-start justify-between'>
                <p className='text-sm text-primary-text/80'>{title}</p>
                {year
                  ?
                  form.getValues('year') || <p className='text-base text-primary-text/60'>
                    {placeholder}
                  </p>
                  :
                  field.value
                    ?
                    (
                      options?.find(option => option.value === field.value)?.label
                    )
                    :
                    (
                      <p className='text-base text-primary-text/60'>
                        {placeholder}
                      </p>
                    )}
              </div>
              <MdKeyboardArrowDown className='ml-2 h-6 w-6 shrink-0 text-primary-text/50' />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className='p-0'>
          {
            year ?
              <div className='p-2 md:p-4'>
                <Input
                  placeholder={'Enter vehicle year'}
                  className='h-9'
                  {...field}
                />
                <FormMessage />
              </div> :
              <Command>
                <CommandInput
                  placeholder={placeholder ?? 'Search...'}
                  className='h-9'
                />
                <CommandList>
                  <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
                  <CommandGroup>
                    {options?.map(option => (
                      <CommandItem
                        value={option.label}
                        key={option.value}
                        onSelect={() => {
                          form.setValue(field.name, option.value)
                          setIsPopoverOpen(prev => !prev)
                        }}
                      >
                        {option.label}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            option.value === field.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
          }
        </PopoverContent>
      </Popover>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

export default ComboboxDropdown
