import React from 'react'
import LeftNavbar from './LeftNavbar'
import MainLeft from './MainLeft'

const LeftContainer = () => {
  return (
    <div className='border-r-2 h-[100vh] max-w-5xl col-span-3'>
        <LeftNavbar />
        <MainLeft />
    </div>
  )
}

export default LeftContainer