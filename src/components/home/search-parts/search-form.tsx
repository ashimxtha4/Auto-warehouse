import React from 'react'
import { Form, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormRow from '@/components/form/form-row'
import ComboboxDropdown from '@/components/form/combox'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import { VEHICLE_MAKE } from '@/constants/vehicle-make'
import { VEHICLE_MODELS } from '@/constants/vehicle-model'
import { VEHICLE_BODY_PARTS } from '@/constants/vehicle-body'
import { VEHICLE_YEAR } from '@/constants/vehicle-year'
import { VEHICLE_SERIES } from '@/constants/vehicle-series'

const SearchForm = () => {
  const { form, onSubmit } = useSearchVehicles()
  return (
    <>
      {form.formState.isSubmitting && <LoadingSpinner />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 rounded-lg border p-4'
        >
          <FormRow>
            <FormField
              control={form.control}
              name='make'
              render={({ field }) => (
                <ComboboxDropdown
                  field={field}
                  form={form}
                  options={VEHICLE_MAKE.map(item => ({
                    label: item.label.toUpperCase(),
                    value: item.value
                  }))}
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
                  options={
                    VEHICLE_MODELS?.map(item => ({
                      label: item.label,
                      value: item.value
                    })) || []
                  }
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
                  options={VEHICLE_BODY_PARTS}
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
                  options={VEHICLE_BODY_PARTS}
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
                  options={VEHICLE_YEAR}
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
                  options={VEHICLE_SERIES}
                  title='Series'
                  placeholder='Select Series'
                />
              )}
            />
          </FormRow>
          <div className='!mt-2 flex gap-2 md:!mt-4'>
            <Button
              type='reset'
              variant='outline'
              className='text-lg font-semibold text-primary-main hover:text-primary-main md:text-xl'
              onClick={() => form.reset()}
            >
              Clear
            </Button>
            <Button
              type='submit'
              variant='default'
              className='bg-primary-main text-lg font-semibold text-white hover:bg-primary-dark md:text-xl'
            >
              {form.formState.isSubmitting ? (
                <span className='h-4 w-4 animate-spin rounded-full border-[2px] border-gray-500 border-t-white'></span>
              ) : (
                'Search Vehicle'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default SearchForm
