import React from 'react'
import Navbar from '@/components/home/navbar'
import MainNavbar from '@/components/home/navbar/main-nav'

const HomeLayout = () => {
  return (
    <section>
      <div
        style={{
          position: 'sticky',
          top: '0',
          width: '100%',
          zIndex: '999'
        }}
      >
        <Navbar />
        <MainNavbar />
      </div>
    </section>
  )
}

export default HomeLayout
