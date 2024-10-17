import React from 'react'
import SearchParts from '../search-parts'
import VehicleParts from './vehicle-parts'
import Suv from './vehicle-type/suv'

const Vehicle = () => {
  return (
    <>
      <section className='container my-2 md:my-4'>
        <SearchParts />
      </section>
      <section className='container'>
        <span className='my-2 flex w-full justify-center rounded-md bg-primary-desaturate px-2 text-center text-2xl font-medium text-white'>
          Select Your Preferred Glass Type
        </span>
        <div className='relative my-4 flex w-full justify-center'>
          <Suv />
        </div>
        <VehicleParts />
      </section>
    </>
  )
}

export default Vehicle
