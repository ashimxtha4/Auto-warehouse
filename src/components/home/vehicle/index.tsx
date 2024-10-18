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
        <span className='my-2 hidden w-full justify-center rounded-md bg-primary-desaturate px-2 text-center text-2xl font-medium text-white md:flex'>
          Select Your Preferred Glass Type
        </span>
        <div className='relative my-4 hidden w-full justify-center md:flex'>
          <Suv />
        </div>
        <VehicleParts />
      </section>
    </>
  )
}

export default Vehicle
