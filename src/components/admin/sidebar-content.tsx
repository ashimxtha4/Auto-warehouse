import { useSearchParams } from 'next/navigation'
import React from 'react'
import AddProduct from './product/add-product'
import ImportProducts from './product/import-products'
import ProductList from './product/product-list'
import VehicleMake from './vehicle/vehicle-make'
import VehicleModel from './vehicle/vehicle-model'
import VehicleSeries from './vehicle/vehicle-series'

const SideBarContent = () => {
  const searchParams = useSearchParams()
  const search = searchParams?.get('ref')

  switch (search) {
    case 'add-products':
      return <AddProduct />
    case 'import-products':
      return <ImportProducts />
    case 'product-list':
      return <ProductList />
    case 'vehicle-make':
      return <VehicleMake />
    case 'vehicle-model':
      return <VehicleModel />
    case 'vehicle-series':
      return <VehicleSeries />
    case 'vehicle-year':
      return <>vehicle-year</>
    case 'vehicle-body':
      return <>vehicle-body</>
    case 'vehicle-group':
      return <>vehicle-group</>
    case 'order-status':
      return <>order-status</>
    case 'product-orders':
      return <>product-orders</>
    case 'dispatch-products':
      return <>dispatch-products</>
    case 'quote-details':
      return <>quote-details</>
    case 'quote-reply':
      return <>quote-reply</>
    case 'quote-list':
      return <>quote-list</>
    case 'add-glass-type':
      return <>add-glass-type</>
    case 'glass-type-list':
      return <>glass-type-list</>
    default:
      return <h2>Content</h2>
  }
}

export default SideBarContent
