'use client'

// import Link from 'nex  t/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  //   FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const FormSchema = z.object({
  item: z.string()
})

type FormSchemaType = z.infer<typeof FormSchema>

const selectOptions = [
  {
    label: 'Default',
    value: 'default'
  },
  {
    label: 'Most Popular',
    value: 'popular'
  },
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'SKU',
    value: 'sku'
  },
  {
    label: 'Lowest Price',
    value: 'lowest'
  },
  {
    label: 'Highest Price',
    value: 'highest'
  }
]

const SelectForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, 'selected')
  }

  console.log(form.watch("item"), "item");
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[200px] space-y-6'>
        <FormField
          control={form.control}
          name='item'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectOptions.map(option => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SelectForm
