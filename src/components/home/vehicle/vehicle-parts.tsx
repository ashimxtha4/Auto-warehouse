'use client'

import React, { useState } from 'react'
import { CheckboxGroup } from '@/components/form/checkbox-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { usePathname } from 'next/navigation'
import { PRODUCT_FILTER_ITEMS } from '@/constants/filter-products-items'
import { CiGrid41, CiCircleList } from 'react-icons/ci'
import Link from 'next/link'

const VehicleParts = () => {
  const [showFilterProduct, setShowFilterProduct] = useState(true)
  const pathname = usePathname()
  const vehicleName = pathname?.replaceAll(/[-/]/g, ' ').toUpperCase()

  const CATEGORY_ITEMS = [
    {
      label: 'Windscreens',
      href: '/parts?category=wind-screens'
    },
    {
      label: 'Body Side Glass',
      href: '/parts?category=body-side-glass'
    },
    {
      label: 'Rear Windows',
      href: '/parts?category=rear-windows'
    },
    {
      label: 'Mirrors',
      href: '/parts?category=mirrors'
    },
    {
      label: 'Window Regulators',
      href: '/parts?category=window-regulators'
    },
    {
      label: 'Wiper Blades',
      href: '/parts?category=wiper-blades'
    },
    {
      label: 'Misc Items',
      href: '/parts?category=misc-items'
    },
    {
      label: 'Misc Window Accessories',
      href: '/parts?category=misc-window-accessories'
    },
    {
      label: 'Headlights',
      href: '/parts?category=headlights'
    },
    {
      label: 'Tail Lights',
      href: '/parts?category=tail-lights'
    }
  ]

  return (
    <section className='my-4 flex gap-5 border-t pt-4'>
      <aside className='max-w-[250px] flex-1'>
        <Card>
          <CardHeader
            className='cursor-pointer border-b bg-primary-dark py-1 font-medium text-white'
            onClick={() => setShowFilterProduct(prev => !prev)}
          >
            Filter Products
          </CardHeader>
          {showFilterProduct && (
            <CardContent className='bg-primary-desaturate'>
              <CheckboxGroup items={PRODUCT_FILTER_ITEMS} />
            </CardContent>
          )}
        </Card>
        <Card className='mt-4'>
          <CardHeader className='cursor-pointer border-b bg-primary-dark py-1 font-medium text-white'>
            Categories
          </CardHeader>
          <CardContent className='flex flex-col bg-primary-desaturate'>
            {CATEGORY_ITEMS.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className='hover:bg-primary-saturate hover:text-white'
              >
                {item.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      </aside>
      <aside className='flex-[2]'>
        <div>
          <h4>Auto Glass Solutions for {vehicleName}</h4>
        </div>
        <header className='flex justify-between'>
          <div className='flex items-center gap-1 border'>
            <CiGrid41 size={24} className='border-r pr-1' />
            <CiCircleList size={24} />
          </div>
          <div>Sort</div>
        </header>
      </aside>
    </section>
  )
}

export default VehicleParts
