import React from 'react'
import { Form, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormRow from '@/components/form/form-row'
import ComboboxDropdown from '@/components/form/combox'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
// import { VEHICLE_MAKE } from '@/constants/vehicle-make'
// import { VEHICLE_MODELS } from '@/constants/vehicle-model'
// import { VEHICLE_BODY_PARTS } from '@/constants/vehicle-body'
// import { VEHICLE_YEAR } from '@/constants/vehicle-year'
import { SectionDescription } from '@/utils/section-header'
// import { VEHICLE_SERIES } from '@/constants/vehicle-series'

const SearchForm = () => {
  const {
    form,
    onSubmit,
    vehicleMakeData,
    vehicleBodyData,
    vehicleModelData,
    vehicleSeriesData,
    vehicleGroupData,
    router
  } = useSearchVehicles()

  return (
    <>
      {form.formState.isSubmitting && <LoadingSpinner />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 rounded-lg bg-white p-4 shadow-lg'
        >
          <SectionDescription>
            Filter your results by entering your Vehicle to ensure you find the
            parts that fit.
          </SectionDescription>
          <FormRow>
            <FormField
              control={form.control}
              name='make'
              render={({ field }) => (
                <ComboboxDropdown
                  field={field}
                  form={form}
                  options={
                    vehicleMakeData?.map(item => ({
                      label: item.name,
                      value: item.id.toString()
                    })) || []
                  }
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
                    vehicleModelData?.map(item => ({
                      label: item.name,
                      value: item.id?.toString()
                    })) || []
                  }
                  title='Model'
                  placeholder='Select Model'
                />
              )}
            />
            <FormField
              control={form.control}
              name='position'
              render={({ field }) => (
                <ComboboxDropdown
                  field={field}
                  form={form}
                  options={
                    vehicleGroupData?.map(item => ({
                      label: item.name,
                      value: item.id?.toString()
                    })) || []
                  }
                  title='Group'
                  placeholder='Select Group'
                />
              )}
            />
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <ComboboxDropdown
                  field={field}
                  form={form}
                  options={
                    vehicleBodyData?.map(item => ({
                      label: item.name,
                      value: item.id?.toString()
                    })) || []
                  }
                  title='Body'
                  placeholder='Select Body'
                />
              )}
            />
            {/* <FormField
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
            /> */}
            <FormField
              control={form.control}
              name='series'
              render={({ field }) => (
                <ComboboxDropdown
                  field={field}
                  form={form}
                  options={
                    vehicleSeriesData?.map(item => ({
                      label: item.name,
                      value: item.id?.toString()
                    })) || []
                  }
                  title='Series'
                  placeholder='Select Series'
                />
              )}
            />
          </FormRow>
          <div className='!mt-2 flex justify-end gap-2 md:!mt-4'>
            <Button
              type='reset'
              variant='outline'
              className='text-lg font-semibold text-blue-600 hover:text-blue-700 md:text-xl'
              onClick={() => {
                form.reset()
                router.push('/')
              }}
            >
              Clear
            </Button>
            <Button
              type='submit'
              variant='default'
              className='gradient-bg text-lg font-semibold text-white hover:from-green-600 hover:to-blue-600 md:text-xl'
            >
              {form.formState.isSubmitting ? (
                <span className='h-4 w-4 animate-spin rounded-full border-[2px] border-gray-500 border-t-white' />
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
