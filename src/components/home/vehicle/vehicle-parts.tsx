import { CheckboxGroup } from '@/components/form/checkbox-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

// const items = [
//   {
//     title: 'new title',
//     content: [
//       {
//         id: 'recents',
//         label: 'Recents',
//         quantity: '1'
//       },
//       {
//         id: 'recents',
//         label: 'Recents',
//         quantity: '1'
//       }
//     ]
//   },
//   {
//     title: 'next',
//     content: [
//       {
//         id: 'recents',
//         label: 'Recents',
//         quantity: '1'
//       },
//       {
//         id: 'recents',
//         label: 'Recents',
//         quantity: '1'
//       }
//     ]
//   }
// ]

const items = [
  {
    id: 'recents',
    label: 'Recents',
    quantity: '1'
  },
  {
    id: 'home',
    label: 'Home',
    quantity: '1'
  },
  {
    id: 'applications',
    label: 'Applications',
    quantity: '1'
  },
  {
    id: 'desktop',
    label: 'Desktop',
    quantity: '1'
  },
  {
    id: 'downloads',
    label: 'Downloads',
    quantity: '1'
  },
  {
    id: 'documents',
    label: 'Documents',
    quantity: '1'
  }
]

const VehicleParts = () => {
  return (
    <section className='my-4 flex border-t pt-4'>
      <aside className='max-w-[200px] flex-1'>
        <Card>
          <CardHeader className='border-b bg-primary-light py-1 font-medium'>
            Filter Products
          </CardHeader>
          <CardContent className='bg-primary-desaturate'>
            <CheckboxGroup items={items} />
          </CardContent>
        </Card>
      </aside>
      <aside className='flex-[2]'>
        <div>
          <h4>Auto Glass Solutions for YOUR VEHICLE</h4>
          <h5>YOUR VEHICLE</h5>
        </div>
        <header className='flex justify-around'>
          <div>View type</div>
          <div>Total products found</div>
          <div>Sort</div>
        </header>
      </aside>
    </section>
  )
}

export default VehicleParts