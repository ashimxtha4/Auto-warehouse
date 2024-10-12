import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import FormRow from '@/components/form/form-row'

const searchPartsSchema = z.object({
  make: z.string({ required_error: 'Vehicle Brand is required.' }),
  model: z.string().optional(),
  group: z.string().optional(),
  body: z.string().optional(),
  year: z.string().optional(),
  series: z.string().optional()
})

type TSearchPartsProps = z.infer<typeof searchPartsSchema>
const SearchForm = () => {
  const form = useForm<Partial<TSearchPartsProps>>({
    resolver: zodResolver(searchPartsSchema),
    defaultValues: {}
  })

  const onSubmit = (data: Partial<TSearchPartsProps>) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormRow>
          <FormField
            control={form.control}
            name='make'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Make</FormLabel>
                <FormControl>
                  <Input placeholder='Select Make' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='model'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modal</FormLabel>
                <FormControl>
                  <Input placeholder='Select Make' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='group'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <Input placeholder='Select Make' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Input placeholder='Select Make' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='year'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input placeholder='Select Make' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='series'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Series</FormLabel>
                <FormControl>
                  <Input placeholder='Select Make' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>
        <div className='flex gap-2'>
          <Button
            type='reset'
            variant='outline'
              className='text-primary-main hover:text-primary-main'
          >
            Clear
          </Button>
          <Button
            type='submit'
            variant='default'
            className='bg-primary-main hover:bg-primary-main'
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SearchForm
