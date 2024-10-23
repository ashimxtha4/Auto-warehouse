import React from 'react'
import { Form, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormRow from '@/components/form/form-row'
import ComboboxDropdown from '@/components/form/combox'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'

const SearchForm = () => {
  const { form, onSubmit } = useSearchVehicles()
  return (
    <>
      {form.formState.isSubmitting && <LoadingSpinner />}
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
          <div className='!mt-1 flex gap-2'>
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
              className='bg-primary-main hover:bg-primary-dark'
            >
              {form.formState.isSubmitting ? (
                <span className='h-4 w-4 animate-spin rounded-full border-[2px] border-gray-500 border-t-white'></span>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default SearchForm
