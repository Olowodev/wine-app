import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons'

const RightNavbar = () => {
  return (
    <div className='px-6 py-6 border-b-2'>
       <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <p>EN</p>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className='flex items-center gap-24'>
                <FontAwesomeIcon icon={faBars} />
                <div className='flex items-center gap-4'>
                    <FontAwesomeIcon icon={faBagShopping} />
                    <p>$ 1359</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default RightNavbar