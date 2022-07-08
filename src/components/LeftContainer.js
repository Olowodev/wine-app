import React from 'react'
import LeftNavbar from './LeftNavbar'
import MainLeft from './MainLeft'

const LeftContainer = () => {
  return (
    <div className='border-r-2 max-w-5xl'>
        <LeftNavbar />
        <MainLeft />
    </div>
  )
}

export default LeftContainer