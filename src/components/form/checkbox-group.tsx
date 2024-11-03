'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

const FormSchema = z.object({
  items: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.'
  })
})

type CheckboxGroupProps = {
  title: string
  content: {
    id: string
    label: string
    quantity?: string
  }[]
}

export const CheckboxGroup = ({ items }: { items: CheckboxGroupProps[] }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: []
    }
  })

  const checkedFilter = form.watch('items')

  console.log(checkedFilter, "----checked-----")

  return (
    <Form {...form}>
      <form className='space-y-8'>
        {items.map(item => (
          <FormField
            key={item.title}
            control={form.control}
            name='items'
            render={() => (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel className='text-base'>{item.title}</FormLabel>
                </div>
                {item.content.map(unit => (
                  <FormField
                    key={unit.id}
                    control={form.control}
                    name='items'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={unit.id}
                          className='flex flex-row items-start space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(unit.id)}
                              onCheckedChange={checked => {
                                return checked
                                  ? field.onChange([...field?.value, unit.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        value => value !== unit.id
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className='w-full text-sm font-normal'>
                            {unit.label}
                            {unit?.quantity && (
                              <span className='float-end'>
                                ({unit.quantity})
                              </span>
                            )}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {/* <Button type='submit'>Submit</Button> */}
      </form>
    </Form>
  )
}
