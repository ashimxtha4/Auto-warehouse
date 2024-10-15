'use client'

import React, { useState } from 'react'
import { CheckboxGroup } from '@/components/form/checkbox-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { usePathname } from 'next/navigation'

const items = [
  {
    title: 'Buying Choices - New or Used',
    content: [
      {
        id: 'new',
        label: 'New'
      },
      {
        id: 'used',
        label: 'Used'
      }
    ]
  },
  {
    title: 'Select Type of Auto Glass',
    content: [
      {
        id: 'recents2',
        label: 'Recents',
        quantity: '1'
      },
      {
        id: 'recents3',
        label: 'Recents',
        quantity: '1'
      }
    ]
  }
]

const VehicleParts = () => {
  const [showFilterProduct, setShowFilterProduct] = useState(true)
  const pathname = usePathname()
  const vehicleName = pathname?.replaceAll(/[-/]/g, ' ').toUpperCase()

  return (
    <section className='my-4 flex border-t pt-4'>
      <aside className='max-w-[200px] flex-1'>
        <Card>
          <CardHeader
            className='cursor-pointer border-b bg-primary-light py-1 font-medium'
            onClick={() => setShowFilterProduct(prev => !prev)}
          >
            Filter Products
          </CardHeader>
          {showFilterProduct && (
            <CardContent className='bg-primary-desaturate'>
              <CheckboxGroup items={items} />
            </CardContent>
          )}
        </Card>
      </aside>
      <aside className='flex-[2]'>
        <div>
          <h4>Auto Glass Solutions for {vehicleName}</h4>
        </div>
        <header className='flex justify-around'>
          <div>View type</div>
          <div>Sort</div>
        </header>
      </aside>
    </section>
  )
}

export default VehicleParts
