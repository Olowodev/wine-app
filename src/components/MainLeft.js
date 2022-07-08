import React from 'react'

const MainLeft = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center my-9 ml-16 gap-10'>
            <h1 className='text-9xl'>Just relax, and go with the flow</h1>
            <p className='self-start'>Wine Relax is a premium semi-sweet wine produced from Rkatsiteli grapes using<br />
                the ancient technology, which has been used by Georgian winemakers for 8000 years.</p>
            <div className='self-start border-4 border-stone-900 rounded-full py-2 px-10'>
                <p>View More</p>
            </div>
        </div>
        <div className='w-full border-t-2'></div>
        <div>
            <div className='flex items-center justify-between mx-9'>
                <img />
                <div>
                    <h3>Come to the wine-tasting</h3>
                    <p>Only on June 1 there will be a tasting of our new wines in Tbiisi. To sign up for the tasting...</p>
                    
                </div>
                <div className='rounded-100 border-4 w-28 h-28 flex items-center justify-center'>
                    <p>Read more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLeft