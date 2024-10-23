import React from 'react'
import SearchParts from '../search-parts'
import VehicleParts from './vehicle-parts'
import VehicleOverview from './vehicle-overview'

const Vehicle = () => {
  return (
    <>
      <section className='container my-2 md:my-4'>
        <SearchParts />
      </section>
      <section className='container'>
        <span className='my-2 hidden w-full justify-center rounded-md bg-primary-desaturate px-2 text-center text-2xl font-medium text-white md:flex'>
          Select Your Preferred Glass Type
        </span>
        <div className='relative my-4 mb-12 hidden w-full justify-center md:flex'>
          <VehicleOverview />
        </div>
        <VehicleParts />
      </section>
    </>
  )
}

export default Vehicle
