import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormRow from '@/components/form/form-row'
import ComboboxDropdown from '@/components/form/combox'

const searchPartsSchema = z.object({
  make: z.string({ required_error: 'Vehicle Brand is required.' }),
  model: z.string().optional(),
  group: z.string().optional(),
  body: z.string().optional(),
  year: z.string().optional(),
  series: z.string().optional()
})

export type TSearchPartsProps = z.infer<typeof searchPartsSchema>
const SearchForm = () => {
  const form = useForm<Partial<TSearchPartsProps>>({
    resolver: zodResolver(searchPartsSchema)
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
              <ComboboxDropdown
                field={field}
                form={form}
                options={[
                  { label: 'Test', value: 'test' },
                  { label: 'Test1', value: 'test1' }
                ]}
                title='Make'
                placeholder='Select Make'
              />
            )}
          />
          <FormField
            control={form.control}
            name='model'
            render={({ field }) => (
              <ComboboxDropdown
                field={field}
                form={form}
                options={[
                  { label: 'Test', value: 'test' },
                  { label: 'Test1', value: 'test1' }
                ]}
                title='Model'
                placeholder='Select Model'
              />
            )}
          />
          <FormField
            control={form.control}
            name='group'
            render={({ field }) => (
              <ComboboxDropdown
                field={field}
                form={form}
                options={[
                  { label: 'Test', value: 'test' },
                  { label: 'Test1', value: 'test1' }
                ]}
                title='Group'
                placeholder='Select Group'
              />
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <ComboboxDropdown
                field={field}
                form={form}
                options={[
                  { label: 'Test', value: 'test' },
                  { label: 'Test1', value: 'test1' }
                ]}
                title='Body'
                placeholder='Select Body'
              />
            )}
          />
          <FormField
            control={form.control}
            name='year'
            render={({ field }) => (
              <ComboboxDropdown
                field={field}
                form={form}
                options={[
                  { label: 'Test', value: 'test' },
                  { label: 'Test1', value: 'test1' }
                ]}
                title='Year'
                placeholder='Select Year'
              />
            )}
          />
          <FormField
            control={form.control}
            name='series'
            render={({ field }) => (
              <ComboboxDropdown
                field={field}
                form={form}
                options={[
                  { label: 'Test', value: 'test' },
                  { label: 'Test1', value: 'test1' }
                ]}
                title='Series'
                placeholder='Select Series'
              />
            )}
          />
        </FormRow>
        <div className='flex gap-2 !mt-1'>
          <Button
            type='reset'
            variant='outline'
            className='text-primary-main hover:text-primary-main'
            onClick={() => form.reset()}
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
