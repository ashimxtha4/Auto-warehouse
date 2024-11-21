import React from 'react'
import { Toaster } from 'react-hot-toast'

const Notification = () => {
  return (
    <Toaster position='top-center' containerStyle={{ zIndex: '9999999' }} />
  )
}

export default Notification
