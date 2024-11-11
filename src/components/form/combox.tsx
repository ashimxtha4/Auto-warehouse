'use client'

import React, { useState } from 'react'
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
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

type OptionsProps = {
  label: string
  value: string
}

type ComboboxDropdownProps = {
  title: string
  placeholder?: string
  description?: string
  options: OptionsProps[]
  field: ControllerRenderProps<
    Partial<TSearchPartsProps>,
    keyof TSearchPartsProps
  >
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<Partial<TSearchPartsProps>, any, undefined>
}

const ComboboxDropdown: React.FC<ComboboxDropdownProps> = ({
  field,
  options,
  title,
  form,
  placeholder,
  description,
  ...props
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <FormItem {...props} className='mb-4 mx-auto md:mb-0'>
      <FormLabel className='block'>{title}</FormLabel>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant='outline'
              role='combobox'
              className={cn(
                'w-72 justify-between',
                !field.value && 'text-muted-foreground'
              )}
            >
              {field.value
                ? options.find(option => option.value === field.value)?.label
                : placeholder || 'Select...'}
              <MdKeyboardArrowDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className='p-0'>
          <Command>
            <CommandInput
              placeholder={placeholder ?? 'Search...'}
              className='h-9'
            />
            <CommandList>
              <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {options.map(option => (
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
        </PopoverContent>
      </Popover>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

export default ComboboxDropdown
