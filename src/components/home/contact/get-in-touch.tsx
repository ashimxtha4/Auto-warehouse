import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import { Input } from '@/components/ui/input'
import ButtonLoader from '@/utils/button-loader'
import { FaArrowRightLong } from 'react-icons/fa6'
import { usePostContactUs } from '@/services/api/api-service/contact/contact-us'

const getContactUsSchema = z.object({
  name: z.string({ required_error: 'Please enter your name.' }),
  email: z
    .string({ required_error: 'Please enter your email.' })
    .email({ message: 'Invalid email.' }),
  phone_no: z.string({ required_error: 'Please enter your phone number.' }),
  message: z.string({ required_error: 'Please enter your message.' })
})

export type TContactUsSchemaProps = z.infer<typeof getContactUsSchema>

const ContactUsForm = () => {
  const { mutateAsync, isPending } = usePostContactUs()

  const form = useForm<TContactUsSchemaProps>({
    resolver: zodResolver(getContactUsSchema)
  })

  const onSubmit = async (data: TContactUsSchemaProps) => {
    try {
      await mutateAsync(data)
      toast.success('Thankyou for reaching out!! We will get to you soon.')
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later')
    }
  }

  return (
    <aside className='col-span-2 h-full rounded-3xl bg-gradient-to-r from-[#35404C] from-[100%] to-[#1C2126] to-[100%] p-5 text-center shadow-md'>
      <p className='text-3xl font-normal text-white'>Get in Touch</p>
      <p className='text-base font-normal text-[#DFDFEC]'>
        We&apos;re happy to assist with any questions or service requests. Reach out
        today!
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 rounded-lg p-8'
        >
          <div className='flex w-full justify-between gap-5'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Name'
                      className='border rounded-full text-white placeholder:text-white/60 focus-visible:ring-1 focus-visible:ring-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Email'
                      className='border rounded-full text-white placeholder:text-white/60 focus-visible:ring-1 focus-visible:ring-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex gap-5'>
            <FormField
              control={form.control}
              name='phone_no'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      className='border rounded-full text-white placeholder:text-white/60 focus-visible:ring-1 focus-visible:ring-white'
                      placeholder='Phone'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Message'
                      className='border rounded-full text-white placeholder:text-white/60 focus-visible:ring-1 focus-visible:ring-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='!mt-2 md:!mt-4'>
            <button
              type='submit'
              className='w-[50%] self-center rounded-full bg-primary-main p-2 text-lg font-semibold text-white md:w-[30%] md:text-xl'
              disabled={isPending}
            >
              {(form.formState.isSubmitting || isPending) ? (
                <ButtonLoader />
              ) : (
                <div className='flex w-full items-center justify-between'>
                  <span className='text-primary-text pl-4'>SUBMIT</span>
                  <span className='ml-2 rounded-full bg-primary-text p-2'>
                    <FaArrowRightLong className='text-primary-main' />
                  </span>
                </div>
              )}
            </button>
          </div>
        </form>
      </Form>
    </aside>
  )
}

export default ContactUsForm
