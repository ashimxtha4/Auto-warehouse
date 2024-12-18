import React from 'react'
import { Form, FormField } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormRow from '@/components/form/form-row'
import ComboboxDropdown from '@/components/form/combox'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { useSearchVehicles } from '@/hooks/search-vehicle.hooks'
import ButtonLoader from '@/utils/button-loader'
import { FaArrowRight } from 'react-icons/fa6'
import { RxCrossCircled } from 'react-icons/rx'

const SearchForm = () => {
  const {
    form,
    onSubmit,
    vehicleMakeData,
    vehicleBodyData,
    vehicleModelData,
    vehicleSeriesData,
    vehicleGroupData,
    vehicleYearData,
    router
  } = useSearchVehicles()

  const formValues = form.watch()

  const isFormEmpty = Object.values(formValues).every(value => !value)

  return (
    <>
      {form.formState.isSubmitting && <LoadingSpinner />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 rounded-xl xl:rounded-full bg-white p-4 shadow-lg'
        >
          <FormRow isFormEmpty={isFormEmpty}>
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
                    vehicleBodyData
                      ? Object.entries(vehicleBodyData).map(([key]) => ({
                          label: key,
                          value: key
                        }))
                      : []
                  }
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
                  options={
                    vehicleYearData
                      ? Object.entries(vehicleYearData).map(([key]) => ({
                          label: key,
                          value: key
                        }))
                      : []
                  }
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
            <div className='flex justify-center gap-2'>
              {!isFormEmpty && (
                <Button
                  type='reset'
                  variant='outline'
                  className='text-primary-danger hover:text-primary-danger h-[60px] rounded-full text-base font-semibold'
                  onClick={() => {
                    form.reset()
                    if (Object.values(formValues).some(value => value)) {
                      router.push('/')
                    }
                  }}
                >
                  <div className='flex items-center gap-1'>
                    <span>Clear</span>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full'>
                      <RxCrossCircled className='text-primary-danger' />
                    </span>
                  </div>
                </Button>
              )}
              <Button
                type='submit'
                variant='default'
                className='h-[60px] rounded-full bg-primary-main text-base font-semibold text-primary-text hover:bg-primary-main'
              >
                {form.formState.isSubmitting ? (
                  <ButtonLoader />
                ) : (
                  <div className='flex items-center gap-4'>
                    <span>Find Parts</span>
                    <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-text'>
                      <FaArrowRight className='text-primary-main' />
                    </span>
                  </div>
                )}
              </Button>
            </div>
          </FormRow>
        </form>
      </Form>
    </>
  )
}

export default SearchForm
