import React from 'react'

const LeftNavbar = () => {
  return (
    <div className='border-b-2'>
      <div className='flex items-center justify-between px-6'>
        <h1 className='text-4xl font-black border-r-2 py-4 pr-6'>W</h1>
        <div className='flex items-center gap-12'>
          <p>About Us</p>
          <p>Wines</p>
          <p>Our Story</p>
          <p>Contacts</p>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar