import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import wine from '../images/wine.png'

const Slide = () => {
  return (
    <div className='w-96'>
        {/*<div className=''>
            <img className='w-96 h-96' src={wine}/>
  </div>*/}
        <div className=' gap-3'>
            <p>Wine Relax: red semi-sweet</p>
            <div className='flex-row py-6 border-2 justify-between flex'>
                <p>$ 135</p>
                <div className='rounded-100 leftCircle py-1 px-2 border-2 self-start'>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide